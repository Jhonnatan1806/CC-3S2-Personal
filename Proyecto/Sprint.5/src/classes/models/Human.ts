import { Letter } from "@/classes/enums/Letter";
import { Board } from "@/classes/models/Board";
import { Player } from "@/classes/models/Player";

/**
 * @class IA
 * @classdesc Representa un jugador Real.
 * @extends Player
 */
export class Human extends Player {

	/**
	 * @constructor
     * 
	 * @param {string} name Nombre del jugador
	 */
	constructor(name: string) {
		super(name);
	}

}
