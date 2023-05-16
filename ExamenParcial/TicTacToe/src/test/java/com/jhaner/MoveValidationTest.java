package com.jhaner;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class MoveValidationTest {

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
     * AC 1.1 limites del tablero I
     * CUANDO una pieza se coloca en cualquier lugar fuera del eje x,
     * ENTONCES el sistema lanza una RuntimeException.
     */
    @Test
    void testRuntimeExceptionWhenXPositionOutOfRange() {
        Assertions.assertThrows(RuntimeException.class, () -> {
            game.makeMove(-1,1);
        });
    }

    /**
     * AC 1.2 limites del tablero II
     * CUANDO una pieza se coloca en cualquier lugar fuera del eje y,
     * ENTONCES el sistema lanza una RuntimeException.
     */
    @Test
    void testRuntimeExceptionWhenYPositionOutOfRange() {
        Assertions.assertThrows(RuntimeException.class, () -> {
            game.makeMove(1,4);
        });
    }

    /**
     * AC 1.3 lugar ocupado
     * CUANDO una pieza se coloca en un espacio ocupado,
     * ENTONCES el sistema lanza una RuntimeException.
     */
    @Test
    void testRuntimeExceptionWhenNotEmptyCell() {
        Assertions.assertThrows(RuntimeException.class, () -> {
            game.makeMove(1,1);
            game.makeMove(1,1);
        });
    }

}