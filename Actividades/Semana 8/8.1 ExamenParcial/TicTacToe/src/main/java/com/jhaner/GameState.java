package com.jhaner;

/**
 * GameState representa los posibles estados del juego.
 * - PLAYING: El juego está en curso y no hay ganador aun.
 * - DRAW: El juego termina en empate.
 * - CROSS_WON: El jugador 'X' ha ganado el juego.
 * - NOUGHT_WON: El jugador 'O' ha ganado el juego.
 */
public enum GameState {
    PLAYING, DRAW, CROSS_WON, NOUGHT_WON
}
