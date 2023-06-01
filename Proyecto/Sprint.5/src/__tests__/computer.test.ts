import { IDifficulty } from '@/classes/enums/IDifficulty';
import { Computer } from '@/classes/models/Computer';

describe('Computer', () => {
    describe('getScore()', () => {
        /**
         * C.1
         * CUANDO el jugador inicia el juego,
         * ENTONCES, el sistema debe crear un puntaje inicial de 0 puntos.
         */
        test('C.1', () => {
            const computer = new Computer('Red', IDifficulty.EASY );
            expect(computer.getScore().getPoints()).toBe(0);
        });
    });

    describe('getDifficulty()', () => {
        /**
         * C.2
         * CUANDO el jugador inicia el juego,
         * ENTONCES, el sistema debe mostrar la dificultad seleccionada.
         */
        test('C.2', () => {
            const computer = new Computer('Red', IDifficulty.EASY );
            expect(computer.getDifficulty()).toBe(IDifficulty.EASY);
        });
    });
});
