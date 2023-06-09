import { Letter } from "@/classes/enums/Letter";
import { GameType } from "@/classes/enums/GameType";
import { Board } from "@/classes/models/Board";
import { Line } from "@/classes/models/Line";

export class CheckWinner {
    private board: Board;
    private gameType: GameType;
    private win: Letter[] = [Letter.S, Letter.O, Letter.S];
    private currentRow: number;
    private currentColumn: number;
    private startRow: number;
    private startColumn: number;
    private endRow: number;
    private endColumn: number;

    constructor(
        board: Board,
        gameType: GameType,
        currentRow: number,
        currentColumn: number
    ) {
        this.board = board;
        this.gameType = gameType;
        this.currentRow = currentRow;
        this.currentColumn = currentColumn;
        this.startRow = 0;
        this.startColumn = 0;
        this.endRow = 0;
        this.endColumn = 0;
    }

    public checkBoard(): number {
        if (this.gameType === GameType.SIMPLE_GAME) {
            return this.checkSimpleGame();
        } else if (this.gameType === GameType.GENERAL_GAME) {
            // TODO: Implementar
            return -1;
        }
        return 0;
    }

    private checkSimpleGame(): number {
        if (
            this.checkHorizontal(this.currentRow, this.currentColumn) ||
            this.checkVertical(this.currentRow, this.currentColumn) ||
            this.checkDiagonal(this.currentRow, this.currentColumn) ||
            this.checkReverseDiagonal(this.currentRow, this.currentColumn)
        ) {
            return 1;
        }
        return 0;
    }

    private checkHorizontal(
        currentRow: number,
        currentColumn: number
    ): boolean {
        const maxRows = this.board.getRows();
        const maxColumns = this.board.getColumns();

        for (let i = 0; i < maxColumns; i++) {
            for (let j = 0; j <= maxRows - this.win.length; j++) {
                if (
                    this.board.getGrid()[i][j] === this.win[0] &&
                    this.board.getGrid()[i][j + 1] === this.win[1] &&
                    this.board.getGrid()[i][j + 2] === this.win[2]
                ) {
                    if (
                        (i === currentRow &&
                            j <= currentColumn &&
                            currentColumn <= j + 2) ||
                        (i === currentRow &&
                            j <= currentColumn &&
                            currentColumn <= j + 2)
                    ) {
                        this.startRow = i;
                        this.startColumn = j;
                        this.endRow = i;
                        this.endColumn = j + 2;
                        return true;
                    }
                }
            }
        }
        return false;
    }

    private checkVertical(currentRow: number, currentColumn: number): boolean {
        const maxRows = this.board.getRows();
        const maxColumns = this.board.getColumns();

        for (let i = 0; i <= maxColumns - this.win.length; i++) {
            for (let j = 0; j < maxRows; j++) {
                if (
                    this.board.getGrid()[i][j] === this.win[0] &&
                    this.board.getGrid()[i + 1][j] === this.win[1] &&
                    this.board.getGrid()[i + 2][j] === this.win[2]
                ) {
                    if (
                        (i <= currentRow &&
                            currentRow <= i + 2 &&
                            j === currentColumn) ||
                        (i <= currentRow &&
                            currentRow <= i + 2 &&
                            j === currentColumn)
                    ) {
                        this.startRow = i;
                        this.startColumn = j;
                        this.endRow = i + 2;
                        this.endColumn = j;
                        return true;
                    }
                }
            }
        }
        return false;
    }

    private checkDiagonal(currentRow: number, currentColumn: number): boolean {
        const maxRows = this.board.getRows();
        const maxColumns = this.board.getColumns();

        for (let i = 0; i <= maxColumns - this.win.length; i++) {
            for (let j = 0; j <= maxRows - this.win.length; j++) {
                if (
                    this.board.getGrid()[i][j] === this.win[0] &&
                    this.board.getGrid()[i + 1][j + 1] === this.win[1] &&
                    this.board.getGrid()[i + 2][j + 2] === this.win[2]
                ) {
                    if (
                        (i <= currentRow &&
                            currentRow <= i + 2 &&
                            j <= currentColumn &&
                            currentColumn <= j + 2) ||
                        (i <= currentRow &&
                            currentRow <= i + 2 &&
                            j <= currentColumn &&
                            currentColumn <= j + 2)
                    ) {
                        this.startRow = i;
                        this.startColumn = j;
                        this.endRow = i + 2;
                        this.endColumn = j + 2;
                        return true;
                    }
                }
            }
        }
        return false;
    }

    private checkReverseDiagonal(
        currentRow: number,
        currentColumn: number
    ): boolean {
        const maxRows = this.board.getRows();
        const maxColumns = this.board.getColumns();

        for (let i = 0; i <= maxColumns - this.win.length; i++) {
            for (let j = this.win.length - 1; j < maxRows; j++) {
                if (
                    this.board.getGrid()[i][j] === this.win[0] &&
                    this.board.getGrid()[i + 1][j - 1] === this.win[1] &&
                    this.board.getGrid()[i + 2][j - 2] === this.win[2]
                ) {
                    if (
                        (i <= currentRow &&
                            currentRow <= i + 2 &&
                            j - 2 <= currentColumn &&
                            currentColumn <= j) ||
                        (i <= currentRow &&
                            currentRow <= i + 2 &&
                            j - 2 <= currentColumn &&
                            currentColumn <= j)
                    ) {
                        this.startRow = i;
                        this.startColumn = j;
                        this.endRow = i + 2;
                        this.endColumn = j - 2;
                        return true;
                    }
                }
            }
        }
        return false;
    }

    public getStartRow(): number {
        return this.startRow;
    }

    public getStartColumn(): number {
        return this.startColumn;
    }

    public getEndRow(): number {
        return this.endRow;
    }

    public getEndColumn(): number {
        return this.endColumn;
    }

    public getLine(): Line {
        return {
            startRow: this.startRow,
            startColumn: this.startColumn,
            endRow: this.endRow,
            endColumn: this.endColumn,
        };
    }
}
