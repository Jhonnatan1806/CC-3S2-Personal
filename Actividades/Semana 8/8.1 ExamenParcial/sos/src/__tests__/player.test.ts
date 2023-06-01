import { Board } from "../utils/Board";
import { Game } from "../utils/Game";
import { Player } from "../utils/Player";
import { Mode } from "../utils/Mode";
import { Letter } from "@/utils/Letter";

describe("Player", () => {

  describe("addPoints()", () => {
    /**
     * P.1
     * CUANDO el jugador haga un movimiento inválido,
     * ENTONCES, el sistema no debe sumar un punto al jugador.
     */
    test("P.1", () => {
      const board = new Board();
      const players = [new Player("Red"), new Player("Blue")];
      const game = new Game(board, players, Mode.SIMPLE_GAME);
      const player = game.getCurrentPlayer();
      expect(() => player.addPoints(-1)).toThrow("Points must be a non-negative integer.");
    });
  });
  
  describe("getPoints()", () => {
    /**
     * P.2
     * CUANDO el jugador haga un movimiento válido,
     * ENTONCES, el sistema debe sumar un punto al jugador.
     */
    test("P.2", () => {
      const board = new Board();
      const players = [new Player("Red"), new Player("Blue")];
      const game = new Game(board, players, Mode.SIMPLE_GAME);
      const player = game.getCurrentPlayer();
      player.addPoints(1);
      expect(player.getPoints()).toBe(1);
    });
  });
});
