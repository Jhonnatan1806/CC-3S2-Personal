import { Letter } from "@/classes/enums/Letter";
import { Board } from "@/classes/models/Board";
import { IDifficulty } from "@/classes/enums/IDifficulty";
import { Computer } from "@/classes/models/Computer";

/**
 * @class IMoveGenerator
 * @classdesc Clase que representa un movimiento de la IA en el tablero.
 */
export class IMoveGenerator {

    public generateMove(board: Board, computer: Computer){
        if (computer.getDifficulty() === IDifficulty.EASY) return this.easyMove(board);
        if (computer.getDifficulty() === IDifficulty.MEDIUM) return this.mediumMove(board);
        if (computer.getDifficulty() === IDifficulty.HARD) return this.hardMove(board);
    }

	public  easyMove(board: Board): [number, number, Letter] {
		let row: number, col: number;
		do {
			row = Math.floor(Math.random() * board.getRows());
			col = Math.floor(Math.random() * board.getColumns());
		} while (board.getCell(row, col) !== Letter.EMPTY);
		const letter = Math.random() < 0.5 ? Letter.S : Letter.O;
		return [row, col, letter];
	}

	public mediumMove(board: Board): [number, number, Letter] {
        // TODO: Implementar
		return [0,0,Letter.EMPTY];
	}

    public hardMove(board: Board): [number, number, Letter] {
        // TODO: Implementar
        return [0,0,Letter.EMPTY];
    }
}
