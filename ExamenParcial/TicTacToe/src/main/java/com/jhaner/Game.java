package com.jhaner;

/**
 * Representa la clase Principal del tic tac toe
 */
public class Game {

    private static final int TOTAL_ROWS = 3;
    private static final int TOTAL_COLUMNS = 3;
    private final Board board;

    private final Player[] players;

    private int indexTurn;

    public Game(){
        this.board = new Board(TOTAL_ROWS, TOTAL_COLUMNS);
        this.players = new Player[2];
        this.initGame();
    }

    /**
     * Inicializa el juego configurando los parámetros iniciales.
     * Limpia el tablero asignando el valor EMPTY a cada celda.
     * Crea una lista de jugadores asignandole sus letras CROSS y NOUGHT.
     * Establece el turno del jugador inicial en 0.
     */
    public void initGame(){
        for (int row  = 0; row  <  this.board.getRows(); row ++) {
            for (int col  = 0; col  < this.board.getRows(); col ++) {
                this.board.setCell(row, col, Letter.EMPTY);
            }
        }
        this.players[0] = new Player(Letter.CROSS);
        this.players[1] = new Player(Letter.NOUGHT);
        this.indexTurn = 0;
    }

    /**
     * Realiza un movimiento en el juego colocando una ficha en la casilla especificada.
     *
     * @param row   la fila de la casilla en la que se realizara el movimiento.
     * @param col   la columna de la casilla en la que se realizara el movimiento.
     * @param value el valor de la ficha a colocar en la casilla.
     * @throws RuntimeException si las coordenadas estan fuera del rango del tablero o la casilla no esta vacia.
     */
    public void makeMove(int row, int col, Letter value){
        boolean outRangeX = row < 0 || row >= this.board.getRows();
        boolean outRangeY = col < 0 || col >= this.board.getCols();
        boolean cellNotEmpty = !this.board.isEmptyCell(row, col);

        if ( outRangeX || outRangeY || cellNotEmpty){
            throw new RuntimeException();
        }

        this.board.setCell(row,col,value);
    }

    /**
     * Cambia el turno al siguiente jugador en la lista de jugadores.
     */
    public void changeTurn(){
        this.indexTurn = (indexTurn + 1) % players.length;
    }

    /**
     * Devuelve la letra del jugador actual en su turno.
     *
     * @return la letra del jugador actual.
     */
    public Letter getCurrentLetter(){
        return players[indexTurn].getLetter();
    }

    /**
     * Devuelve el jugador en la posicion especificada.
     *
     * @param index la posicion del jugador en el arreglo de jugadores.
     * @return el jugador en la posicion especificada.
     */
    public Player getPlayer(int index){
        return this.players[index];
    }

    /**
     * Devuelve el jugador actual en su turno.
     *
     * @return el jugador actual.
     */
    public Player getCurrentPlayer(){
        return players[indexTurn];
    }
}
