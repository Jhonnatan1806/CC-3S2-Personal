import { Letter } from "./Letter";
import { Player } from "./Player";
import { Difficulty } from "./Difficulty";
import { Movement } from "./Movement";
import { Board } from "./Board";

/**
 * @class IA
 * @classdesc Representa un jugador IA.
 * @extends Player
 */
export class IA extends Player {
  private readonly difficulty: Difficulty;

  /**
   * @constructor
   * @param {string} name Nombre del jugador
   * @param {Difficulty} difficulty Dificultad del jugador
   */
  constructor(name: string, difficulty: Difficulty) {
    super(name);
    this.difficulty = difficulty;
  }

  /**
   * Retorna la dificultad del jugador
   * @returns {Difficulty} Dificultad del jugador
   */
  public getDifficulty(): Difficulty {
    return this.difficulty;
  }

  /**
   * Obtiene el movimiento del jugador
   * @param {Board} board Tablero del juego
   * @returns {[number, number, Letter]} [row, col, letter]
   */
  public getMove(board: Board): [number, number, Letter] {
    const movement = new Movement(board);
    if (this.difficulty === Difficulty.EASY) {
      return movement.getRandomCell();
    } else if (this.difficulty === Difficulty.MEDIUM) {
      return movement.getProximityCell();
    }
    return [0, 0, Letter.EMPTY];
  }
}
