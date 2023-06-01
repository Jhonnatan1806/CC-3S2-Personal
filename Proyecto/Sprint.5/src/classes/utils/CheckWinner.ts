import { Letter } from "@/classes/enums/Letter";
import { Mode } from "@/classes/enums/Mode";
import { Board } from "@/classes/models/Board";

export class CheckWinner {

    private board: Board;
    private mode: Mode;
    private win: Letter[] = [Letter.S,Letter.O,Letter.S]; 

    constructor(board: Board, mode: Mode) { 
        this.board = board;
        this.mode = mode;
    }

    public checkBoard(): number {
        if (this.mode == Mode.SIMPLE_GAME) {
            return this.checkSimpleGame();
        }
        else if (this.mode == Mode.GENERAL_GAME) {
            // TODO: Implementar
            return -1;
        }
        return 0;
    }

    private checkSimpleGame(): number {
        if (this.checkHorizontal() || this.checkVertical() || this.checkDiagonal() || this.checkReverseDiagonal()) {
            return 1;
        }
        return 0;
    }

    private checkHorizontal(): boolean {
        for (let i = 0; i < this.board.getColumns(); i++) {
            for (let j = 0; j < this.board.getRows()-2; j++) {
                if (this.board.getGrid()[i][j] == this.win[0] && this.board.getGrid()[i][j+1] == this.win[1] && this.board.getGrid()[i][j+2] == this.win[2]) {
                    return true;
                }
            }
        }
        return false;
    }

    private checkVertical(): boolean {
        for (let i = 0; i < this.board.getColumns()-2; i++) {
            for (let j = 0; j < this.board.getRows(); j++) {
                if (this.board.getGrid()[i][j] == this.win[0] && this.board.getGrid()[i+1][j] == this.win[1] && this.board.getGrid()[i+2][j] == this.win[2]) {
                    return true;
                }
            }
        }
        return false;
    }

    private checkDiagonal(): boolean {
        for (let i = 0; i < this.board.getColumns()-2; i++) {
            for (let j = 0; j < this.board.getRows()-2; j++) {
                if (this.board.getGrid()[i][j] == this.win[0] && this.board.getGrid()[i+1][j+1] == this.win[1] && this.board.getGrid()[i+2][j+2] == this.win[2]) {
                    return true;
                }
            }
        }
        return false;
    }

    private checkReverseDiagonal(): boolean {
        for (let i = 0; i < this.board.getColumns()-2; i++) {
            for (let j = 2; j < this.board.getRows(); j++) {
                if (this.board.getGrid()[i][j] == this.win[0] && this.board.getGrid()[i+1][j-1] == this.win[1] && this.board.getGrid()[i+2][j-2] == this.win[2]) {
                    return true;
                }
            }
        }
        return false;
    }

}