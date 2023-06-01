package com.jhaner;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class TurnManagerTest {

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
     * AC 2.1 X juega primero
     * CUANDO inicia el juego el primer turno
     * ENTONCES debe de jugarlo el jugador X.
     */
    @Test
    void testPlayerXPlaysFirstTurn(){
        Assertions.assertEquals(game.getCurrentLetter(), Letter.CROSS);
    }

    /**
     * AC 2.2 O juego justo después de X
     * CUANDO el ultimo turno fue jugado por X,
     * ENTONCES debe cambiar al turno del jugador O.
     */
    @Test
    void testPlayerOTurnAfterPlayerX(){
        Assertions.assertEquals(game.getCurrentLetter(), Letter.CROSS);
        game.changeTurn();
        Assertions.assertEquals(game.getCurrentLetter(), Letter.NOUGHT);
    }

    /**
     * AC 2.3 X juega justo después de O
     * CUANDO el ultimo turno fue jugado por O,
     * ENTONCES debe cambiar al turno del jugador X.
     */
    @Test
    void testPlayerXTurnAfterPlayerO() {
        Assertions.assertEquals(game.getCurrentLetter(), Letter.CROSS);
        game.changeTurn();
        Assertions.assertEquals(game.getCurrentLetter(), Letter.NOUGHT);
        game.changeTurn();
        Assertions.assertEquals(game.getCurrentLetter(), Letter.CROSS);
    }

}
