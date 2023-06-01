import { Letter } from "@/classes/enums/Letter";
import { IMoveGenerator } from "@/classes/utils/IMoveGenerator";
import { Computer } from "@/classes/models/Computer";
import { Player } from "@/classes/models/Player";
import { CheckWinner } from "@/classes/utils/CheckWinner";
import { Game } from "@/classes/models/Game";
import { Mode } from "../enums/Mode";
import { Human } from "../models/Human";

/**
 * @class Game
 * @classdesc Representa un juego de SOS.
 */
export class GameController {
	private game: Game;
	private currentPlayer: Human | Computer;
	private isGameOver: boolean;
	private currentPlayerIndex: number;

	/**
	 * Crea un juego de SOS.
	 *
	 * @constructor
	 * @param {Game} game - El juego.
	 */
	constructor(game: Game) {
		this.game = game;
		this.currentPlayer = game.getPlayers()[0];
		this.isGameOver = false;
		this.currentPlayerIndex = 0;
	}

    /**
     * Retorna el juego.
     * 
     * @returns {Game} El juego. 
     */
    public getGame(): Game {
        return this.game;
    }

	/**
	 * Retorna el jugador actual.
	 *
	 * @returns {Player} El jugador actual.
	 */
	public getCurrentPlayer(): Player {
		return this.currentPlayer;
	}

	/**
	 * Cambia el jugador actual al siguiente jugador en la lista de jugadores.
	 */
	private changeCurrentPlayer(): void {
		this.currentPlayerIndex =
			(this.currentPlayerIndex + 1) % this.game.getPlayers().length;
	}

	/**
	 * Retorna `true` si el juego ha terminado.
	 *
	 * @returns {boolean} `true` si el juego ha terminado, `false` en caso contrario.
	 */
	public getGameOver(): boolean {
		return this.isGameOver;
	}

	/**
	 * Retorna el jugador ganador del juego.
	 *
	 * @throws Error si hay empate.
	 * @returns {Player} El jugador ganador.
	 */
	public getWinner(): Player {
		const player1 = this.game.getPlayers()[0];
		const player2 = this.game.getPlayers()[1];
		const scorePlayer1 = player1.getScore().getPoints();
		const scorePlayer2 = player2.getScore().getPoints();
		if (scorePlayer1 === scorePlayer2) {
			throw new Error("Draw.");
		}
		return scorePlayer1 > scorePlayer2 ? player1 : player2;
	}

	/**
	 * Realiza un movimiento en el tablero.
	 *
	 * @param {number} row - La fila donde se realizará el movimiento.
	 * @param {number} column - La columna donde se realizará el movimiento.
	 * @param {string} letter - La letra que se colocará en la posición especificada.
	 */
	public makeMove(row: number, column: number, letter: Letter): void {
		const board = this.game.getBoard();
		const mode = this.game.getMode();
		board.setCell(row, column, letter);
		const points = new CheckWinner(board, mode).checkBoard();
		this.currentPlayer.getScore().addPoints(points);
        if ( this.game.getBoard().isFull() || (points > 0 && mode === Mode.SIMPLE_GAME) ) {
            this.isGameOver = true;
        }
		this.changeCurrentPlayer();
	}

    /**
     * Realiza un movimiento de la Computadora en el tablero.
     */
	public imakeMove(): void {
        const board = this.game.getBoard();
        if (this.currentPlayer instanceof Computer) {
            const computer = this.currentPlayer;
            const [row, col, letter]: [number, number, Letter] =
                new IMoveGenerator().generateMove(board, computer)!;
            this.makeMove(row, col, letter);
        }
	}
}
