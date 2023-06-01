import { Board } from "./Board";
import { Letter } from "./Letter";

/**
 * @class Movement
 * @classdesc Clase que representa un movimiento en el tablero.
 */
export class Movement {
  private readonly board: Board;

  /**
   * @constructor
   * @param {Board} board
   */
  constructor(board: Board) {
    this.board = board;
  }

  /**
   * Encuentra una celda vacía aleatoria
   * @returns {[number, number, Letter]} [row, col, letter]
   */
  public getRandomCell(): [number, number, Letter] {
    if (this.board.isFull()) {
      throw new Error("The board is full");
    }
    let row: number, col: number;
    do {
      row = Math.floor(Math.random() * this.board.getRows());
      col = Math.floor(Math.random() * this.board.getColumns());
    } while (this.board.getCell(row, col) !== Letter.EMPTY);
    const letter = Math.random() < 0.5 ? Letter.S : Letter.O;
    return [row, col, letter];
  }

  /**
   * Encuentra una celda vacía adyacente a una celda llena
   * @returns {[number, number, Letter]} [row, col, letter]
   */
  public getProximityCell(): [number, number, Letter] {
    if (this.board.isFull()) {
      throw new Error("The board is full");
    }

    const rows = this.board.getRows();
    const cols = this.board.getColumns();
    let cellsWithLetter: Array<[number, number]> = [];

    // Busca las celdas llenas en el tablero
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (this.board.getCell(r, c) !== Letter.EMPTY) {
          cellsWithLetter.push([r, c]);
        }
      }
    }

    if (cellsWithLetter.length === 0) {
      // No hay celdas llenas, devuelve una celda aleatoria en el tablero
      const randomRow = Math.floor(Math.random() * rows);
      const randomCol = Math.floor(Math.random() * cols);
      const letter = Math.random() < 0.5 ? Letter.S : Letter.O;
      return [randomRow, randomCol, letter];
    }

    // Recorre las celdas del tablero en orden determinado
    for (let [r, c] of cellsWithLetter) {
      // Busca las celdas adyacentes vacias
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          if (dr === 0 && dc === 0) {
            // Ignora la celda actual
            continue;
          }
          const nr = r + dr;
          const nc = c + dc;
          if (
            nr >= 0 &&
            nr < rows &&
            nc >= 0 &&
            nc < cols &&
            this.board.getCell(nr, nc) === Letter.EMPTY
          ) {
            // Encontro una celda adyacente vacia, hace un movimiento aleatorio en esa celda
            const letter = Math.random() < 0.5 ? Letter.S : Letter.O;
            return [nr, nc, letter];
          }
        }
      }
    }

    throw new Error("No valid moves");
  }

  /**
   * Encuentra una celda vacia adyacente a una celda llena
   * @returns {[number, number, Letter]} [row, col, letter]
   * @see https://en.wikipedia.org/wiki/Minimax
   */
  public getMinimax(): [number, number, Letter] {
    // falta implementar
    return [0, 0, Letter.EMPTY];
  }
}
