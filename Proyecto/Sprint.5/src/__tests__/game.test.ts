import { Mode } from '@/classes/enums/Mode';
import { Board } from '@/classes/models/Board';
import { Game } from '@/classes/models/Game';
import { Player } from '@/classes/models/Player';

describe('Game', () => {
    
    let game: Game | null;

    beforeEach(() => {
        const board: Board = new Board(3, 3);
        const mode = Mode.SIMPLE_GAME;
        const players: Player[] = [new Player("Red"), new Player("Blue")];
        game = new Game(board, mode, players);
    });

    afterEach(() => {
        game = null;
    });

    describe('getBoard()', () => {
        test('should return the correct number of rows and columns', () => {
            expect(game?.getBoard().getRows()).toBe(3);
            expect(game?.getBoard().getColumns()).toBe(3);
        });
    });

    describe('getMode()', () => {
        test('should return the correct game mode', () => {
            expect(game?.getMode()).toBe(Mode.SIMPLE_GAME);
        });
    });

    describe('getPlayers()', () => {
        test('should return the correct number of players', () => {
            expect(game?.getPlayers().length).toBe(2);
        });
    });
});