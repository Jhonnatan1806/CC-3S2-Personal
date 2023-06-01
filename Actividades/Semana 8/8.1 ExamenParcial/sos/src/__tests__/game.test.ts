import { IA } from "@/utils/IA";
import { Board } from "../utils/Board";
import { Game } from "../utils/Game";
import { Letter } from "../utils/Letter";
import { Mode } from "../utils/Mode";
import { Player } from "../utils/Player";
import { Difficulty } from "@/utils/Difficulty";

describe("Game", () => {
  describe("getMode()", () => {
    /**
     * AC 2.1
     * CUANDO el jugador seleccione un modo de juego,
     * ENTONCES, el sistema debe mostrar el tablero con el modo de juego seleccionado.
     */
    test("AC 2.1", () => {
      const board = new Board(3, 3);
      const players = [new Player("Red"), new Player("Blue")];
      const game = new Game(board, players, Mode.SIMPLE_GAME);
      expect(game.getMode()).toBe(Mode.SIMPLE_GAME);
    });

    /**
     * AC 2.2
     * CUANDO el usuario no selecciona un modo de juego, se debe utilizar el modo simple de manera predeterminada.
     * ENTONCES, si el usuario inicia una partida sin haber seleccionado un modo de juego, el juego debe iniciarse en el tablero seleccionado con el modo simple.
     */
    test("AC 2.2", () => {
      const board = new Board(3, 3);
      const players = [new Player("Red"), new Player("Blue")];
      const game = new Game(board, players);
      expect(game.getMode()).toBe(Mode.SIMPLE_GAME);
    });
  });

  describe("getBoard()", () => {
    /**
     * AC 3.1
     * CUANDO el jugador seleccione un tamaño de tablero y un modo de juego,
     * ENTONCES, el sistema debe mostrar el tablero con el tamaño y modo de juego seleccionado.
     */
    test("AC 3.1", () => {
      const board = new Board(3, 3);
      const players = [new Player("Red"), new Player("Blue")];
      const mode = Mode.SIMPLE_GAME;
      const game = new Game(board, players, mode);
      expect(game.getBoard().getRows()).toBe(3);
      expect(game.getBoard().getColumns()).toBe(3);
      expect(game.getMode()).toBe(Mode.SIMPLE_GAME);
    });
  });

  describe("getCurrentPlayer()", () => {
    /**
     * AC 4.1
     * CUANDO el jugador inicie un juego simple de SOS, se le debe mostrar un tablero vacío y debe ser el turno del jugador 1 para hacer un movimiento.
     * ENTONCES, el jugador debe ser capaz de seleccionar una celda vacía en el tablero para colocar su letra S o O.
     */
    test("AC 4.1", () => {
      const board = new Board();
      const players = [new Player("Red"), new Player("Blue")];
      const mode = Mode.SIMPLE_GAME;
      const game = new Game(board, players, mode);
      game.makeMove(0, 0, Letter.S);
      expect(game.getCurrentPlayer()).toBe(players[1]);
    });
  });

    /**
     * AC 4.2
     * CUANDO el jugador seleccione una celda vacía
     *  ENTONCES, el sistema debe colocar la letra S o O en la celda seleccionada.
     */
    test("AC 4.2", () => {
      const board = new Board();
      const players = [new Player("Red"), new Player("Blue")];
      const mode = Mode.SIMPLE_GAME;
      const game = new Game(board, players, mode);
      game.makeMove(0, 0, Letter.S);
      expect(game.getBoard().getCell(0, 0)).toBe(Letter.S);
    });

    /**
     * AC 4.3
     * CUANDO el jugador seleccione una celda que ya está ocupada
     * ENTONCES, el sistema debe mostrar un mensaje de error indicando que la celda ya está ocupada.
     */
    test("AC 4.3", () => {
      const board = new Board();
      const players = [new Player("Red"), new Player("Blue")];
      const mode = Mode.SIMPLE_GAME;
      const game = new Game(board, players, mode);
      game.makeMove(0, 0, Letter.S);
      expect(() => game.makeMove(0, 0, Letter.O)).toThrow("Cell is not empty.");
    });

  describe("getWinner()", () => {
    /**
     * AC 5.1
     * CUANDO un jugador completa la palabra SOS horizontalmente, verticalmente o diagonalmente, se le debe mostrar un mensaje indicando que ha ganado la partida.
     * ENTONCES, el juego debe terminar y mostrar el mensaje de victoria al jugador que ganó.
     */
    test("AC 5.1", () => {
      const board = new Board();
      const players = [new Player("Red"), new Player("Blue")];
      const mode = Mode.SIMPLE_GAME;
      const game = new Game(board, players, mode);
      const movements: [number, number, Letter][] = [
        [0, 0, Letter.S], // PJ1
        [0, 1, Letter.O], // PJ2
        [1, 0, Letter.O], // PJ1
        [0, 2, Letter.S], // PJ2
      ];
      movements.forEach((movement) => {
        game.makeMove(movement[0], movement[1], movement[2]);
      });
      expect(game.getWinner()).toBe(players[1]);
    });

    /**
     * AC 5.2
     * CUANDO el tablero se llena completamente sin que ningún jugador haya completado la palabra SOS, se le debe mostrar un mensaje indicando que la partida ha terminado en empate.
     * ENTONCES, el juego debe terminar y mostrar el mensaje de empate.
     */
    test("AC 5.2", () => {
      const board = new Board();
      const players = [new Player("Red"), new Player("Blue")];
      const mode = Mode.SIMPLE_GAME;
      const game = new Game(board, players, mode);
      const movements: [number, number, Letter][] = [
        [0, 0, Letter.S], // PJ1
        [0, 1, Letter.O], // PJ2
        [0, 2, Letter.O], // PJ1
        [1, 0, Letter.S], // PJ2
        [1, 1, Letter.O], // PJ1
        [1, 2, Letter.O], // PJ2
        [2, 0, Letter.S], // PJ1
        [2, 1, Letter.O], // PJ2
        [2, 2, Letter.O], // PJ1
      ];
      movements.forEach((movement) => {
        game.makeMove(movement[0], movement[1], movement[2]);
      });
      expect(() => game.getWinner()).toThrow("Draw.");
    });

    /**
     * AC 7.1
     * CUANDO el tablero está completamente lleno y existan un jugador y la IA
     * ENTONCES, el juego selecciona el ganador o un empate.
     */
    test("AC 7.1", () => {
      const board = new Board();
      const ia = new IA("Red", Difficulty.EASY);
      const players = [new Player("Blue"), ia];
      const mode = Mode.SIMPLE_GAME;
      const game = new Game(board, players, mode);
      const possibleMovements: [number, number, Letter][] = [
        [0, 0, Letter.S],
        [0, 1, Letter.O],
        [0, 2, Letter.S],
        [1, 0, Letter.S],
        [1, 1, Letter.O],
        [1, 2, Letter.S],
        [2, 0, Letter.S],
        [2, 1, Letter.O],
        [2, 2, Letter.S],
      ];
      for (const movement of possibleMovements) {
        const [row, col, letter] = movement;
        if (board.getCell(row, col) !== Letter.EMPTY) {
          continue; // already filled, skip iteration
        }
        game.makeMove(row, col, letter);
        if (board.isFull()) {
          break; // end the game
        }
        const [rowIA, colIA, letterIA] = ia.getMove(board);
        game.makeMove(rowIA, colIA, letterIA);
        if (board.isFull()) {
          break; // end the game
        }
      }
      if (game.getGameOver()) {
        expect([players[0],players[1]]).toContain(game.getWinner());
      } else {
        expect(() => game.getWinner()).toThrow("Draw.");
      }
    });

    /**
     * AC 7.2
     * CUANDO la IA se enfrenta a la IA y el tablero esta lleno
     * ENTONCES, el juego selecciona el ganador o un empate.
     */
    test("AC 7.2", () => {
      const board = new Board();
      const ia1 = new IA("Red", Difficulty.EASY); 
      const ia2 = new IA("Blue", Difficulty.EASY);
      const mode = Mode.SIMPLE_GAME;
      const game = new Game(board, [ia1,ia2], mode);
      for ( let i: number = 0; i < 9 ; i++) {
        const [rowIA, colIA, letterIA] = ia1.getMove(board);
        game.makeMove(rowIA, colIA, letterIA);
        if (board.isFull()) {
          break; // end the game
        }
        const [rowIA2, colIA2, letterIA2] = ia2.getMove(board);
        game.makeMove(rowIA2, colIA2, letterIA2);
        if (board.isFull()) {
          break; // end the game
        }
      }
      if (game.getGameOver()) {
        expect([ia1,ia2]).toContain(game.getWinner());
      } else {
        expect(() => game.getWinner()).toThrow("Draw.");
      }
    });

  });
});
