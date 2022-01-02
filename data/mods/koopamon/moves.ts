/*

List of flags and their descriptions:

authentic: Ignores a target's substitute.
bite: Power is multiplied by 1.5 when used by a Pokemon with the Strong Jaw Ability.
bullet: Has no effect on Pokemon with the Bulletproof Ability.
charge: The user is unable to make a move between turns.
contact: Makes contact.
dance: When used by a Pokemon, other Pokemon with the Dancer Ability can attempt to execute the same move.
defrost: Thaws the user if executed successfully while the user is frozen.
distance: Can target a Pokemon positioned anywhere in a Triple Battle.
gravity: Prevented from being executed or selected during Gravity's effect.
heal: Prevented from being executed or selected during Heal Block's effect.
mirror: Can be copied by Mirror Move.
mystery: Unknown effect.
nonsky: Prevented from being executed or selected in a Sky Battle.
powder: Has no effect on Grass-type Pokemon, Pokemon with the Overcoat Ability, and Pokemon holding Safety Goggles.
protect: Blocked by Detect, Protect, Spiky Shield, and if not a Status move, King's Shield.
pulse: Power is multiplied by 1.5 when used by a Pokemon with the Mega Launcher Ability.
punch: Power is multiplied by 1.2 when used by a Pokemon with the Iron Fist Ability.
recharge: If this move is successful, the user must recharge on the following turn and cannot make a move.
reflectable: Bounced back to the original user by Magic Coat or the Magic Bounce Ability.
snatch: Can be stolen from the original user and instead used by another Pokemon using Snatch.
sound: Has no effect on Pokemon with the Soundproof Ability.

*/

export const Moves: {[moveid: string]: MoveData} = {
	infernoturno: {
		accuracy: 100,
		basePower: 45,
		category: "Physical",
		name: "Inferno Turno",
		shortDesc: "User switches out after attacking; 30% burn chance.",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'brn',
		},
		selfSwitch: true,
		secondary: null,
		target: "normal",
		type: "Fire",
	},
	shoulderbash: {
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Shoulder Bash",
		shortDesc: "High critical hit ratio.",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Fighting",
	},
	beeswarm: {
		accuracy: 85,
		basePower: 100,
		category: "Physical",
		name: "Bee Swarm",
		shortDesc: "Traps and damages the target for 4-5 turns.",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Bug",
	},
	blazingseeds: {
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Blazing Seeds",
		shortDesc: "30% chance to set Leech Seed.",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			onHit(target, source) {
				if (target.hasType('Grass')) return null;
				target.addVolatile('leechseed', source);
			},
		},
		target: "normal",
		type: "Fire",
	},
	lavalunge: {
		accuracy: 95,
		basePower: 90,
		category: "Physical",
		name: "Lava Lunge",
		shortDesc: "30% chance to burn the target.",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, defrost: 1},
		secondary: {
			chance: 30,
			status: 'brn',
		},
		target: "normal",
		type: "Dragon",
	},
	scorchslam: {
		accuracy: 100,
		basePower: 95,
		category: "Physical",
		name: "Scorch Slam",
		shortDesc: "20% chance to burn the target.",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, defrost: 1},
		secondary: {
			chance: 20,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
	},
	leafcyclone: {
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Leaf Cyclone",
		shortDesc: "Free user from hazards/bind/Leech Seed; +1 Spe.",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onAfterHit(target, pokemon) {
			if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
				this.add('-end', pokemon, 'Leech Seed', '[from] move: Leaf Cyclone', '[of] ' + pokemon);
			}
			const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge'];
			for (const condition of sideConditions) {
				if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
					this.add('-sideend', pokemon.side, this.dex.getEffect(condition).name, '[from] move: Leaf Cyclone', '[of] ' + pokemon);
				}
			}
			if (pokemon.hp && pokemon.volatiles['partiallytrapped']) {
				pokemon.removeVolatile('partiallytrapped');
			}
		},
		onAfterSubDamage(damage, target, pokemon) {
			if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
				this.add('-end', pokemon, 'Leech Seed', '[from] move: Leaf Cyclone', '[of] ' + pokemon);
			}
			const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge'];
			for (const condition of sideConditions) {
				if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
					this.add('-sideend', pokemon.side, this.dex.getEffect(condition).name, '[from] move: Leaf Cyclone', '[of] ' + pokemon);
				}
			}
			if (pokemon.hp && pokemon.volatiles['partiallytrapped']) {
				pokemon.removeVolatile('partiallytrapped');
			}
		},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spe: 1,
				},
			},
		},
		target: "normal",
		type: "Grass",
	},
	pollutedwaters: {
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Polluted Waters",
		shortDesc: "30% chance to badly poison the target.",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, defrost: 1},
		thawsTarget: true,
		secondary: {
			chance: 30,
			status: 'tox',
		},
		target: "normal",
		type: "Water",
		contestType: "Tough",
	},
	torturouslullaby: {
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Torturous Lullaby",
		shortDesc: "10% chance to put the target to sleep.",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1},
		secondary: {
			chance: 10,
			status: 'slp',
		},
		target: "allAdjacentFoes",
		type: "Fairy",
	},
	darkshuriken: {
		num: 594,
		accuracy: 100,
		basePower: 15,
		category: "Physical",
		name: "Dark Shuriken",
		pp: 20,
		priority: 1,
		flags: {protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Dark",
	},
}