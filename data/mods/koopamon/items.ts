export const Items: {[itemid: string]: ModdedItemData} = {
	magicalcapsule: {
		name: "Magical Capsule",
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
		num: -1004,
		gen: 8,
		desc: "If holder's species can evolve, its Atk and Sp. Atk are 1.5x.",
	},
};