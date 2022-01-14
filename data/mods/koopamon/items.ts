export const Items: {[itemid: string]: ItemData} = {
	magicalcapsule: {
		name: "Magical Capsule",
		shortDesc: "If the holder's species can evolve, its Attack and Sp. Atk are 1.5x.",
		spritenum: 130,
		fling: {
			basePower: 40,
		},
		onModifyDefPriority: 2,
		onModifyDef(atk, pokemon) {
			if (pokemon.baseSpecies.nfe) {
				return this.chainModify(1.5);
			}
		},
		onModifySpDPriority: 2,
		onModifySpD(spa, pokemon) {
			if (pokemon.baseSpecies.nfe) {
				return this.chainModify(1.5);
			}
		},
	},
}