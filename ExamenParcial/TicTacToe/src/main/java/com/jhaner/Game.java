package com.jhaner;

public class Game {

    protected static final int TOTALROWS = 3;
    protected static final int TOTALCOLUMNS = 3;
    private final Board board;

    private final Player[] players;

    private int indexTurn = 0;

    public Game(){
        this.board = new Board(TOTALROWS, TOTALCOLUMNS);
        this.players = new Player[2];
        this.initGame();
    }

    public void initGame(){
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                this.board.setCell(i,j,Cell.EMPTY);
            }
        }
        this.players[0] = new Player(Cell.CROSS);
        this.players[1] = new Player(Cell.NOUGHT);
    }

    public void makeMove(int row, int col, Cell value){
        boolean outRangeX = row < 0 || row >= this.board.getRows();
        boolean outRangeY = col < 0 || col >= this.board.getCols();
        boolean cellNotEmpty = !this.board.isEmptyCell(row, col);

        if ( outRangeX || outRangeY || cellNotEmpty){
            throw new RuntimeException();
        }

        this.board.setCell(row,col,value);
    }

    public Player[] getPlayers(){
        return this.players;
    }

    public Player getCurrentPlayer(){
        return players[indexTurn];
    }

    public void changeTurn(){
        this.indexTurn %= 1;
    }

}
