import { Mode } from "./Mode";
import { Letter } from "./Letter";

/**
 * @class Board
 * @classdesc Representa un tablero de juego.
 */
export class Board {
  private readonly rows: number;
  private readonly columns: number;
  private readonly grid: Letter[][];

  /*
   * Crear un tablero de juego.
   * @constructor
   * @param {number} rows - Número de filas del tablero (opcional).
   * @param {number} columns - Número de columnas del tablero (opcional).
   */
  constructor(rows: number = 3, columns: number = 3) {
    this.rows = rows;
    this.columns = columns;
    this.grid = new Array(this.rows);
    this.grid = new Array(rows)
      .fill(null)
      .map(() => new Array(columns).fill(Letter.EMPTY));
  }

  /**
   * Clona el tablero.
   * @returns {Board} Clon del tablero.
   */
  public clone(): Board {
    const newBoard = new Board(this.rows, this.columns);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        newBoard.setCell(i, j, this.grid[i][j]);
      }
    }
    return newBoard;
  }

  /**
   * Retorna el número de filas del tablero.
   * @returns {number} Número de filas del tablero.
   */
  public getRows(): number {
    return this.rows;
  }

  /**
   * Retorna el número de columnas del tablero.
   * @returns {number} Número de columnas del tablero.
   */
  public getColumns(): number {
    return this.columns;
  }

  /**
   * Retorna el tablero de juego.
   * @returns {Letter[][]} Tablero de juego.
   */
  public getGrid(): Letter[][] {
    return this.grid;
  }

  /**
   * Establece el valor de una celda del tablero.
   * @param {number} row Posición de la fila.
   * @param {number} column Posición de la columna.
   * @param {Letter} value Valor a asignar.
   */
  public setCell(row: number, column: number, value: Letter): void {
    this.grid[row][column] = value;
  }

  /**
   * Obtiene el valor de una celda del tablero.
   * @param {number} row
   * @param {number} column
   * @returns {string}
   */
  public getCell(row: number, column: number): string {
    if (row < 0 || row >= this.rows || column < 0 || column >= this.columns) {
      throw new Error("Invalid position.");
    }
    return this.grid[row][column];
  }

  /**
   * Retorna `true` si el tablero está lleno.
   * @returns {boolean} `true` si el tablero está lleno, `false` en caso contrario.
   */
  public isFull(): boolean {
    return this.grid.every((row) => row.every((cell) => cell !== ""));
  }

  /**
   * Chequea si existe SOS en el tablero.
   * @param {Mode} mode Modo de juego.
   * @returns {number} 1 si existe SOS, 0 en caso contrario.
   */
  public checkSOS(mode: Mode): number {
    if (mode === Mode.GENERAL_GAME) {
      return this.checkGeneral();
    }
    return this.checkSimple();
  }

  /**
   * Chequea si existe SOS en el tablero en el modo simple.
   * @returns {number} 1 si existe SOS, 0 en caso contrario.
   */
  public checkSimple(): number {
    const rows: string[] = this.grid.map((row) => row.join(""));
    const columns: string[] = this.grid.reduce(
      (acc: string[], row: string[], i: number) => {
        row.forEach((_, j) => {
          acc[j] += this.grid[i][j];
        });
        return acc;
      },
      Array.from({ length: this.columns }, () => "")
    );
    const diagonals: string[] = [
      `${this.grid[0][0]}${this.grid[1][1]}${this.grid[2][2]}`,
      `${this.grid[0][2]}${this.grid[1][1]}${this.grid[2][0]}`,
    ];
    const allStrings: string[] = [...rows, ...columns, ...diagonals];
    return allStrings.filter((str) => str === "SOS").length > 0 ? 1 : 0;
  }

  public checkGeneral(): number {
    // falta implementar
    return 0;
  }
}
