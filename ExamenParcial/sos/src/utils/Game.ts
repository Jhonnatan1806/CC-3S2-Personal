import { Mode } from "./Mode";
import { Board } from "./Board";
import { Player } from "./Player";
import { Letter } from "./Letter";
import { IA } from "./IA";

/**
 * @class Game
 * @classdesc Representa un juego de SOS.
 */
export class Game {
  private board: Board;
  private players: Player[];
  private mode: Mode;
  private currentPlayerIndex = 0;
  private isGameOver = false;

  /**
   * Crea un juego de SOS.
   * @constructor
   * @param {Board} board - El tablero del juego.
   * @param {Player[]} players - Los jugadores del juego.
   * @param {Mode} mode - El modo del juego.
   * @throws Error si no se provee un tablero.
   * @throws Error si no se proveen al menos dos jugadores.
   */
  constructor(board: Board, players: Player[], mode: Mode = Mode.SIMPLE_GAME) {
    if (!board) {
      throw new Error("No board provided.");
    }
    if (!players || players.length < 2) {
      throw new Error("At least two players are required.");
    }
    this.board = board;
    this.players = players;
    this.mode = mode;
  }

  /**
   * Retorna el tablero del juego.
   * @returns {Board} El objeto que representa el tablero del juego.
   */
  public getBoard(): Board {
    return this.board;
  }

  /**
   * Retorna los jugadores del juego.
   * @returns {Player[]} Un arreglo con los jugadores del juego.
   */
  public getPlayers(): Player[] {
    return this.players;
  }

  /**
   * Retorna el modo del juego.
   * @returns {Mode} El modo del juego.
   */
  public getMode(): Mode {
    return this.mode;
  }

  /**
   * Cambia el jugador actual al siguiente jugador en la lista de jugadores.
   * @returns {void} No retorna nada.
   */
  private changeCurrentPlayer(): void {
    this.currentPlayerIndex =
      (this.currentPlayerIndex + 1) % this.players.length;
  }

  /**
   * Retorna el jugador actual.
   * @returns {Player} El jugador actual.
   */
  public getCurrentPlayer(): Player {
    return this.players[this.currentPlayerIndex];
  }

  /**
   * Retorna `true` si el juego ha terminado.
   * @returns {boolean} `true` si el juego ha terminado, `false` en caso contrario.
   */
  public getGameOver(): boolean {
    return this.isGameOver;
  }

  /**
   * Retorna el jugador ganador del juego.
   * @throws Error si hay empate.
   * @returns {Player} El jugador ganador.
   */
  public getWinner(): Player | IA {
    if (this.players[0].getPoints() === this.players[1].getPoints()) {
      throw new Error("Draw.");
    }
    return this.players[0].getPoints() > this.players[1].getPoints()
      ? this.players[0]
      : this.players[1];
  }

  /**
   * Realiza un movimiento en el tablero.
   * @param {number} row - La fila donde se realizará el movimiento.
   * @param {number} column - La columna donde se realizará el movimiento.
   * @param {string} letter - La letra que se colocará en la posición especificada.
   * @throws Error si el juego ha terminado.
   * @returns {void} No retorna nada.
   */
  public makeMove(row: number, column: number, letter: Letter): void {
    if (this.board.getCell(row, column) !== "") {
      throw new Error("Cell is not empty.");
    }
    if (this.board.isFull()) {
      throw new Error("Game is over.");
    }
    if(this.isGameOver){
      return;
    }
    this.board.setCell(row, column, letter);
    this.getCurrentPlayer().addPoints(this.board.checkSOS(this.mode));
    this.changeCurrentPlayer();
    if (
      this.mode === Mode.SIMPLE_GAME &&
      this.board.checkSOS(this.mode) === 1
    ) {
      this.isGameOver = true;
    }
  }
}
