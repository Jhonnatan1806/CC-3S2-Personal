import { Board } from "@/classes/models/Board";

export class Record {

    private boards: Board[];

    constructor() {
        this.boards = [];
    }

    getBoard(index: number) {
        return this.boards[index];
    }

    getBoards() {
        return this.boards;
    }

    addBoard(board: Board) {
        this.boards.push(board);
    }

    removeLastBoard() {
        this.boards.pop();
    }
}