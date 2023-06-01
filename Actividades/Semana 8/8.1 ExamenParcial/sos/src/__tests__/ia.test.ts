import { Board } from "@/utils/Board";
import { Difficulty } from "@/utils/Difficulty";
import { IA } from "@/utils/IA";
import { Game } from "@/utils/Game";
import { Player } from "@/utils/Player";
import { Letter } from "@/utils/Letter";

describe('ia', () => {

  describe('getDifficulty()', () => {
    /**
     * AC I.1
     * CUANDO el jugador IA sea creado,
     * ENTONCES, el sistema debe asignarle una dificultad.
     */
    test('AC I.1', () => {
      const board = new Board();
      const humanPlayer = new Player('Human');
      const computerPlayer = new IA('Computer', Difficulty.EASY);
      const game = new Game(board, [humanPlayer, computerPlayer]);
      expect(computerPlayer.getDifficulty()).toBe(Difficulty.EASY);
    });
  });

  describe('getMove()', () => {
    /**
     * AC I.2
     * CUANDO el jugador IA haga un movimiento,
     * ENTONCES, el sistema debe hacer un movimiento aleatorio válido.
     */
    test('AC I.2', () => {
      const board = new Board();
      const humanPlayer = new Player('Human');
      const computerPlayer = new IA('Computer', Difficulty.EASY);
      const game = new Game(board, [humanPlayer, computerPlayer]);
      game.makeMove(0, 0, Letter.S);
      const [row, col] = computerPlayer.getMove(game.getBoard());
      expect(board.getCell(row, col)).toBe(Letter.EMPTY);
    });

    /**
     * AC I.3
     * CUANDO el jugador IA haga un movimiento,
     * ENTONCES, el sistema no debe hacer un movimiento específico valido.
     * @note Este test es similar al anterior, pero se usa una dificultad diferente.
     */
    test('AC I.3', () => {
      const board = new Board();
      const humanPlayer = new Player('Human');
      const computerPlayer = new IA('Computer', Difficulty.MEDIUM);
      const game = new Game(board, [humanPlayer, computerPlayer]);
      game.makeMove(0,0,Letter.S)
      const [row, col] = computerPlayer.getMove(game.getBoard());
      expect(board.getCell(row, col)).toBe(Letter.EMPTY);
    });
  });
});