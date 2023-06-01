package com.jhaner;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class WinConditionsTest {

    private Game game;

    @BeforeEach
    public void setUp() throws Exception {
        game = new Game();
    }

    @AfterEach
    public void tearDown() throws Exception {
        game = null;
    }

    /**
     * AC 3.1 por defecto no hay ganador
     * CUANDO no se cumple ninguna condicion ganadora,
     * ENTONCES no hay un ganador del juego.
     */
    @Test
    void testGameInProgress(){
        game.makeMove(1,1);
        Assertions.assertEquals(GameState.PLAYING, game.getGameState());
    }

    /**
     * AC 3.2 condicion ganadora I
     * CUANDO toda la linea horizontal esta ocupada por las piezas del jugador actual,
     * ENTONCES el jugador ha ganado el juego.
     */
    @Test
    void testGameEndsWithHorizontalWin(){
        game.makeMove(0,0); // X
        game.makeMove(1,1); // O
        game.makeMove(0,1); // X
        game.makeMove(2,2); // O
        game.makeMove(0,2); // X
        Assertions.assertEquals(GameState.CROSS_WON, game.getGameState());
    }

    /**
     * AC 3.3 condicion ganadora II
     * CUANDO toda la linea vertical esta ocupada por las piezas del jugador actual,
     * ENTONCES el jugador ha ganado el juego.
     */
    @Test
    void testGameEndsWithVerticalWin(){
        game.makeMove(0,0); // X
        game.makeMove(0,1); // O
        game.makeMove(0,2); // X
        game.makeMove(1,1); // O
        game.makeMove(2,2); // X
        game.makeMove(2,1); // O
        Assertions.assertEquals(GameState.NOUGHT_WON, game.getGameState());
    }

    /**
     * AC 3.4 condicion ganadora III
     * CUANDO toda la linea diagonal principal esta ocupada por las piezas del jugador actual,
     * ENTONCES el jugador ha ganado el juego.
     */
    @Test
    void testGameEndsWithPrimaryDiagonalWin(){
        game.makeMove(0,0); // X
        game.makeMove(0,1); // O
        game.makeMove(1,1); // X
        game.makeMove(0,2); // O
        game.makeMove(2,2); // X
        Assertions.assertEquals(GameState.CROSS_WON, game.getGameState());
    }

    /**
     * AC 3.5 condicion ganadora IV
     * CUANDO toda la linea diagonal secundaria esta ocupada por las piezas del jugador actual,
     * ENTONCES el jugador ha ganado el juego.
     */
    @Test
    void testGameEndsWithSecondaryDiagonalWin() {
        game.makeMove(0, 2); // X
        game.makeMove(0, 0); // O
        game.makeMove(1, 1); // X
        game.makeMove(1, 0); // O
        game.makeMove(2, 0); // X
        Assertions.assertEquals(GameState.CROSS_WON, game.getGameState());
    }

    /**
     * AC 4.1 manejo de una situacion de empate
     * CUANDO no hay mas movimientos disponibles en el tablero
     * y no se ha cumplido ninguna de las condiciones ganadoras,
     * ENTONCES el juego termina en un empate.
     */
    @Test
    void testGameEndsWithDraw(){
        game.makeMove(0,0); // X
        game.makeMove(1,1); // O
        game.makeMove(1,0); // X
        game.makeMove(2,0); // O
        game.makeMove(0,2); // X
        game.makeMove(0,1); // O
        game.makeMove(2,1); // X
        game.makeMove(2,2); // O
        game.makeMove(1,2); // X
        Assertions.assertEquals(GameState.DRAW, game.getGameState());
    }


}
