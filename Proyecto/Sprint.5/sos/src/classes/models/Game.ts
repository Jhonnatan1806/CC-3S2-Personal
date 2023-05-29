import { Mode } from "@/classes/enums/Mode";
import { Board } from "@/classes/models/Board";
import { Player } from "@/classes/models/Player";

/**
 * @class Game
 * @classdesc Representa un juego de SOS.
 */
export class Game {
	private board: Board;
	private mode: Mode;
	private players: Player[];

	/**
	 * Crea un juego de SOS.
	 *
	 * @constructor
	 * @param {Board} board - El tablero del juego.
	 * @param {Mode} mode - El modo del juego.
	 * @param {Player[]} players - Los jugadores del juego.
	 */
	constructor(
		board: Board,
    players: Player[],
		mode: Mode = Mode.SIMPLE_GAME
	) {
		this.board = board;
		this.mode = mode;
		this.players = players;
	}

	/**
	 * Retorna el tablero del juego.
	 *
	 * @returns {Board} El objeto que representa el tablero del juego.
	 */
	public getBoard(): Board {
		return this.board;
	}

	/**
	 * Retorna el modo del juego.
	 *
	 * @returns {Mode} El modo del juego.
	 */
	public getMode(): Mode {
		return this.mode;
	}

	/**
	 * Retorna los jugadores del juego.
     * 
	 * @returns {Player[]} Un arreglo con los jugadores del juego.
	 */
	public getPlayers(): Player[] {
		return this.players;
	}

    /**
     * Cambia el tablero del juego.
     * 
     * @param {Board} board - El nuevo tablero del juego.
     */
    public setBoard(board: Board): void {
        this.board = board;
    }

    /**
     * Cambia el modo del juego.
     * 
     * @param {Mode} mode - El nuevo modo del juego.
     */
    public setMode(mode: Mode): void {
        this.mode = mode;
    }

}
