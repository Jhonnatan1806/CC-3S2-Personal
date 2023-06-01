import { Letter } from "@/classes/enums/Letter";
import { Board } from "@/classes/models/Board";

describe("Board", () => {

	describe("getGrid()", () => {

		test("AC B.1.1", () => {
			const board = new Board(3, 3);
			expect(board.getGrid()).toHaveLength(3);
			board.getGrid().forEach((row) => expect(row).toHaveLength(3));
		});

		test("AC B.1.2", () => {
			const board = new Board();
			expect(board.getGrid()).toHaveLength(3);
			board.getGrid().forEach((row) => expect(row).toHaveLength(3));
		});
	});

	describe("getCell()", () => {
		/**
		 * AC Board.2
		 * CUANDO el jugador crea un tablero vacío,
		 * ENTONCES, el sistema debe mostrar el tablero vacío.
		 */
		test("AC B.2", () => {
			const board = new Board(3, 3);
			expect(board.getCell(0, 0)).toBe(Letter.EMPTY);
		});
	});

	describe("setCell()", () => {
		/**
		 * AC Board.3
		 * CUANDO el jugador selecciona una celda en el tablero y coloca una letra,
		 * ENTONCES, el sistema debe mostrar el tablero con la letra colocada en la celda seleccionada.
		 */
		test("AC B.3", () => {
			const board = new Board(3, 3);
			board.setCell(0, 0, Letter.S);
			expect(board.getCell(0, 0)).toBe(Letter.S);
		});
	});
});
