
import { Player } from "@/classes/models/Player";

describe("Player", () => {
	describe("getScore()", () => {
		/**
		 * P.1
		 * CUANDO el jugador inicia el juego,
		 * ENTONCES, el sistema debe crear un puntaje inicial de 0 puntos. 
		 */
		test("P.1", () => {
			const player = new Player("Red");
			expect(player.getScore().getPoints()).toBe(0);
		});
	});
});
