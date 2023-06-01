import { Score } from "./Score";

/**
 * @class Player
 * @classdesc Esta clase representa un jugador del juego SOS.
 */
export class Player {
  private readonly name: string;
  private readonly score: Score;

  /**
   * Crea una instancia de la clase Player.
   * @constructor
   * @param {string} name - El nombre del jugador.
   */
  constructor(name: string) {
    this.name = name;
    this.score = new Score();
  }

  /**
   * Obtiene el nombre del jugador.
   * @returns {string} - El nombre del jugador.
   */
  public getName(): string {
    return this.name;
  }

  /**
   * Obtiene el puntaje del jugador.
   *
   * @returns {Score} - El puntaje del jugador.
   */
  public getScore(): Score {
    return this.score;
  }

  /**
   * Agrega puntos al puntaje del jugador.
   * @param {number} points - Los puntos a agregar al puntaje del jugador.
   * @returns {void} No retorna nada.
   */
  public addPoints(points: number): void {
    if (!Number.isInteger(points) || points < 0) {
      throw new Error("Points must be a non-negative integer.");
    }
    this.score.setPoints(this.score.getPoints() + points);
  }

  /**
   * Obtiene los puntos del jugador.
   * @returns {number} - Los puntos del jugador. 
   */
  public getPoints(): number {
    return this.score.getPoints();
  }
}
