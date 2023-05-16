/**
 * @class Score
 * @classdesc Esta clase se encarga de manejar el puntaje del juego.
 */
export class Score {
  private points: number;

  /**
   * Crea una instancia de la clase Score.
   * @constructor
   */
  constructor() {
    this.points = 0;
  }

  /**
   * Añade puntos al puntaje actual.
   * @param {number} points Los puntos a añadir.
   * @throws {Error} Si los puntos son negativos o no son un número entero.
   * @returns {void} No retorna nada.
   */
  public addPoints(points: number): void {
    if (!Number.isInteger(points) || points < 0) {
      throw new Error("Points must be a non-negative integer.");
    }
    this.points += points;
  }

  /**
   * Establece el puntaje actual.
   * @param {number} points El puntaje a establecer.
   * @returns {void} No retorna nada.
   */
  public setPoints(points: number): void {
    this.points = points;
  }

  /**
   * Obtiene el puntaje actual.
   * @returns {number} El puntaje actual.
   */
  public getPoints(): number {
    return this.points;
  }
}
