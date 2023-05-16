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
    private GameState currentGameState;

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
     * Establece el estado inicial del juego.
     */
    public void initGame(){
        for (int row  = 0; row < TOTAL_ROWS; row ++) {
            for (int col  = 0; col < TOTAL_COLUMNS; col ++) {
                this.board.setCell(row, col, Letter.EMPTY);
            }
        }
        this.players[0] = new Player(Letter.CROSS);
        this.players[1] = new Player(Letter.NOUGHT);
        this.indexTurn = 0;
        this.currentGameState = GameState.PLAYING;
    }

    /**
     * Realiza un movimiento en el juego colocando una ficha en la casilla especificada.
     *
     * @param row   la fila de la casilla en la que se realizara el movimiento.
     * @param col   la columna de la casilla en la que se realizara el movimiento.
     * @throws RuntimeException si las coordenadas estan fuera del rango del tablero o la casilla no esta vacia.
     */
    public void makeMove(int row, int col){
        boolean outRangeX = row < 0 || row >= this.board.getRows();
        boolean outRangeY = col < 0 || col >= this.board.getCols();
        boolean cellNotEmpty = !this.board.isEmptyCell(row, col);
        if ( outRangeX || outRangeY || cellNotEmpty){
            throw new RuntimeException();
        }
        this.board.setCell(row,col,this.getCurrentLetter());
        this.updateGameState(getCurrentLetter(), row, col);
        this.changeTurn();
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
     * Verifica si el jugador actual ha ganado el juego en la posicion especificada.
     *
     * @param turn    la letra del jugador actual
     * @param row     la fila de la posicion
     * @param column  la columna de la posicion
     * @return true si el jugador actual ha ganado en la posicion especificada, false de lo contrario
     */
    private boolean hasWon(Letter turn, int row, int column) {
        Letter token = (turn==Letter.CROSS)? Letter.CROSS: Letter.NOUGHT;
        boolean isWinRow  = board.getCell(row,0) == token && board.getCell(row,1) == token && board.getCell(row,2) == token;
        boolean isWinColumn = board.getCell(0,column) == token && board.getCell(1,column) == token && board.getCell(2,column) == token;
        boolean isWinMainDiagonal = board.getCell(0,0) == token && board.getCell(1,1) == token && board.getCell(2,2) == token;
        boolean isWinSecondaryDiagonal = board.getCell(0,2) == token && board.getCell(1,1) == token && board.getCell(2,0) == token;

        return isWinRow || isWinColumn || isWinMainDiagonal || isWinSecondaryDiagonal;
    }

    /**
     * Verifica si el juego ha terminado en un empate.
     *
     * @return true si el juego ha terminado en un empate, false de lo contrario
     */
    public boolean isDraw() {
        for (int row = 0; row < TOTAL_ROWS; ++row) {
            for (int col = 0; col < TOTAL_COLUMNS; ++col) {
                if (this.board.isEmptyCell(row, col)) {
                    return false;
                }
            }
        }
        return true;
    }

    /**
     * Actualiza el estado del juego segun el turno, fila y columna especificados.
     *
     * @param turn    la letra del jugador actual
     * @param row     la fila de la posicion
     * @param column  la columna de la posicion
     */
    public void updateGameState(Letter turn, int row, int column) {
        if (hasWon(turn, row, column)) {
            currentGameState = (turn == Letter.CROSS) ? GameState.CROSS_WON : GameState.NOUGHT_WON;
        } else if (isDraw()) {
            currentGameState = GameState.DRAW;
        }
    }

    /**
     * Devuelve el estado actual del juego.
     *
     * @return el estado actual del juego
     */
    public GameState getGameState() {
        return currentGameState;
    }

}
