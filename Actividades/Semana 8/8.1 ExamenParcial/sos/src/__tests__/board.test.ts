import { Letter } from "@/utils/Letter";
import { Board } from "../utils/Board";

describe("Board", () => {
  describe("getGrid()", () => {
    /*
     * AC 1.1
     * CUANDO el jugador inicie el juego de SOS, se le debe permitir escoger el tamaño del tablero.
     * ENTONCES, el sistema debe mostrar el tablero con el tamaño seleccionado.
     */
    test("AC 1.1", () => {
      const board = new Board(3, 3);
      expect(board.getGrid()).toHaveLength(3);
      board.getGrid().forEach((row) => expect(row).toHaveLength(3));
    });

    /**
     * AC 1.2
     * CUANDO el usuario no selecciona un tamaño de tablero, se debe utilizar el tamaño 3x3 de manera predeterminada.
     * ENTONCES, si el usuario inicia una partida sin haber seleccionado un tamaño de tablero, el juego debe iniciarse en el tablero 3x3.
     */
    test("AC 1.2", () => {
      const board = new Board();
      expect(board.getGrid()).toHaveLength(3);
      board.getGrid().forEach((row) => expect(row).toHaveLength(3));
    });
  });

  describe("getCell()", () => {
    /**
     * AC Board.1
     * CUANDO el jugador crea un tablero vacío,
     * ENTONCES, el sistema debe mostrar el tablero vacío.
     */
    test("AC B.1", () => {
      const board = new Board(3, 3);
      expect(board.getCell(0, 0)).toBe(Letter.EMPTY);
    });
  });

  describe("setCell()", () => {
    /**
     * AC Board.2
     * CUANDO el jugador selecciona una celda en el tablero y coloca una letra,
     * ENTONCES, el sistema debe mostrar el tablero con la letra colocada en la celda seleccionada.
     */
    test("AC B.2", () => {
      const board = new Board(3, 3);
      board.setCell(0, 0, Letter.S);
      expect(board.getCell(0, 0)).toBe(Letter.S);
    });
  });

  /**
   * AC Board.3
   * CUANDO el sistema detecta que el tablero está lleno,
   * ENTONCES, el sistema debe mostrar el tablero lleno.
   */
  describe("isFull()", () => {
    test("AC B.3", () => {
      const board = new Board(3, 3);
      const movements: [number, number, Letter][] = [
        [0, 0, Letter.S],
        [0, 1, Letter.O],
        [0, 2, Letter.S],
        [1, 0, Letter.O],
        [1, 1, Letter.S],
        [1, 2, Letter.O],
        [2, 0, Letter.S],
        [2, 1, Letter.O],
        [2, 2, Letter.S],
      ];
      movements.forEach(([row, col, letter]) => board.setCell(row, col, letter));
      expect(board.isFull()).toBe(true);
    });
  });
});
