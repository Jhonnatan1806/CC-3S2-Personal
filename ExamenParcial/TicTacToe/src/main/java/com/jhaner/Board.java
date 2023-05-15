package com.jhaner;

public class Board {

    private final int rows;
    private final int cols;
    private final Cell[][] grid;

    public Board(int rows, int cols) {
        this.rows = rows;
        this.cols = cols;
        this.grid = new Cell[rows][cols];
    }

    public int getCols() {
        return cols;
    }

    public int getRows() {
        return rows;
    }

    public void setCell(int row, int col, Cell value){
        this.grid[row][col] = value;
    }

    public Cell getCell(int row, int col){
        return grid[row][col];
    }

    public boolean isEmptyCell(int row, int col){
        return this.getCell(row, col) == Cell.EMPTY;
    }

}
