package com.jhaner;

/**
 * Representa un tablero de juego con celdas que pueden ser ocupadas por diferentes valores.
 * El tablero tiene un número de filas y columnas determinado al inicio del juego.
 */
public class Board {

    private final int rows;
    private final int cols;
    private final Letter[][] grid;

    /**
     * {@code @constructor}
     * Crear un tablero con el numero de filas y columans asignadas.
     *
     * @param rows el numero de filas del tablero.
     * @param cols el numero de columnas del tablero.
     */
    public Board(int rows, int cols) {
        this.rows = rows;
        this.cols = cols;
        this.grid = new Letter[rows][cols];
    }

    /**
     * Devuelve las filas del tablero.
     *
     * @return en numero de filas.
     */
    public int getRows() {
        return rows;
    }

    /**
     * Devuelve las columnas del tablero.
     *
     * @return el numero de columnas.
     */
    public int getCols() {
        return cols;
    }

    /**
     * Escribe en una casilla especifica del tablero.
     *
     * @param row   la fila de la celda.
     * @param col   la columna de la celda.
     * @param value el valor a escribir en la celda.
     */
    public void setCell(int row, int col, Letter value){
        this.grid[row][col] = value;
    }

    /**
     * Devuelve una casilla especifica del tablero
     *
     * @param row la fila de la celda.
     * @param col la columna de la celda.
     * @return el valor de la celda correspondiente a las coordenadas dadas.
     */
    public Letter getCell(int row, int col){
        return grid[row][col];
    }

    /**
     * Devuelve true si la celda esta vacia y false en caso contrario.
     *
     * @param row la fila de la celda.
     * @param col la columna de la celda.
     * @return true si la celda esta vacia, false en caso contrario.
     */
    public boolean isEmptyCell(int row, int col){
        return this.getCell(row, col) == Letter.EMPTY;
    }

}
