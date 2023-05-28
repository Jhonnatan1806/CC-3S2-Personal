import { IDifficulty } from "@/classes/enums/IDifficulty";
import { Player } from "@/classes/models/Player";

/**
 * @class IA
 * @classdesc Representa un jugador IA.
 * @extends Player
 */
export class Computer extends Player {
	private readonly difficulty: IDifficulty;

	/**
	 * @constructor
     * 
	 * @param {string} name Nombre del jugador
	 * @param {Difficulty} difficulty Dificultad del jugador
	 */
	constructor(name: string, difficulty: IDifficulty) {
		super(name);
		this.difficulty = difficulty;
	}

	/**
	 * Retorna la dificultad del jugador
	 * @returns {Difficulty} Dificultad del jugador
	 */
	public getDifficulty(): IDifficulty {
		return this.difficulty;
	}

}
