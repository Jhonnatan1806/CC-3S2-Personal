import { GameController } from "@/classes/controllers/GameController";
import { Game } from "@/classes/models/Game";
import { Board } from "@/classes/models/Board";
import { Player } from "@/classes/models/Player";
import { Mode } from "@/classes/enums/Mode";
import { Letter } from "@/classes/enums/Letter";
import { Human } from "@/classes/models/Human";
import { Computer } from "@/classes/models/Computer";
import { IDifficulty } from "@/classes/enums/IDifficulty";

describe("GameController SimpleGame PvP", () => {
	let gameController: GameController;

	beforeEach(() => {
		const board = new Board();
		const players = [new Player("Red"), new Player("Blue")];
		const game = new Game(board, players,Mode.SIMPLE_GAME);

		gameController = new GameController(game);
	});

	describe("getBoard()", () => {
		/**
		 * AC 1.1
		 * CUANDO el jugador inicie el juego de SOS, se le debe permitir escoger el tamaño del tablero.
		 * ENTONCES, el sistema debe mostrar el tablero con el tamaño seleccionado.
		 */
		test("AC 1.1", () => {
			const board = new Board(4, 4);
      const players = [new Player("Red"), new Player("Blue")];
      const game = new Game(board, players, Mode.SIMPLE_GAME);
      gameController = new GameController(game);
			expect(gameController.getGame().getBoard().getGrid()).toHaveLength(
				4
			);
		});

		/**
		 * AC 1.2
		 * CUANDO el usuario no selecciona un tamaño de tablero, se debe utilizar el tamaño 3x3 de manera predeterminada.
		 * ENTONCES, si el usuario inicia una partida sin haber seleccionado un tamaño de tablero, el juego debe iniciarse en el tablero 3x3.
		 */
		test("AC 1.2", () => {
			const board = new Board();
      const players = [new Player("Red"), new Player("Blue")];
      const game = new Game(board, players,Mode.SIMPLE_GAME);
      gameController = new GameController(game);
			expect(gameController.getGame().getBoard().getGrid()).toHaveLength(
				3
			);
		});
	});

	describe("getMode()", () => {
		/**
		 * AC 2.1
		 * CUANDO el jugador seleccione un modo de juego,
		 * ENTONCES, el sistema debe mostrar el tablero con el modo de juego seleccionado.
		 */
		test("AC 2.1", () => {
			const board = new Board(3,3);
      const players = [new Player("Red"), new Player("Blue")];
      const game = new Game(board, players, Mode.GENERAL_GAME); 
      gameController = new GameController(game);
			expect(gameController.getGame().getMode()).toBe(Mode.GENERAL_GAME);
		});

		/**
		 * AC 2.2
		 * CUANDO el usuario no selecciona un modo de juego, se debe utilizar el modo simple de manera predeterminada.
		 * ENTONCES, si el usuario inicia una partida sin haber seleccionado un modo de juego, el juego debe iniciarse en el tablero seleccionado con el modo simple.
		 */
		test("AC 2.2", () => {
      const board = new Board(3,3);
      const players = [new Player("Red"), new Player("Blue")];
      const game = new Game(board, players);
      gameController = new GameController(game);
			expect(gameController.getGame().getMode()).toBe(Mode.SIMPLE_GAME);
		});

		/**
		 * AC 3.1
		 * CUANDO el jugador seleccione un tamaño de tablero y un modo de juego,
		 * ENTONCES, el sistema debe mostrar el tablero con el tamaño y modo de juego seleccionado.
		 */
		test("AC 3.1", () => {
      const board = new Board(4, 4);
      const players = [new Player("Red"), new Player("Blue")];
      const game = new Game(board, players, Mode.SIMPLE_GAME);
      gameController = new GameController(game);
			expect(gameController.getGame().getBoard().getGrid()).toHaveLength(4);
			expect(gameController.getGame().getMode()).toBe(Mode.SIMPLE_GAME);
		});
	});

	describe("getPlayers()", () => {
		/**
		 * AC 4.1
		 * CUANDO el jugador inicie un juego simple de SOS, se le debe mostrar un tablero vacío y debe ser el turno del jugador 1 para hacer un movimiento.
		 * ENTONCES, el jugador debe ser capaz de seleccionar una celda vacía en el tablero para colocar su letra S o O.
		 */
		test("AC 4.1", () => {
			const currentPlayer = gameController.getCurrentPlayer();
			expect(currentPlayer).toBe(
				gameController.getGame().getPlayers()[0]
			);
		});

		/**
		 * AC 4.2
		 * CUANDO el jugador seleccione una celda vacía
		 * ENTONCES, el sistema debe colocar la letra S o O en la celda seleccionada.
		 */
		test("AC 4.2", () => {
			gameController.makeMove(0, 0, Letter.S);
			expect(gameController.getGame().getBoard().getCell(0, 0)).toBe(
				Letter.S
			);
		});

		/**
		 * AC 4.3
		 * CUANDO el jugador seleccione una celda que ya está ocupada
		 * ENTONCES, el sistema debe mostrar un mensaje de error indicando que la celda ya está ocupada.
		 */

		/**
		 * AC 5.1
		 * CUANDO un jugador completa la palabra SOS horizontalmente, verticalmente o diagonalmente, se le debe mostrar un mensaje indicando que ha ganado la partida.
		 * ENTONCES, el juego debe terminar y mostrar el mensaje de victoria al jugador que ganó.
		 */
		test("AC 5.1", () => {
			gameController.makeMove(0, 0, Letter.S); // Player 1
			gameController.makeMove(0, 1, Letter.O); // Player 2
			gameController.makeMove(0, 2, Letter.S); // Player 1
			expect(gameController.getWinner()).toBe(
				gameController.getGame().getPlayers()[0]
			);
		});

		/**
		 * AC 5.2
		 * CUANDO el tablero se llena completamente sin que ningún jugador haya completado la palabra SOS, se le debe mostrar un mensaje indicando que la partida ha terminado en empate.
		 * ENTONCES, el juego debe terminar y mostrar el mensaje de empate.
		 */
		test("AC 5.2", () => {
			gameController.makeMove(0, 0, Letter.S); // Player 1
			gameController.makeMove(0, 1, Letter.S); // Player 2
			gameController.makeMove(0, 2, Letter.S); // Player 1
			gameController.makeMove(1, 0, Letter.S); // Player 2
			gameController.makeMove(1, 1, Letter.S); // Player 1
			gameController.makeMove(1, 2, Letter.S); // Player 2
			gameController.makeMove(2, 0, Letter.S); // Player 1
			gameController.makeMove(2, 1, Letter.S); // Player 2
			gameController.makeMove(2, 2, Letter.S); // Player 1
			expect(() => gameController.getWinner()).toThrowError("Draw.");
		});
	});
});

describe("GameController SimpleGame PvC", () => {
	let gameController: GameController;

	beforeEach(() => {
		const board = new Board();
		const players = [new Human("Red"), new Computer("Blue", IDifficulty.EASY)];
		const game = new Game(board, players);

		gameController = new GameController(game);
	});

    describe("getPlayers()", () => {
        /**
         * AC 7.1
         * CUANDO el tablero está completamente lleno y existan un jugador y la IA
         * ENTONCES, el juego selecciona el ganador o un empate.
         */
        test("AC 7.1", () => {
            gameController.makeMove(0, 0, Letter.O);    // Human
            gameController.imakeMove();                 // Computer
            gameController.makeMove(0, 2, Letter.O);    // Human
            gameController.imakeMove();                 // Computer
            expect(() => gameController.getWinner()).toThrowError("Draw.");
            
        });
    });
});

describe("GameController SimpleGame CvC", () => {
	let gameController: GameController;

	beforeEach(() => {
		const board = new Board();
		const players = [new Computer("Red", IDifficulty.EASY), new Computer("Blue", IDifficulty.EASY)];
		const game = new Game(board, players);

		gameController = new GameController(game);
	});

    describe("getPlayers()", () => {
        /**
         * AC 7.2
         * CUANDO la IA se enfrenta a la IA y el tablero esta lleno
         * ENTONCES, el juego selecciona el ganador o un empate.
         */
        test("AC 7.2", () => {
            gameController.imakeMove();  // Computer 1
            gameController.imakeMove();  // Computer 2
            gameController.imakeMove();  // Computer 1
            gameController.imakeMove();  // Computer 2
            expect(() => gameController.getWinner()).toThrowError("Draw.");
            
        });
    });
});
