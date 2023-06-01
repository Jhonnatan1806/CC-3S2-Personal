package com.jhaner;

/**
 * Representa un jugador en el juego con una letra asignada (X o O).
 */
public class Player {

    private final Letter letter;

    /**
     * {@code @constructor}
     * Crea un nuevo jugador con la letra asignada.
     *
     * @param letter la letra asignada al jugador.
     */
    public Player(Letter letter){
        this.letter = letter;
    }

    /**
     * Devuelve la letra asginada al jugador.
     *
     * @return la letra asignada.
     */
    public Letter getLetter() {
        return letter;
    }
}
