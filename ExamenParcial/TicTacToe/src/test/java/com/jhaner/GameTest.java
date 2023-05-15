package com.jhaner;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class GameTest {

    /** Prueba - limites del tablero I
     *
     */
    @Test
    void ThenRuntimeExceptionRangeOutInX() {
        Assertions.assertThrows(RuntimeException.class, () -> {
            Game game = new Game();
            game.makeMove(-1,1,Cell.CROSS);
        });
    }

    /** Prueba - limites del tablero II
     *
     */
    @Test
    void ThenRuntimeExceptionRangeOutInY() {
        Assertions.assertThrows(RuntimeException.class, () -> {
            Game game = new Game();
            game.makeMove(1,4,Cell.CROSS);
        });
    }

    /** Prueba - lugar ocupado
     *
     */
    @Test
    void ThenRuntimeExceptionNotEmptyCell() {
        Assertions.assertThrows(RuntimeException.class, () -> {
            Game game = new Game();
            game.makeMove(1,1,Cell.CROSS);
            game.makeMove(1,1,Cell.NOUGHT);
        });
    }

    /** Prueba - X juega primero
     *
     */
    @Test
    void ThenFisrtLetterX(){
        Game game = new Game();
        Assertions.assertEquals(game.getCurrentPlayer().getLetter(), Cell.CROSS);
    }

    /** Prueba -
     *
     */


}