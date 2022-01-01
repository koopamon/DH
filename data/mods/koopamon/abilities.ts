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
export const Abilities: {[k: string]: ModdedAbilityData} = {
	fearmonger: {
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
		name: "Fearmonger",
		rating: 3.5,
	},
	sunsprint: {
		onModifySpe(spe, pokemon) {
			if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(2);
			}
		},
		name: "Sun Sprint",
		rating: 3,
	},
	fortitude: {
		onSourceAfterFaint(length, target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.boost({spa: length}, source);
			}
		},
		name: "Fortitude",
		rating: 3,
	},
	snowforce: {
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
		}
		onImmunity(type, pokemon) {
			if (type === 'hail') return false;
		},
		name: "Snow Force",
		rating: 2,
	},
	aquaamplify: {
		onModifySpA(spa, pokemon) {
			if (['raindance', 'primordialsea'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(2);
			}
		},
		name: "Aqua Amplify",
		rating: 4,
	},
	starboost: {
		onSourceAfterFaint(length, target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.boost({atk: length}, source);
				this.boost({spa: length}, source);
			}
		},
		name: "Star Boost",
		rating: 3,
	},
	starpetals: {
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
		name: "Star Petals",
		rating: 3.5,
	},
	starbubble: {
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
		name: "Water Bubble",
		rating: 4.5,
		num: 199,
	},
	starflame: {
		onDamagingHit(damage, source, target, move) {
			if (this.randomChance(2, 10)) {
				source.trySetStatus('brn', target);
			}
		},
		name: "Star Flame",
		rating: 2,
	},
};
