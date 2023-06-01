import { Letter } from "@/classes/enums/Letter";

/**
 * @class Board
 * @classdesc Representa un tablero de juego.
 */
export class Board {
	private readonly rows: number;
	private readonly columns: number;
	private readonly grid: Letter[][];

	/**
	 * Crear un tablero de juego.
     * 
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
	 * Retorna el número de filas del tablero.
     * 
	 * @returns {number} Número de filas del tablero.
	 */
	public getRows(): number {
		return this.rows;
	}

	/**
	 * Retorna el número de columnas del tablero.
     * 
	 * @returns {number} Número de columnas del tablero.
	 */
	public getColumns(): number {
		return this.columns;
	}

	/**
	 * Retorna el tablero de juego.
     * 
	 * @returns {Letter[][]} Tablero de juego.
	 */
	public getGrid(): Letter[][] {
		return this.grid;
	}

    /**
     * Retorna `true` si el tablero está vacío.
     * 
     * @returns {boolean} `true` si el tablero está vacío, `false` en caso contrario.
     */
    public isEmpty(): boolean {
        return this.grid.every((row) => row.every((cell) => cell === ""));
    }

    /**
     * Retorna `true` si el tablero está lleno.
     * 
     * @returns {boolean} `true` si el tablero está lleno, `false` en caso contrario.
     */
    public isFull(): boolean {
        return this.grid.every((row) => row.every((cell) => cell !== ""));
    }

	/**
	 * Establece el valor de una celda del tablero.
     * 
	 * @param {number} row Posición de la fila.
	 * @param {number} column Posición de la columna.
	 * @param {Letter} value Valor a asignar.
	 */
	public setCell(row: number, column: number, value: Letter): void {
		this.grid[row][column] = value;
	}

	/**
	 * Obtiene el valor de una celda del tablero.
     * 
	 * @param {number} row Posición de la fila.
	 * @param {number} column Posición de la columna.
	 * @returns {string} Valor de la celda.
	 */
	public getCell(row: number, column: number): string {
		return this.grid[row][column];
	}

}
