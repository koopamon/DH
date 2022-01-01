/*

Ratings and how they work:

-1: Detrimental
	  An ability that severely harms the user.
	ex. Defeatist, Slow Start

 0: Useless
	  An ability with no overall benefit in a singles battle.
	ex. Color Change, Plus

 1: Ineffective
	  An ability that has minimal effect or is only useful in niche situations.
	ex. Light Metal, Suction Cups

 2: Useful
	  An ability that can be generally useful.
	ex. Flame Body, Overcoat

 3: Effective
	  An ability with a strong effect on the user or foe.
	ex. Chlorophyll, Sturdy

 4: Very useful
	  One of the more popular abilities. It requires minimal support to be effective.
	ex. Adaptability, Magic Bounce

 5: Essential
	  The sort of ability that defines metagames.
	ex. Imposter, Shadow Tag

*/
export const Abilities: {[abilityid: string]: AbilityData} = {
	fearmonger: {
		id: "fearmonger",
		name: "Fearmonger",
		shortDesc: "Lower's the opponent's Speed upon switch-in.",
		onStart(pokemon) {
			let activated = false;
			for (const target of pokemon.side.foe.active) {
				if (!target || !this.isAdjacent(target, pokemon)) continue;
				if (!activated) {
					this.add('-ability', pokemon, 'Fearmonger', 'boost');
					activated = true;
				}
				if (target.volatiles['substitute']) {
					this.add('-immune', target);
				} else {
					this.boost({spe: -1}, target, pokemon, null, true);
				}
			}
		},
		rating: 3.5,
	},
	sunsprint: {
		id: "sunsprint",
		name: "Sun Sprint",
		shortDesc: "Speed is doubled during Harsh Sunlight.",
		onModifySpe(spe, pokemon) {
			if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(2);
			}
		},
		rating: 3,
	},
	fortitude: {
		id: "fortitude",
		name: "Fortitude",
		shortDesc: "Special Attack increases by one stage after earning a KO.",
		onSourceAfterFaint(length, target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.boost({spa: length}, source);
			}
		},
		rating: 3,
	},
	snowforce: {
		id: "snowforce",
		name: "Snow Force",
		shortDesc: "During hail Ice moves deal 1.5x more damage and Accuracy increased by 30%.",
		onBasePowerPriority: 21,
		onBasePower(basePower, attacker, defender, move) {
			if (this.field.isWeather('hail')) {
				if (move.type === 'Ice') {
					return this.chainModify(1.5);
				}
			}
		},
		onSourceModifyAccuracyPriority: 9,
		onSourceModifyAccuracy(accuracy) {
			if (this.field.isWeather('hail')) {
				if (typeof accuracy !== 'number') return;
				this.debug('snowforce - enhancing accuracy');
				return accuracy * 1.3;
			}
		},
		onImmunity(type, pokemon) {
			if (type === 'hail') return false;
		},
		rating: 2,
	},
	aquaamplify: {
		name: "Aqua Amplify",
		id: "aquaamplify",
		shortDesc: "Special Attack is doubled during rain.",
		onModifySpA(spa, pokemon) {
			if (['raindance', 'primordialsea'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(2);
			}
		},
		name: "Aqua Amplify",
		rating: 4,
	},
	starboost: {
		id: "starboost",
		name: "Star Boost",
		shortDesc: "Increases both Special Attack and Attack upon earning a KO.",
		onSourceAfterFaint(length, target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.boost({atk: length}, source);
				this.boost({spa: length}, source);
			}
		},
		rating: 3,
	},
	starpetals: {
		id: "starpetals",
		name: "Star Petals",
		shortDesc: "Deals 50% more damage when the user is at full HP",
		onModifySpA(spa, pokemon) {
			if (target.hp >= target.maxhp) {
				this.debug('Multiscale weaken');
				return this.chainModify(1.5);
			}
		},
		onModifyAtk(spa, pokemon) {
			if (target.hp >= target.maxhp) {
				this.debug('Multiscale weaken');
				return this.chainModify(1.5);
			}
		},
		rating: 3.5,
	},
	starbubble: {
		name: "Water Bubble",
		id: "starbubble",
		shortDesc: "Water and Ice power is 1.5x, it can't be burned; Fire power against it is halved.",
		onSourceModifyAtkPriority: 5,
		onSourceModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				return this.chainModify(0.5);
			}
		},
		onSourceModifySpAPriority: 5,
		onSourceModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				return this.chainModify(0.5);
			}
		},
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Water') {
				return this.chainModify(1.5);
			}
		},
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Water') {
				return this.chainModify(1.5);
			}
		},
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Ice') {
				return this.chainModify(1.5);
			}
		},
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Ice') {
				return this.chainModify(1.5);
			}
		},
		onUpdate(pokemon) {
			if (pokemon.status === 'brn') {
				this.add('-activate', pokemon, 'ability: Water Bubble');
				pokemon.cureStatus();
			}
		},
		onSetStatus(status, target, source, effect) {
			if (status.id !== 'brn') return;
			if ((effect as Move)?.status) {
				this.add('-immune', target, '[from] ability: Water Bubble');
			}
			return false;
		},
		rating: 4.5,
	},
	starflame: {
		id: "starflame",
		name: "Star Flame",
		shortDesc: "Attacks have an extra 20% chance to burn.",
		onDamagingHit(damage, source, target, move) {
			if (this.randomChance(2, 10)) {
				source.trySetStatus('brn', target);
			}
		},
		rating: 2,
	},
};
