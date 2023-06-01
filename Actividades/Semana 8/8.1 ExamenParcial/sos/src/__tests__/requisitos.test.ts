import { Board } from "../utils/Board";
import { Game } from "../utils/Game";
import { Letter } from "../utils/Letter";
import { Player } from "../utils/Player";

describe("Requisitos", () => {
  let board: Board;
  let players: Player[];
  let game: Game;

  beforeEach(() => {
    board = new Board();
    players = [new Player("Red"), new Player("Blue")];
    game = new Game(board, players);
  });

  // Como jugador, quiero poder colocar una pieza en cualquier espacio vacio
  // del tablero de 3x3 para poder jugar el juego.
  describe("Requisito 1", () => {
    /**
     * AC 1.1 limites del tablero I
     * CUANDO una pieza se coloca en cualquier lugar fuera del eje x,
     * ENTONCES el sistema lanza una RuntimeException.
     */
    test("AC 1.1", () => {
      expect(() => {
        game.makeMove(-1, 0, Letter.S);
      }).toThrowError("Invalid position.");
    });

    /**
     * AC 1.2 limites del tablero II
     * CUANDO una pieza se coloca en cualquier lugar fuera del eje y,
     * ENTONCES el sistema lanza una RuntimeException.
     */
    test("AC 1.2", () => {
      expect(() => {
        game.makeMove(1, 4, Letter.S);
      }).toThrowError("Invalid position.");
    });

    /**
     * AC 1.3 limites del tablero III
     * CUANDO una pieza se coloca en un espacio ocupado,
     * ENTONCES el sistema lanza una RuntimeException.
     */
    test("AC 1.3", () => {
      game.makeMove(0, 0, Letter.S);
      expect(() => {
        game.makeMove(0, 0, Letter.S);
      }).toThrowError("Cell is not empty.");
    });
  });

  // Como jugador, quiero que el sistema determine que
  // jugador debe jugar a continuación en el juego
  describe("Requisito 2", () => {
    /**
     * AC 2.1 Player 1 juega primero
     * CUANDO inicia el juego el primer turno
     * ENTONCES debe de jugarlo el Player 1.
     */
    test("AC 2.1", () => {
      expect(game.getCurrentPlayer()).toBe(players[0]);
    });

    /**
     * AC 2.2 Player 2 juega justo despues de Player 1
     * CUANDO el ultimo turno fue jugado por el Player 1,
     * ENTONCES debe cambiar al turno del Player 2.
     */
    test("AC 2.2", () => {
      game.makeMove(0, 0, Letter.S);
      expect(game.getCurrentPlayer()).toBe(players[1]);
    });

    /**
     * AC 2.3 Player 1 juega justo despues del Player 2
     * CUANDO el ultimo turno fue jugado por el Player 2,
     * ENTONCES debe cambiar al turno del Player 1.
     */
    test("AC 2.3", () => {
      game.makeMove(0, 0, Letter.S);
      game.makeMove(0, 1, Letter.O);
      expect(game.getCurrentPlayer()).toBe(players[0]);
    });
  });

  // Como jugador, quiero que el sistema determine si un jugador ha ganado el juego.
  describe("Requisito 3", () => {
    /**
     * AC 3.1 por defecto no hay ganador
     * CUANDO no se cumple ninguna condicion ganadora,
     * ENTONCES no hay un ganador del juego.
     */
    test("AC 3.1", () => {
      expect(game.getGameOver()).toBe(false);
    });

    /**
     * AC 3.2 condicion ganadora I
     * CUANDO toda la linea horizontal esta ocupada por las piezas del jugador actual,
     * ENTONCES el jugador ha ganado el juego.
     */
    test("AC 3.2", () => {
      game.makeMove(0, 0, Letter.S); // player 1
      game.makeMove(0, 1, Letter.O); // player 2
      game.makeMove(0, 2, Letter.S); // player 1
      expect(game.getWinner()).toBe(players[0]);
    });

    /**
     * AC 3.3 condicion ganadora II
     * CUANDO toda la linea vertical esta ocupada por las piezas del jugador actual,
     * ENTONCES el jugador ha ganado el juego.
     */
    test("AC 3.3", () => {
      game.makeMove(0, 0, Letter.S); // player 1
      game.makeMove(1, 0, Letter.O); // player 2
      game.makeMove(2, 0, Letter.S); // player 1
      expect(game.getWinner()).toBe(players[0]);
    });

    /**
     * AC 3.4 condicion ganadora III
     * CUANDO toda la linea diagonal principal esta ocupada por las piezas del jugador actual,
     * ENTONCES el jugador ha ganado el juego.
     */
    test("AC 3.4", () => {
      game.makeMove(0, 0, Letter.S); // player 1
      game.makeMove(1, 1, Letter.O); // player 2
      game.makeMove(2, 1, Letter.O); // player 1
      game.makeMove(2, 2, Letter.S); // player 2
      expect(game.getWinner()).toBe(players[1]);
    });

    /**
     * AC 3.5 condicion ganadora IV
     * CUANDO toda la linea diagonal secundaria esta ocupada por las piezas del jugador actual,
     * ENTONCES el jugador ha ganado el juego.
     */
    test("AC 3.5", () => {
      game.makeMove(0, 2, Letter.S); // player 1
      game.makeMove(1, 1, Letter.O); // player 2
      game.makeMove(2, 1, Letter.O); // player 1
      game.makeMove(2, 0, Letter.S); // player 2
      expect(game.getWinner()).toBe(players[1]);
    });
  });

  // Como jugador, quiero que el sistema determine si el juego termina en empate.
  describe("Requisito 4", () => {
    /**
     * AC 4.1 manejo de una situacion de empate
     * CUANDO no hay mas movimientos disponibles en el tablero y no se ha cumplido ninguna de las condiciones ganadoras,
     * ENTONCES el juego termina en un empate.
     */
    test("AC 4.1", () => {
      game.makeMove(0, 0, Letter.S); // player 1
      game.makeMove(0, 1, Letter.S); // player 2
      game.makeMove(0, 2, Letter.S); // player 1
      game.makeMove(1, 0, Letter.S); // player 2
      game.makeMove(1, 1, Letter.S); // player 1
      game.makeMove(1, 2, Letter.S); // player 2
      game.makeMove(2, 0, Letter.S); // player 1
      game.makeMove(2, 1, Letter.S); // player 2
      game.makeMove(2, 2, Letter.S); // player 1
      expect(() => game.getWinner()).toThrow("Draw.");
    });
  });
});
