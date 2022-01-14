export const Items: {[itemid: string]: ItemData} = {
	magicalcapsule: {
		name: "Magical Capsule",
		shortDesc: "If the holder's species can evolve, its Attack and Sp. Atk are 1.5x.",
		spritenum: 130,
		fling: {
			basePower: 40,
		},
		onModifyAtkPriority: 2,
		onModifyAtk(atk, pokemon) {
			if (pokemon.baseSpecies.nfe) {
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 2,
		onModifySpA(spa, pokemon) {
			if (pokemon.baseSpecies.nfe) {
				return this.chainModify(1.5);
			}
		},
	},
}