export const Pokedex: {[k: string]: ModdedSpeciesData} = {
  plantranha: {
    num: 1,
    name: "Plantranha",
    types: [
      "Grass"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    baseStats: {
      hp: 55,
      atk: 60,
      def: 50,
      spa: 65,
      spd: 50,
      spe: 40
    },
    abilities: {
      0: "Overgrow",
      H: "Sap Sipper"
    },
    heightm: 1.0,
    weightkg: 52.7,
    color: "Green",
    eggGroups: [
      "Grass"
    ],
    evos: [
      "Creeplant"
    ]
  },
  creeplant: {
    num: 2,
    name: "Creeplant",
    types: [
      "Grass"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    baseStats: {
      hp: 75,
      atk: 80,
      def: 65,
      spa: 85,
      spd: 60,
      spe: 55
    },
    abilities: {
      0: "Overgrow",
      H: "Sap Sipper"
    },
    heightm: 5.4,
    weightkg: 74.6,
    color: "Green",
    eggGroups: [
      "Grass"
    ],
    evos: [
      "Peteyranha"
    ]
  },
  peteyranha: {
    num: 3,
    name: "Peteyranha",
    types: [
      "Grass",
      "Flying"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    baseStats: {
      hp: 82,
      atk: 102,
      def: 90,
      spa: 113,
      spd: 80,
      spe: 83
    },
    abilities: {
      0: "Overgrow",
      H: "Thick Fat"
    },
    heightm: 2.6,
    weightkg: 101.5,
    color: "Green",
    eggGroups: [
      "Grass"
    ]
  },
  blooper: {
    num: 4,
    name: "Blooper",
    types: [
      "Water"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 40,
      atk: 50,
      def: 50,
      spa: 70,
      spd: 50,
      spe: 60
    },
    abilities: {
      0: "Torrent",
      H: "Water Absorb"
    },
    heightm: 0.7,
    weightkg: 12.7,
    color: "Blue",
    eggGroups: [
      "Water3"
    ],
    evos: [
      "Gesso"
    ]
  },
  gesso: {
    num: 5,
    name: "Gesso",
    types: [
      "Water",
      "Poison"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 65,
      atk: 60,
      def: 65,
      spa: 90,
      spd: 60,
      spe: 80
    },
    abilities: {
      0: "Torrent",
      H: "Water Absorb"
    },
    heightm: 1.4,
    weightkg: 30.7,
    color: "Blue",
    eggGroups: [
      "Water3"
    ],
    evos: [
      "Glooper"
    ]
  },
  glooper: {
    num: 6,
    name: "Glooper",
    types: [
      "Water",
      "Poison"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 80,
      atk: 75,
      def: 82,
      spa: 115,
      spd: 93,
      spe: 90
    },
    abilities: {
      0: "Torrent",
      H: "Regenerator"
    },
    heightm: 2.8,
    weightkg: 93.7,
    color: "Blue",
    eggGroups: [
      "Water3"
    ]
  },
  podoboo: {
    num: 7,
    name: "Podoboo",
    types: [
      "Fire"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    baseStats: {
      hp: 60,
      atk: 60,
      def: 60,
      spa: 40,
      spd: 60,
      spe: 40
    },
    abilities: {
      0: "Blaze",
      H: "Flash Fire"
    },
    heightm: 0.7,
    weightkg: 26.0,
    color: "Red",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Magmaw"
    ]
  },
  magmaw: {
    num: 8,
    name: "Magmaw",
    types: [
      "Fire"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    baseStats: {
      hp: 75,
      atk: 80,
      def: 80,
      spa: 55,
      spd: 75,
      spe: 55
    },
    abilities: {
      0: "Blaze",
      H: "Flash Fire"
    },
    heightm: 3.1,
    weightkg: 89.9,
    color: "Red",
    eggGroups: [
      "Amorphous",
      "Dragon"
    ],
    evos: [
      "Charvaargh"
    ]
  },
  charvaargh: {
    num: 9,
    name: "Charvaargh",
    types: [
      "Fire",
      "Dark"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    baseStats: {
      hp: 95,
      atk: 100,
      def: 100,
      spa: 80,
      spd: 75,
      spe: 75
    },
    abilities: {
      0: "Blaze",
      H: "Dragon's Maw"
    },
    heightm: 6.3,
    weightkg: 476.9,
    color: "Red",
    eggGroups: [
      "Amorphous",
      "Dragon"
    ]
  },
  goomba: {
    num: 10,
    name: "Goomba",
    types: [
      "Normal"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    baseStats: {
      hp: 40,
      atk: 65,
      def: 35,
      spa: 35,
      spd: 35,
      spe: 40
    },
    abilities: {
      0: "Run Away",
      1: "Reckless",
      H: "Hustle"
    },
    heightm: 0.5,
    weightkg: 14.2,
    color: "Brown",
    eggGroups: [
      "Field"
    ],
    evos: [
      "Gigagoom",
      "Paragoom"
    ]
  },
  gigagoom: {
    num: 11,
    name: "Gigagoom",
    types: [
      "Normal"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    baseStats: {
      hp: 100,
      atk: 100,
      def: 85,
      spa: 40,
      spd: 75,
      spe: 60
    },
    abilities: {
      0: "Hustle",
      1: "Reckless",
      H: "Sheer Force"
    },
    heightm: 2.8,
    weightkg: 43.3,
    color: "Brown",
    eggGroups: [
      "Field"
    ]
  },
  paragoom: {
    num: 12,
    name: "Paragoom",
    types: [
      "Normal",
      "Flying"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    baseStats: {
      hp: 80,
      atk: 105,
      def: 75,
      spa: 45,
      spd: 60,
      spe: 115
    },
    abilities: {
      0: "Keen Eye",
      1: "Infiltrator",
      H: "Unburden"
    },
    heightm: 0.7,
    weightkg: 25.4,
    color: "Brown",
    eggGroups: [
      "Field"
    ]
  },
  tinytroopa: {
    num: 13,
    name: "Tinytroopa",
    types: [
      "Normal"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 50,
      atk: 55,
      def: 40,
      spa: 40,
      spd: 30,
      spe: 65
    },
    abilities: {
      0: "Shell Armor",
      H: "Weak Armor"
    },
    heightm: 0.5,
    weightkg: 20.7,
    color: "Green",
    eggGroups: [
      "Field",
      "Humanlike"
    ],
    evos: [
      "Koopatroopa"
    ]
  },
  koopatroopa: {
    num: 14,
    name: "Koopatroopa",
    types: [
      "Normal"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 60,
      atk: 70,
      def: 80,
      spa: 50,
      spd: 60,
      spe: 70
    },
    abilities: {
      0: "Shell Armor",
      H: "Weak Armor"
    },
    heightm: 1.1,
    weightkg: 54.5,
    color: "Green",
    eggGroups: [
      "Field",
      "Humanlike"
    ],
    evos: [
      "Paratroopa"
    ],
    otherFormes: [
      "Koopatroopa-Gold"
    ],
    formeOrder: [
      "Koopatroopa",
      "Koopatroopa-Gold"
    ]
  },
  koopatroopa-gold: {
    num: 14,
    name: "Koopatroopa-Gold",
    types: [
      "Normal"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 80,
      atk: 120,
      def: 100,
      spa: 70,
      spd: 80,
      spe: 100
    },
    abilities: {
      0: "Gold Armor",
      H: "Weak Armor"
    },
    heightm: 1.1,
    weightkg: 54.5,
    color: "Green",
    eggGroups: [
      "Field",
      "Humanlike"
    ],
    evos: [
      "Paratroopa"
    ]
  },
  paratroopa: {
    num: 15,
    name: "Paratroopa",
    types: [
      "Normal",
      "Flying"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 70,
      atk: 85,
      def: 85,
      spa: 60,
      spd: 65,
      spe: 90
    },
    abilities: {
      0: "Shell Armor",
      H: "Weak Armor"
    },
    heightm: 1.2,
    weightkg: 55.1,
    color: "Red",
    eggGroups: [
      "Field",
      "Humanlike"
    ],
    evos: [
      "Tubotroopa"
    ]
  },
  tubotroopa: {
    num: 16,
    name: "Tubotroopa",
    types: [
      "Normal",
      "Flying"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 85,
      atk: 100,
      def: 110,
      spa: 95,
      spd: 85,
      spe: 75
    },
    abilities: {
      0: "Shell Armor",
      H: "Weak Armor"
    },
    heightm: 1.6,
    weightkg: 89.8,
    color: "Red",
    eggGroups: [
      "Field",
      "Humanlike"
    ]
  },
  thwimp: {
    num: 17,
    name: "Thwimp",
    types: [
      "Rock"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    baseStats: {
      hp: 55,
      atk: 75,
      def: 75,
      spa: 20,
      spd: 30,
      spe: 30
    },
    abilities: {
      0: "Levitate",
      H: "Sturdy"
    },
    heightm: 0.6,
    weightkg: 157.4,
    color: "Gray",
    eggGroups: [
      "Mineral"
    ],
    evos: [
      "Thwomp"
    ]
  },
  thwomp: {
    num: 18,
    name: "Thwomp",
    types: [
      "Rock"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    baseStats: {
      hp: 80,
      atk: 110,
      def: 110,
      spa: 25,
      spd: 45,
      spe: 40
    },
    abilities: {
      0: "Levitate",
      H: "Sturdy"
    },
    heightm: 3.4,
    weightkg: 294.3,
    color: "Gray",
    eggGroups: [
      "Mineral"
    ],
    evos: [
      "Pouncer"
    ]
  },
  pouncer: {
    num: 19,
    name: "Pouncer",
    types: [
      "Rock"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    baseStats: {
      hp: 110,
      atk: 140,
      def: 165,
      spa: 30,
      spd: 60,
      spe: 45
    },
    abilities: {
      0: "Levitate",
      H: "Sturdy"
    },
    heightm: 4.8,
    weightkg: 600.0,
    color: "Gray",
    eggGroups: [
      "Mineral"
    ]
  },
  squiggler: {
    num: 20,
    name: "Squiggler",
    types: [
      "Bug"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    baseStats: {
      hp: 40,
      atk: 50,
      def: 50,
      spa: 25,
      spd: 25,
      spe: 55
    },
    abilities: {
      0: "Anger Point",
      1: "Swarm",
      H: "Poison Heal"
    },
    heightm: 0.3,
    weightkg: 3.7,
    color: "Yellow",
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Wiggler"
    ]
  },
  wiggler: {
    num: 21,
    name: "Wiggler",
    types: [
      "Bug"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    baseStats: {
      hp: 60,
      atk: 85,
      def: 65,
      spa: 40,
      spd: 55,
      spe: 85
    },
    abilities: {
      0: "Anger Point",
      1: "Swarm",
      H: "Poison Heal"
    },
    heightm: 2.4,
    weightkg: 55.4,
    color: "Yellow",
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Flutter",
      "Fuzzler"
    ]
  },
  flutter: {
    num: 22,
    name: "Flutter",
    types: [
      "Bug",
      "Fairy"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    baseStats: {
      hp: 75,
      atk: 75,
      def: 65,
      spa: 113,
      spd: 80,
      spe: 112
    },
    abilities: {
      0: "Anger Point",
      1: "Shield Dust",
      H: "Serene Grace"
    },
    heightm: 2.8,
    weightkg: 64.1,
    color: "Yellow",
    eggGroups: [
      "Bug"
    ]
  },
  fuzzler: {
    num: 23,
    name: "Fuzzler",
    types: [
      "Bug"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    baseStats: {
      hp: 65,
      atk: 100,
      def: 125,
      spa: 40,
      spd: 125,
      spe: 65
    },
    abilities: {
      0: "Heatproof",
      1: "Shed Skin",
      H: "Poison Heal"
    },
    heightm: 4.4,
    weightkg: 97.2,
    color: "Yellow",
    eggGroups: [
      "Bug"
    ]
  },
  lilslammer: {
    num: 24,
    name: "Lil'Slammer",
    types: [
      "Fighting"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    baseStats: {
      hp: 40,
      atk: 65,
      def: 40,
      spa: 20,
      spd: 35,
      spe: 60
    },
    abilities: {
      0: "Technician",
      1: "Guts",
      H: "Sheer Force"
    },
    heightm: 1.0,
    weightkg: 27.7,
    color: "Blue",
    eggGroups: [
      "Humanlike"
    ],
    evos: [
      "Hammer Bro"
    ]
  },
  hammerbro: {
    num: 25,
    name: "Hammer Bro",
    types: [
      "Fighting"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    baseStats: {
      hp: 65,
      atk: 80,
      def: 60,
      spa: 45,
      spd: 50,
      spe: 80
    },
    abilities: {
      0: "Technician",
      1: "Guts",
      H: "Sheer Force"
    },
    heightm: 1.8,
    weightkg: 61.6,
    color: "Green",
    eggGroups: [
      "Humanlike"
    ],
    evos: [
      "Ice Bro",
      "Fire Bro",
      "Sledge Bro"
    ]
  },
  sledgebro: {
    num: 26,
    name: "Sledge Bro",
    types: [
      "Fighting"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    baseStats: {
      hp: 100,
      atk: 110,
      def: 95,
      spa: 60,
      spd: 60,
      spe: 75
    },
    abilities: {
      0: "Technician",
      1: "Guts",
      H: "Sheer Force"
    },
    heightm: 2.2,
    weightkg: 229.8,
    color: "Green",
    eggGroups: [
      "Humanlike"
    ]
  },
  icebro: {
    num: 27,
    name: "Ice Bro",
    types: [
      "Ice"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    baseStats: {
      hp: 70,
      atk: 70,
      def: 60,
      spa: 100,
      spd: 100,
      spe: 100
    },
    abilities: {
      0: "Technician",
      1: "Ice Body",
      H: "Slush Rush"
    },
    heightm: 1.8,
    weightkg: 61.6,
    color: "Blue",
    eggGroups: [
      "Humanlike"
    ]
  },
  firebro: {
    num: 28,
    name: "Fire Bro",
    types: [
      "Fire"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    baseStats: {
      hp: 70,
      atk: 60,
      def: 60,
      spa: 125,
      spd: 75,
      spe: 110
    },
    abilities: {
      0: "Technician",
      1: "Flame Body",
      H: "Sun Sprint"
    },
    heightm: 1.8,
    weightkg: 61.6,
    color: "Red",
    eggGroups: [
      "Humanlike"
    ]
  },
  sporer: {
    num: 29,
    name: "Sporer",
    types: [
      "Grass"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    baseStats: {
      hp: 30,
      atk: 50,
      def: 20,
      spa: 30,
      spd: 20,
      spe: 60
    },
    abilities: {
      0: "Natural Cure",
      1: "Hydration",
      H: "Rain Dish"
    },
    heightm: 0.2,
    weightkg: 0.1,
    color: "White",
    eggGroups: [
      "Grass"
    ],
    evos: [
      "Nipplant"
    ]
  },
  nipplant: {
    num: 30,
    name: "Nipplant",
    types: [
      "Grass"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    baseStats: {
      hp: 65,
      atk: 82,
      def: 60,
      spa: 33,
      spd: 65,
      spe: 65
    },
    abilities: {
      0: "Natural Cure",
      1: "Hydration",
      H: "Rain Dish"
    },
    heightm: 0.5,
    weightkg: 1.2,
    color: "White",
    eggGroups: [
      "Grass"
    ],
    evos: [
      "Navalranha"
    ]
  },
  navalranha: {
    num: 31,
    name: "Navalranha",
    types: [
      "Grass"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    baseStats: {
      hp: 105,
      atk: 117,
      def: 85,
      spa: 58,
      spd: 95,
      spe: 80
    },
    abilities: {
      0: "Natural Cure",
      1: "Water Absorb",
      H: "Rain Dish"
    },
    heightm: 7.9,
    weightkg: 113.5,
    color: "Green",
    eggGroups: [
      "Grass"
    ]
  },
  gooble: {
    num: 32,
    name: "Gooble",
    types: [
      "Poison"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 70,
      atk: 30,
      def: 53,
      spa: 65,
      spd: 57,
      spe: 45
    },
    abilities: {
      0: "Poison Touch",
      1: "Sticky Hold",
      H: "Poison Leech"
    },
    heightm: 0.3,
    weightkg: 11.3,
    color: "Pink",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Protoranha"
    ]
  },
  protoranha: {
    num: 33,
    name: "Protoranha",
    types: [
      "Poison"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 125,
      atk: 70,
      def: 80,
      spa: 115,
      spd: 85,
      spe: 55
    },
    abilities: {
      0: "Poison Touch",
      1: "Sticky Hold",
      H: "Poison Leech"
    },
    heightm: 6.2,
    weightkg: 223.6,
    color: "Pink",
    eggGroups: [
      "Amorphous"
    ]
  },
  lakipuff: {
    num: 34,
    name: "Lakipuff",
    types: [
      "Flying"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 45,
      atk: 45,
      def: 30,
      spa: 60,
      spd: 45,
      spe: 65
    },
    abilities: {
      0: "Unburden",
      1: "Early Bird",
      H: "Limber"
    },
    heightm: 0.6,
    weightkg: 0.1,
    color: "White",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Lakitu",
      "Foo"
    ]
  },
  lakitu: {
    num: 35,
    name: "Lakitu",
    types: [
      "Flying"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 70,
      atk: 60,
      def: 50,
      spa: 80,
      spd: 60,
      spe: 85
    },
    abilities: {
      0: "Unburden",
      1: "Early Bird",
      H: "Limber"
    },
    heightm: 1.7,
    weightkg: 54.6,
    color: "White",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Lakilust",
      "Lakilust"
    ]
  },
  lakilust: {
    num: 36,
    name: "Lakilust",
    types: [
      "Flying"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 80,
      atk: 74,
      def: 67,
      spa: 106,
      spd: 93,
      spe: 100
    },
    abilities: {
      0: "Unburden",
      1: "Early Bird",
      H: "Limber"
    },
    heightm: 2.4,
    weightkg: 73.7,
    color: "White",
    eggGroups: [
      "Amorphous"
    ]
  },
  crazydayzee: {
    num: 37,
    name: "Crazydayzee",
    types: [
      "Grass",
      "Fairy"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    baseStats: {
      hp: 70,
      atk: 30,
      def: 55,
      spa: 70,
      spd: 75,
      spe: 50
    },
    abilities: {
      0: "Cute Charm",
      1: "Flower Veil",
      H: "Serene Grace"
    },
    heightm: 0.7,
    weightkg: 1.4,
    color: "Pink",
    eggGroups: [
      "Grass"
    ],
    evos: [
      "Amazydayzee"
    ]
  },
  amazydayzee: {
    num: 38,
    name: "Amazydayzee",
    types: [
      "Grass",
      "Fairy"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    baseStats: {
      hp: 85,
      atk: 40,
      def: 65,
      spa: 105,
      spd: 105,
      spe: 105
    },
    abilities: {
      0: "Cute Charm",
      1: "Flower Veil",
      H: "Serene Grace"
    },
    heightm: 1.0,
    weightkg: 1833.0,
    color: "Pink",
    eggGroups: [
      "Grass"
    ]
  },
  volcanotus: {
    num: 39,
    name: "Volcanotus",
    types: [
      "Grass",
      "Fire"
    ],
    gender: "N",
    baseStats: {
      hp: 65,
      atk: 45,
      def: 60,
      spa: 75,
      spd: 70,
      spe: 35
    },
    abilities: {
      0: "Flame Body",
      1: "Solar Power",
      H: "Drought"
    },
    heightm: 0.8,
    weightkg: 4.4,
    color: "Green",
    eggGroups: [
      "Grass"
    ],
    evos: [
      "Lavalotus"
    ]
  },
  lavalotus: {
    num: 40,
    name: "Lavalotus",
    types: [
      "Grass",
      "Fire"
    ],
    gender: "N",
    baseStats: {
      hp: 105,
      atk: 55,
      def: 75,
      spa: 120,
      spd: 100,
      spe: 65
    },
    abilities: {
      0: "Flame Body",
      1: "Solar Power",
      H: "Drought"
    },
    heightm: 2.7,
    weightkg: 41.2,
    color: "Green",
    eggGroups: [
      "Grass"
    ]
  },
  skipsqueak: {
    num: 41,
    name: "Skipsqueak",
    types: [
      "Normal",
      "Fairy"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 35,
      atk: 40,
      def: 35,
      spa: 60,
      spd: 50,
      spe: 70
    },
    abilities: {
      0: "Adaptability",
      1: "Pickup",
      H: "Stall"
    },
    heightm: 0.7,
    weightkg: 30.9,
    color: "White",
    eggGroups: [
      "Field"
    ],
    evos: [
      "Spinysqueak"
    ]
  },
  spinysqueak: {
    num: 42,
    name: "Spinysqueak",
    types: [
      "Normal",
      "Fairy"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 65,
      atk: 75,
      def: 55,
      spa: 102,
      spd: 75,
      spe: 98
    },
    abilities: {
      0: "Adaptability",
      1: "Pickup",
      H: "Rough Skin"
    },
    heightm: 0.8,
    weightkg: 47.1,
    color: "Purple",
    eggGroups: [
      "Field"
    ]
  },
  ninji: {
    num: 43,
    name: "Ninji",
    types: [
      "Dark"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 44,
      atk: 88,
      def: 43,
      spa: 33,
      spd: 33,
      spe: 99
    },
    abilities: {
      0: "Frisk",
      1: "Skill Link",
      H: "Speed Boost"
    },
    heightm: 0.9,
    weightkg: 18.1,
    color: "Black",
    eggGroups: [
      "Field"
    ],
    evos: [
      "Shuriki"
    ]
  },
  shuriki: {
    num: 44,
    name: "Shuriki",
    types: [
      "Dark"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 71,
      atk: 115,
      def: 70,
      spa: 52,
      spd: 61,
      spe: 131
    },
    abilities: {
      0: "Frisk",
      1: "Skill Link",
      H: "Speed Boost"
    },
    heightm: 1.5,
    weightkg: 44.8,
    color: "Black",
    eggGroups: [
      "Field"
    ]
  },
  ptooie: {
    num: 45,
    name: "Ptooie",
    types: [
      "Grass",
      "Steel"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    baseStats: {
      hp: 118,
      atk: 97,
      def: 67,
      spa: 65,
      spd: 57,
      spe: 86
    },
    abilities: {
      0: "Steelworker",
      H: "Stamina"
    },
    heightm: 2.3,
    weightkg: 56.1,
    color: "Green",
    eggGroups: [
      "Grass"
    ]
  },
  buzzybeetle: {
    num: 46,
    name: "Buzzybeetle",
    types: [
      "Rock",
      "Bug"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    baseStats: {
      hp: 75,
      atk: 70,
      def: 60,
      spa: 30,
      spd: 90,
      spe: 20
    },
    abilities: {
      0: "Heatproof",
      1: "Shell Armor",
      H: "Sturdy"
    },
    heightm: 0.8,
    weightkg: 39.9,
    color: "Blue",
    eggGroups: [
      "Monster",
      "Field"
    ],
    evos: [
      "Spike Top",
      "Parabeetle"
    ]
  },
  spiketop: {
    num: 47,
    name: "Spike Top",
    types: [
      "Rock",
      "Bug"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    baseStats: {
      hp: 100,
      atk: 120,
      def: 80,
      spa: 45,
      spd: 120,
      spe: 30
    },
    abilities: {
      0: "Heatproof",
      1: "Shell Armor",
      H: "Sturdy"
    },
    heightm: 1.2,
    weightkg: 42.5,
    color: "Red",
    eggGroups: [
      "Monster",
      "Field"
    ]
  },
  spiny: {
    num: 48,
    name: "Spiny",
    types: [
      "Ground"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 75,
      atk: 65,
      def: 100,
      spa: 55,
      spd: 85,
      spe: 60
    },
    abilities: {
      0: "Iron Barbs",
      H: "Huge Power"
    },
    heightm: 1.1,
    weightkg: 36.0,
    color: "Red",
    eggGroups: [
      "Monster",
      "Field"
    ]
  },
  shyguy: {
    num: 49,
    name: "Shy Guy",
    types: [
      "Normal"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    baseStats: {
      hp: 50,
      atk: 40,
      def: 30,
      spa: 60,
      spd: 30,
      spe: 70
    },
    abilities: {
      0: "Pickup",
      1: "Anticipation",
      H: "Skill Link"
    },
    heightm: 1.0,
    weightkg: 35.0,
    color: "Red",
    eggGroups: [
      "Field"
    ],
    evos: [
      "Snifit"
    ]
  },
  snifit: {
    num: 50,
    name: "Snifit",
    types: [
      "Normal"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    baseStats: {
      hp: 60,
      atk: 53,
      def: 60,
      spa: 77,
      spd: 50,
      spe: 70
    },
    abilities: {
      0: "Sniper",
      1: "Anticipation",
      H: "Skill Link"
    },
    heightm: 1.2,
    weightkg: 42.6,
    color: "Red",
    eggGroups: [
      "Field"
    ],
    evos: [
      "Gunner Guy"
    ]
  },
  gunnerguy: {
    num: 51,
    name: "Gunner Guy",
    types: [
      "Normal"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    baseStats: {
      hp: 80,
      atk: 92,
      def: 75,
      spa: 118,
      spd: 63,
      spe: 102
    },
    abilities: {
      0: "Sniper",
      1: "Anticipation",
      H: "Skill Link"
    },
    heightm: 1.3,
    weightkg: 87.1,
    color: "Red",
    eggGroups: [
      "Field"
    ]
  },
  fang: {
    num: 52,
    name: "Fang",
    types: [
      "Poison",
      "Flying"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 45,
      atk: 55,
      def: 50,
      spa: 30,
      spd: 35,
      spe: 50
    },
    abilities: {
      0: "Frisk",
      1: "Hyper Cutter",
      H: "Infiltrator"
    },
    heightm: 0.4,
    weightkg: 4.8,
    color: "Blue",
    eggGroups: [
      "Flying"
    ],
    evos: [
      "Swoop"
    ]
  },
  swoop: {
    num: 53,
    name: "Swoop",
    types: [
      "Poison",
      "Flying"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 70,
      atk: 90,
      def: 75,
      spa: 45,
      spd: 60,
      spe: 100
    },
    abilities: {
      0: "Frisk",
      1: "Hyper Cutter",
      H: "Infiltrator"
    },
    heightm: 0.9,
    weightkg: 12.9,
    color: "Blue",
    eggGroups: [
      "Flying"
    ],
    evos: [
      "Swampire"
    ]
  },
  swampire: {
    num: 54,
    name: "Swampire",
    types: [
      "Poison",
      "Flying"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 90,
      atk: 95,
      def: 80,
      spa: 60,
      spd: 70,
      spe: 100
    },
    abilities: {
      0: "Frisk",
      1: "Hyper Cutter",
      H: "Infiltrator"
    },
    heightm: 1.3,
    weightkg: 33.2,
    color: "Green",
    eggGroups: [
      "Flying"
    ]
  },
  coincoffer: {
    num: 55,
    name: "Coin Coffer",
    types: [
      "Fairy"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 150,
      atk: 65,
      def: 35,
      spa: 30,
      spd: 85,
      spe: 80
    },
    abilities: {
      0: "Serene Grace",
      1: "Super Luck",
      H: "Huge Power"
    },
    heightm: 1.2,
    weightkg: 33.2,
    color: "Green",
    eggGroups: [
      "Field"
    ]
  },
  polterpup: {
    num: 56,
    name: "Polterpup",
    types: [
      "Ghost",
      "Fairy"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 85,
      atk: 40,
      def: 65,
      spa: 105,
      spd: 65,
      spe: 150
    },
    abilities: {
      0: "Regenerator",
      H: "Frisk"
    },
    heightm: 0.8,
    weightkg: 4.8,
    color: "White",
    eggGroups: [
      "Amorphous"
    ]
  },
  stingby: {
    num: 57,
    name: "Stingby",
    types: [
      "Bug"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 55,
      atk: 50,
      def: 60,
      spa: 50,
      spd: 60,
      spe: 50
    },
    abilities: {
      0: "Unnerve",
      1: "Fearmonger",
      H: "Adaptability"
    },
    heightm: 0.7,
    weightkg: 22.2,
    color: "Yellow",
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Beehoss"
    ]
  },
  beehoss: {
    num: 58,
    name: "Beehoss",
    types: [
      "Bug"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 80,
      atk: 115,
      def: 100,
      spa: 75,
      spd: 85,
      spe: 55
    },
    abilities: {
      0: "Unnerve",
      1: "Fearmonger",
      H: "Adaptability"
    },
    heightm: 2.4,
    weightkg: 47.1,
    color: "Brown",
    eggGroups: [
      "Bug"
    ]
  },
  mrblizzard: {
    num: 59,
    name: "Mr.Blizzard",
    types: [
      "Ice"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    baseStats: {
      hp: 55,
      atk: 75,
      def: 90,
      spa: 20,
      spd: 50,
      spe: 15
    },
    abilities: {
      0: "Snow Warning",
      H: "Snow Force"
    },
    heightm: 1.3,
    weightkg: 218.2,
    color: "White",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Royalblizz",
      "Royalblizz"
    ]
  },
  royalblizz: {
    num: 60,
    name: "Royalblizz",
    types: [
      "Ice"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    baseStats: {
      hp: 105,
      atk: 120,
      def: 120,
      spa: 40,
      spd: 90,
      spe: 40
    },
    abilities: {
      0: "Snow Warning",
      H: "Snow Force"
    },
    heightm: 1.9,
    weightkg: 473.7,
    color: "White",
    eggGroups: [
      "Amorphous"
    ]
  },
  cheepcheep: {
    num: 61,
    name: "Cheep Cheep",
    types: [
      "Water"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 65,
      atk: 45,
      def: 50,
      spa: 55,
      spd: 50,
      spe: 20
    },
    abilities: {
      0: "Oblivious",
      1: "Water Veil",
      H: "Drizzle"
    },
    heightm: 0.8,
    weightkg: 14.9,
    color: "Red",
    eggGroups: [
      "Water2"
    ],
    evos: [
      "Boss Bass"
    ]
  },
  bossbass: {
    num: 62,
    name: "Boss Bass",
    types: [
      "Water"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 85,
      atk: 65,
      def: 60,
      spa: 75,
      spd: 60,
      spe: 45
    },
    abilities: {
      0: "Oblivious",
      1: "Water Veil",
      H: "Drizzle"
    },
    heightm: 3.1,
    weightkg: 114.6,
    color: "Red",
    eggGroups: [
      "Water2"
    ],
    evos: [
      "Cheepskipper"
    ]
  },
  cheepskipper: {
    num: 63,
    name: "Cheepskipper",
    types: [
      "Water"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 107,
      atk: 80,
      def: 93,
      spa: 99,
      spd: 93,
      spe: 58
    },
    abilities: {
      0: "Oblivious",
      1: "Water Veil",
      H: "Drizzle"
    },
    heightm: 4.4,
    weightkg: 192.0,
    color: "Purple",
    eggGroups: [
      "Water2"
    ]
  },
  fishbone: {
    num: 64,
    name: "Fishbone",
    types: [
      "Water",
      "Ghost"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    baseStats: {
      hp: 20,
      atk: 65,
      def: 35,
      spa: 20,
      spd: 35,
      spe: 100
    },
    abilities: {
      0: "Cursed Body",
      1: "Aftermath",
      H: "Moxie"
    },
    heightm: 0.5,
    weightkg: 15.1,
    color: "White",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Kingfin"
    ]
  },
  kingfin: {
    num: 65,
    name: "Kingfin",
    types: [
      "Water",
      "Ghost"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    baseStats: {
      hp: 70,
      atk: 125,
      def: 115,
      spa: 80,
      spd: 85,
      spe: 75
    },
    abilities: {
      0: "Cursed Body",
      1: "Aftermath",
      H: "Moxie"
    },
    heightm: 12.4,
    weightkg: 364.9,
    color: "White",
    eggGroups: [
      "Amorphous"
    ]
  },
  spark: {
    num: 66,
    name: "Spark",
    types: [
      "Electric"
    ],
    gender: "N",
    baseStats: {
      hp: 40,
      atk: 85,
      def: 45,
      spa: 60,
      spd: 45,
      spe: 70
    },
    abilities: {
      0: "Static",
      1: "Magnet Pull",
      H: "Motor Drive"
    },
    heightm: 0.4,
    weightkg: 22.1,
    color: "Black",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Amp"
    ]
  },
  amp: {
    num: 67,
    name: "Amp",
    types: [
      "Electric"
    ],
    gender: "N",
    baseStats: {
      hp: 70,
      atk: 125,
      def: 75,
      spa: 75,
      spd: 60,
      spe: 125
    },
    abilities: {
      0: "Static",
      1: "Magnet Pull",
      H: "Motor Drive"
    },
    heightm: 0.8,
    weightkg: 36.4,
    color: "Black",
    eggGroups: [
      "Amorphous"
    ]
  },
  boo: {
    num: 68,
    name: "Boo",
    types: [
      "Ghost"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 75,
      atk: 65,
      def: 45,
      spa: 15,
      spd: 35,
      spe: 60
    },
    abilities: {
      0: "Levitate",
      H: "Infiltrator"
    },
    heightm: 1.1,
    weightkg: 1.0,
    color: "White",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Boodies"
    ]
  },
  boodies: {
    num: 69,
    name: "Boodies",
    types: [
      "Ghost"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 95,
      atk: 85,
      def: 70,
      spa: 35,
      spd: 45,
      spe: 90
    },
    abilities: {
      0: "Levitate",
      H: "Infiltrator"
    },
    heightm: 3.3,
    weightkg: 3.0,
    color: "White",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Boolossus"
    ]
  },
  boolossus: {
    num: 70,
    name: "Boolossus",
    types: [
      "Ghost"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 120,
      atk: 116,
      def: 113,
      spa: 64,
      spd: 62,
      spe: 70
    },
    abilities: {
      0: "Levitate",
      H: "Infiltrator"
    },
    heightm: 7.5,
    weightkg: 120.9,
    color: "White",
    eggGroups: [
      "Amorphous"
    ]
  },
  sidestepper: {
    num: 71,
    name: "Sidestepper",
    types: [
      "Rock",
      "Water"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 75,
      atk: 50,
      def: 100,
      spa: 50,
      spd: 60,
      spe: 30
    },
    abilities: {
      0: "Solid Rock",
      1: "Hyper Cutter",
      H: "Guts"
    },
    heightm: 0.7,
    weightkg: 47.9,
    color: "Red",
    eggGroups: [
      "Water3"
    ],
    evos: [
      "Clawdaddy",
      "Clawgrip",
      "Clawgrip"
    ]
  },
  clawdaddy: {
    num: 72,
    name: "Clawdaddy",
    types: [
      "Rock",
      "Water"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 100,
      atk: 50,
      def: 85,
      spa: 110,
      spd: 125,
      spe: 50
    },
    abilities: {
      0: "Solid Rock",
      1: "Overcoat",
      H: "Weak Armor"
    },
    heightm: 1.3,
    weightkg: 54.8,
    color: "Red",
    eggGroups: [
      "Water3"
    ]
  },
  clawgrip: {
    num: 73,
    name: "Clawgrip",
    types: [
      "Rock",
      "Fighting"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 95,
      atk: 140,
      def: 110,
      spa: 80,
      spd: 45,
      spe: 30
    },
    abilities: {
      0: "Solid Rock",
      1: "Hyper Cutter",
      H: "Guts"
    },
    heightm: 2.7,
    weightkg: 144.4,
    color: "Red",
    eggGroups: [
      "Water3"
    ]
  },
  fizzlit: {
    num: 74,
    name: "Fizzlit",
    types: [
      "Electric",
      "Poison"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 45,
      atk: 30,
      def: 45,
      spa: 65,
      spd: 50,
      spe: 60
    },
    abilities: {
      0: "Analytic",
      1: "Gooey",
      H: "Liquid Ooze"
    },
    heightm: 0.3,
    weightkg: 16.1,
    color: "Purple",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Liquilite"
    ]
  },
  fizzlight: {
    num: 75,
    name: "Liquilite",
    types: [
      "Electric",
      "Poison"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 75,
      atk: 50,
      def: 85,
      spa: 110,
      spd: 80,
      spe: 85
    },
    abilities: {
      0: "Analytic",
      1: "Gooey",
      H: "Liquid Ooze"
    },
    heightm: 1.7,
    weightkg: 29.4,
    color: "Purple",
    eggGroups: [
      "Amorphous"
    ]
  },
  fighterfly: {
    num: 76,
    name: "Fighter Fly",
    types: [
      "Bug",
      "Fighting"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    baseStats: {
      hp: 85,
      atk: 125,
      def: 60,
      spa: 45,
      spd: 90,
      spe: 95
    },
    abilities: {
      0: "No Guard",
      1: "Technician",
      H: "Moxie"
    },
    heightm: 1.2,
    weightkg: 66.4,
    color: "Yellow",
    eggGroups: [
      "Bug"
    ]
  },
  cheepchomp: {
    num: 77,
    name: "Cheep Chomp",
    types: [
      "Water",
      "Dark"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    baseStats: {
      hp: 60,
      atk: 85,
      def: 80,
      spa: 45,
      spd: 55,
      spe: 75
    },
    abilities: {
      0: "Swift Swim",
      1: "Strong Jaw",
      H: "Speed Boost"
    },
    heightm: 2.4,
    weightkg: 42.8,
    color: "Purple",
    eggGroups: [
      "Water2"
    ],
    evos: [
      "Porcupuffer"
    ]
  },
  porcupuffer: {
    num: 78,
    name: "Porcupuffer",
    types: [
      "Water",
      "Dark"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    baseStats: {
      hp: 90,
      atk: 115,
      def: 100,
      spa: 75,
      spd: 65,
      spe: 80
    },
    abilities: {
      0: "Swift Swim",
      1: "Strong Jaw",
      H: "Speed Boost"
    },
    heightm: 3.7,
    weightkg: 88.3,
    color: "Blue",
    eggGroups: [
      "Water2"
    ]
  },
  jellybeam: {
    num: 79,
    name: "Jellybeam",
    types: [
      "Water",
      "Electric"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 95,
      atk: 55,
      def: 65,
      spa: 105,
      spd: 85,
      spe: 80
    },
    abilities: {
      0: "Rain Dish",
      1: "Damp",
      H: "Compound Eyes"
    },
    heightm: 1.4,
    weightkg: 57.8,
    color: "Blue",
    eggGroups: [
      "Water3"
    ]
  },
  bulletbill: {
    num: 80,
    name: "Bullet Bill",
    types: [
      "Fire",
      "Steel"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    baseStats: {
      hp: 35,
      atk: 65,
      def: 35,
      spa: 10,
      spd: 35,
      spe: 70
    },
    abilities: {
      0: "Light Metal",
      1: "Clear Body",
      H: "Adaptability"
    },
    heightm: 0.6,
    weightkg: 42.9,
    color: "Black",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Banzai Bill",
      "Torpedo Ted"
    ]
  },
  banzaibill: {
    num: 81,
    name: "Banzai Bill",
    types: [
      "Fire",
      "Steel"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    baseStats: {
      hp: 75,
      atk: 95,
      def: 70,
      spa: 30,
      spd: 65,
      spe: 75
    },
    abilities: {
      0: "Light Metal",
      1: "Clear Body",
      H: "Adaptability"
    },
    heightm: 2.8,
    weightkg: 109.3,
    color: "Black",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "King Bill"
    ]
  },
  kingbill: {
    num: 82,
    name: "King Bill",
    types: [
      "Fire",
      "Steel"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    baseStats: {
      hp: 100,
      atk: 115,
      def: 95,
      spa: 50,
      spd: 85,
      spe: 100
    },
    abilities: {
      0: "Light Metal",
      1: "Clear Body",
      H: "Adaptability"
    },
    heightm: 12.4,
    weightkg: 882.0,
    color: "Black",
    eggGroups: [
      "Amorphous"
    ]
  },
  fuzzy: {
    num: 83,
    name: "Fuzzy",
    types: [
      "Bug",
      "Dark"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    baseStats: {
      hp: 80,
      atk: 20,
      def: 40,
      spa: 65,
      spd: 20,
      spe: 85
    },
    abilities: {
      0: "Swarm",
      1: "Overcoat",
      H: "Fortitude"
    },
    heightm: 0.8,
    weightkg: 24.3,
    color: "Black",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Fuzzilla"
    ]
  },
  fuzzilla: {
    num: 84,
    name: "Fuzzilla",
    types: [
      "Bug",
      "Dark"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    baseStats: {
      hp: 135,
      atk: 50,
      def: 65,
      spa: 115,
      spd: 50,
      spe: 95
    },
    abilities: {
      0: "Swarm",
      1: "Overcoat",
      H: "Fortitude"
    },
    heightm: 3.1,
    weightkg: 166.3,
    color: "Black",
    eggGroups: [
      "Amorphous"
    ]
  },
  montymole: {
    num: 85,
    name: "Monty Mole",
    types: [
      "Ground"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    baseStats: {
      hp: 35,
      atk: 40,
      def: 40,
      spa: 50,
      spd: 40,
      spe: 75
    },
    abilities: {
      0: "Sand Force",
      1: "Sand Rush",
      H: "Mold Breaker"
    },
    heightm: 0.4,
    weightkg: 38.7,
    color: "Brown",
    eggGroups: [
      "Field"
    ],
    evos: [
      "Mega Mole",
      "RockyWrench"
    ]
  },
  rockywrench: {
    num: 86,
    name: "RockyWrench",
    types: [
      "Ground",
      "Steel"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    baseStats: {
      hp: 50,
      atk: 65,
      def: 60,
      spa: 80,
      spd: 60,
      spe: 80
    },
    abilities: {
      0: "Sand Force",
      1: "Magnet Pull",
      H: "Mold Breaker"
    },
    heightm: 0.7,
    weightkg: 71.3,
    color: "Brown",
    eggGroups: [
      "Field"
    ],
    evos: [
      "Monty Tank"
    ]
  },
  montytank: {
    num: 87,
    name: "Monty Tank",
    types: [
      "Ground",
      "Steel"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    baseStats: {
      hp: 65,
      atk: 85,
      def: 105,
      spa: 110,
      spd: 110,
      spe: 65
    },
    abilities: {
      0: "Sand Force",
      1: "Magnet Pull",
      H: "Mold Breaker"
    },
    heightm: 4.4,
    weightkg: 304.8,
    color: "Brown",
    eggGroups: [
      "Field"
    ]
  },
  toady: {
    num: 88,
    name: "Toady",
    types: [
      "Psychic"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    baseStats: {
      hp: 30,
      atk: 5,
      def: 5,
      spa: 75,
      spd: 65,
      spe: 70
    },
    abilities: {
      0: "Magic Guard",
      1: "Telepathy",
      H: "Magic Bounce"
    },
    heightm: 0.9,
    weightkg: 29.2,
    color: "Red",
    eggGroups: [
      "Field"
    ],
    evos: [
      "Magikoopa"
    ]
  },
  magikoopa: {
    num: 89,
    name: "Magikoopa",
    types: [
      "Psychic"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    baseStats: {
      hp: 50,
      atk: 10,
      def: 35,
      spa: 110,
      spd: 90,
      spe: 95
    },
    abilities: {
      0: "Magic Guard",
      1: "Telepathy",
      H: "Magic Bounce"
    },
    heightm: 1.6,
    weightkg: 62.7,
    color: "Blue",
    eggGroups: [
      "Field"
    ],
    evos: [
      "Psykamek"
    ]
  },
  psykamek: {
    num: 90,
    name: "Psykamek",
    types: [
      "Psychic"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    baseStats: {
      hp: 85,
      atk: 25,
      def: 60,
      spa: 130,
      spd: 110,
      spe: 120
    },
    abilities: {
      0: "Magic Guard",
      1: "Telepathy",
      H: "Magic Bounce"
    },
    heightm: 3.1,
    weightkg: 71.8,
    color: "White",
    eggGroups: [
      "Field"
    ]
  },
  bully: {
    num: 91,
    name: "Bully",
    types: [
      "Fighting",
      "Steel"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    baseStats: {
      hp: 75,
      atk: 30,
      def: 100,
      spa: 65,
      spd: 65,
      spe: 40
    },
    abilities: {
      0: "Inner Focus",
      1: "Clear Body",
      H: "Sturdy"
    },
    heightm: 2.3,
    weightkg: 80.2,
    color: "Gray",
    eggGroups: [
      "Monster"
    ],
    evos: [
      "Nobull"
    ]
  },
  nobully: {
    num: 92,
    name: "Nobull",
    types: [
      "Fighting",
      "Steel"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    baseStats: {
      hp: 75,
      atk: 65,
      def: 140,
      spa: 95,
      spd: 105,
      spe: 55
    },
    abilities: {
      0: "Inner Focus",
      1: "Clear Body",
      H: "Sturdy"
    },
    heightm: 3.2,
    weightkg: 247.0,
    color: "Gray",
    eggGroups: [
      "Monster"
    ]
  },
  chilly: {
    num: 93,
    name: "Chilly",
    types: [
      "Fighting",
      "Ice"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    baseStats: {
      hp: 75,
      atk: 55,
      def: 85,
      spa: 40,
      spd: 100,
      spe: 40
    },
    abilities: {
      0: "Refrigerate",
      1: "Ice Body",
      H: "Sturdy"
    },
    heightm: 2.5,
    weightkg: 92.0,
    color: "Blue",
    eggGroups: [
      "Monster"
    ],
    evos: [
      "Chief Chill"
    ]
  },
  chiefchill: {
    num: 94,
    name: "Chief Chill",
    types: [
      "Fighting",
      "Ice"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    baseStats: {
      hp: 75,
      atk: 90,
      def: 105,
      spa: 50,
      spd: 135,
      spe: 80
    },
    abilities: {
      0: "Refrigerate",
      1: "Ice Body",
      H: "Sturdy"
    },
    heightm: 3.9,
    weightkg: 253.0,
    color: "Blue",
    eggGroups: [
      "Monster"
    ]
  },
  needlenose: {
    num: 95,
    name: "Needlenose",
    types: [
      "Ground",
      "Grass"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 50,
      atk: 47,
      def: 33,
      spa: 57,
      spd: 33,
      spe: 35
    },
    abilities: {
      0: "Rough Skin",
      1: "Reckless",
      H: "Storm Drain"
    },
    heightm: 0.3,
    weightkg: 8.4,
    color: "Yellow",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Pokey"
    ]
  },
  pokey: {
    num: 96,
    name: "Pokey",
    types: [
      "Ground",
      "Grass"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 75,
      atk: 77,
      def: 43,
      spa: 87,
      spd: 63,
      spe: 60
    },
    abilities: {
      0: "Rough Skin",
      1: "Reckless",
      H: "Storm Drain"
    },
    heightm: 3.7,
    weightkg: 61.3,
    color: "Yellow",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Mummipokey"
    ]
  },
  mummipokey: {
    num: 97,
    name: "Mummipokey",
    types: [
      "Ground",
      "Grass"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 85,
      atk: 92,
      def: 73,
      spa: 117,
      spd: 93,
      spe: 75
    },
    abilities: {
      0: "Rough Skin",
      1: "Reckless",
      H: "Storm Drain"
    },
    heightm: 4.0,
    weightkg: 128.1,
    color: "White",
    eggGroups: [
      "Amorphous"
    ]
  },
  spike: {
    num: 98,
    name: "Spike",
    types: [
      "Rock",
      "Steel"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 70,
      atk: 80,
      def: 55,
      spa: 30,
      spd: 45,
      spe: 70
    },
    abilities: {
      0: "Sand Rush",
      1: "Keen Eye",
      H: "Thick Fat"
    },
    heightm: 0.9,
    weightkg: 61.2,
    color: "Green",
    eggGroups: [
      "Field"
    ],
    evos: [
      "Clubba"
    ]
  },
  clubba: {
    num: 99,
    name: "Clubba",
    types: [
      "Rock",
      "Steel"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 90,
      atk: 145,
      def: 65,
      spa: 45,
      spd: 55,
      spe: 100
    },
    abilities: {
      0: "Sand Rush",
      1: "Keen Eye",
      H: "Thick Fat"
    },
    heightm: 1.2,
    weightkg: 72.1,
    color: "Green",
    eggGroups: [
      "Field"
    ]
  },
  conkdor: {
    num: 100,
    name: "Conkdor",
    types: [
      "Ground",
      "Flying"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    baseStats: {
      hp: 120,
      atk: 95,
      def: 85,
      spa: 40,
      spd: 80,
      spe: 75
    },
    abilities: {
      0: "Quick Feet",
      1: "Early Bird",
      H: "Thick Fat"
    },
    heightm: 7.8,
    weightkg: 93.8,
    color: "White",
    eggGroups: [
      "Field"
    ]
  },
  komboo: {
    num: 101,
    name: "Komboo",
    types: [
      "Water",
      "Grass"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 60,
      atk: 70,
      def: 40,
      spa: 115,
      spd: 95,
      spe: 90
    },
    abilities: {
      0: "Simple",
      1: "Contrary",
      H: "Sap Sipper"
    },
    heightm: 5.2,
    weightkg: 33.4,
    color: "Green",
    eggGroups: [
      "Water1"
    ]
  },
  klepto: {
    num: 102,
    name: "Klepto",
    types: [
      "Dark",
      "Flying"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    baseStats: {
      hp: 115,
      atk: 115,
      def: 70,
      spa: 45,
      spd: 60,
      spe: 95
    },
    abilities: {
      0: "Pickpocket",
      1: "Big Pecks",
      H: "Gale Wings"
    },
    heightm: 1.4,
    weightkg: 72.4,
    color: "Black",
    eggGroups: [
      "Flying"
    ]
  },
  drybones: {
    num: 103,
    name: "Dry Bones",
    types: [
      "Ghost",
      "Ground"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 80,
      atk: 55,
      def: 70,
      spa: 55,
      spd: 70,
      spe: 40
    },
    abilities: {
      0: "Cursed Body",
      H: "Regenerator"
    },
    heightm: 1.1,
    weightkg: 34.5,
    color: "Gray",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Elite Bones",
      "Para Bones"
    ]
  },
  elitebones: {
    num: 104,
    name: "Elite Bones",
    types: [
      "Ghost",
      "Ground"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 110,
      atk: 115,
      def: 105,
      spa: 50,
      spd: 75,
      spe: 65
    },
    abilities: {
      0: "Cursed Body",
      H: "Regenerator"
    },
    heightm: 0.6,
    weightkg: 38.2,
    color: "Gray",
    eggGroups: [
      "Amorphous"
    ]
  },
  parabones: {
    num: 105,
    name: "Para Bones",
    types: [
      "Ghost",
      "Flying"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 105,
      atk: 40,
      def: 75,
      spa: 95,
      spd: 115,
      spe: 80
    },
    abilities: {
      0: "Cursed Body",
      H: "Regenerator"
    },
    heightm: 1.3,
    weightkg: 37.8,
    color: "Gray",
    eggGroups: [
      "Amorphous"
    ]
  },
  bobomb: {
    num: 106,
    name: "Bob-omb",
    types: [
      "Fire"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 30,
      atk: 45,
      def: 55,
      spa: 60,
      spd: 20,
      spe: 60
    },
    abilities: {
      0: "Flash Fire",
      1: "White Smoke",
      H: "Bomb Expert"
    },
    heightm: 0.6,
    weightkg: 25.2,
    color: "Black",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Bob-arm"
    ]
  },
  bobarm: {
    num: 107,
    name: "Bob-arm",
    types: [
      "Fire"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 40,
      atk: 65,
      def: 75,
      spa: 95,
      spd: 40,
      spe: 75
    },
    abilities: {
      0: "Flash Fire",
      1: "White Smoke",
      H: "Bomb Expert"
    },
    heightm: 0.9,
    weightkg: 33.2,
    color: "Black",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "King-omb",
      "Queen-omb"
    ]
  },
  kingomb: {
    num: 108,
    name: "King-omb",
    types: [
      "Fire"
    ],
    gender: "M",
    baseStats: {
      hp: 70,
      atk: 85,
      def: 85,
      spa: 120,
      spd: 70,
      spe: 80
    },
    abilities: {
      0: "Flash Fire",
      1: "White Smoke",
      H: "Bomb Expert"
    },
    heightm: 3.3,
    weightkg: 118.2,
    color: "Black",
    eggGroups: [
      "Amorphous"
    ]
  },
  broozer: {
    num: 109,
    name: "Broozer",
    types: [
      "Fighting",
      "Ghost"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    baseStats: {
      hp: 80,
      atk: 110,
      def: 90,
      spa: 45,
      spd: 60,
      spe: 85
    },
    abilities: {
      0: "Iron Fist",
      1: "Defiant",
      H: "Justified"
    },
    heightm: 1.8,
    weightkg: 0.8,
    color: "White",
    eggGroups: [
      "Amorphous"
    ]
  },
  whimp: {
    num: 110,
    name: "Whimp",
    types: [
      "Rock",
      "Ground"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 50,
      atk: 60,
      def: 75,
      spa: 25,
      spd: 75,
      spe: 35
    },
    abilities: {
      0: "Sturdy",
      1: "Rock Head",
      H: "Solid Rock"
    },
    heightm: 2.1,
    weightkg: 82.6,
    color: "Gray",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Whomp"
    ]
  },
  whomp: {
    num: 111,
    name: "Whomp",
    types: [
      "Rock",
      "Ground"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 90,
      atk: 80,
      def: 115,
      spa: 30,
      spd: 115,
      spe: 75
    },
    abilities: {
      0: "Sturdy",
      1: "Rock Head",
      H: "Solid Rock"
    },
    heightm: 8.4,
    weightkg: 474.8,
    color: "Gray",
    eggGroups: [
      "Amorphous"
    ]
  },
  torpedoted: {
    num: 112,
    name: "Torpedo Ted",
    types: [
      "Water",
      "Steel"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    baseStats: {
      hp: 65,
      atk: 80,
      def: 70,
      spa: 115,
      spd: 100,
      spe: 115
    },
    abilities: {
      0: "Swift Swim",
      1: "Clear Body",
      H: "Adaptability"
    },
    heightm: 1.2,
    weightkg: 68.1,
    color: "Black",
    eggGroups: [
      "Amorphous"
    ]
  },
  electroopa: {
    num: 113,
    name: "Electroopa",
    types: [
      "Electric"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 45,
      atk: 50,
      def: 55,
      spa: 70,
      spd: 50,
      spe: 50
    },
    abilities: {
      0: "Static",
      1: "Lightning Rod",
      H: "Storm Drain"
    },
    heightm: 1.4,
    weightkg: 67.4,
    color: "Blue",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Voltroopa"
    ]
  },
  voltroopa: {
    num: 114,
    name: "Voltroopa",
    types: [
      "Electric"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 65,
      atk: 65,
      def: 80,
      spa: 120,
      spd: 90,
      spe: 80
    },
    abilities: {
      0: "Static",
      1: "Lightning Rod",
      H: "Storm Drain"
    },
    heightm: 3.1,
    weightkg: 93.1,
    color: "Red",
    eggGroups: [
      "Amorphous"
    ]
  },
  unira: {
    num: 115,
    name: "Unira",
    types: [
      "Water",
      "Psychic"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 55,
      atk: 55,
      def: 75,
      spa: 85,
      spd: 50,
      spe: 20
    },
    abilities: {
      0: "Immunity",
      1: "Poison Point",
      H: "Analytic"
    },
    heightm: 0.4,
    weightkg: 8.2,
    color: "Purple",
    eggGroups: [
      "Water3"
    ],
    evos: [
      "Urchin"
    ]
  },
  urchin: {
    num: 116,
    name: "Urchin",
    types: [
      "Water",
      "Psychic"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 80,
      atk: 80,
      def: 95,
      spa: 120,
      spd: 65,
      spe: 50
    },
    abilities: {
      0: "Immunity",
      1: "Poison Point",
      H: "Analytic"
    },
    heightm: 2.6,
    weightkg: 44.9,
    color: "Purple",
    eggGroups: [
      "Water3"
    ]
  },
  charginchuck: {
    num: 117,
    name: "CharginChuck",
    types: [
      "Fighting"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    baseStats: {
      hp: 80,
      atk: 120,
      def: 80,
      spa: 40,
      spd: 90,
      spe: 105
    },
    abilities: {
      0: "Intimidate",
      1: "Vital Spirit",
      H: "No Guard"
    },
    heightm: 1.8,
    weightkg: 72.8,
    color: "Blue",
    eggGroups: [
      "Humanlike"
    ]
  },
  virus: {
    num: 118,
    name: "Virus",
    types: [
      "Poison"
    ],
    gender: "N",
    baseStats: {
      hp: 80,
      atk: 55,
      def: 75,
      spa: 55,
      spd: 75,
      spe: 35
    },
    abilities: {
      0: "Effect Spore",
      1: "Poison Touch",
      H: "Merciless"
    },
    heightm: 0.7,
    weightkg: 12.4,
    color: "Blue",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Trirus"
    ]
  },
  trirus: {
    num: 119,
    name: "Trirus",
    types: [
      "Poison"
    ],
    gender: "N",
    baseStats: {
      hp: 120,
      atk: 75,
      def: 100,
      spa: 75,
      spd: 100,
      spe: 40
    },
    abilities: {
      0: "Effect Spore",
      1: "Poison Touch",
      H: "Merciless"
    },
    heightm: 1.6,
    weightkg: 36.2,
    color: "Blue",
    eggGroups: [
      "Amorphous"
    ]
  },
  rex: {
    num: 120,
    name: "Rex",
    types: [
      "Dragon"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 70,
      atk: 60,
      def: 80,
      spa: 125,
      spd: 95,
      spe: 80
    },
    abilities: {
      0: "Marvel Scale",
      H: "Multiscale"
    },
    heightm: 2.1,
    weightkg: 84.4,
    color: "Blue",
    eggGroups: [
      "Amorphous"
    ]
  },
  chibichomp: {
    num: 121,
    name: "Chibi Chomp",
    types: [
      "Steel"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 40,
      atk: 80,
      def: 95,
      spa: 50,
      spd: 75,
      spe: 35
    },
    abilities: {
      0: "Rock Head",
      1: "Clear Body",
      H: "Sheer Force"
    },
    heightm: 1.2,
    weightkg: 100.0,
    color: "Gray",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Chain Chomp"
    ]
  },
  chainchomp: {
    num: 122,
    name: "Chain Chomp",
    types: [
      "Steel"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 80,
      atk: 130,
      def: 110,
      spa: 70,
      spd: 85,
      spe: 85
    },
    abilities: {
      0: "Rock Head",
      1: "Clear Body",
      H: "Sheer Force"
    },
    heightm: 2.4,
    weightkg: 238.4,
    color: "Gray",
    eggGroups: [
      "Amorphous"
    ]
  },
  dragoneel: {
    num: 123,
    name: "Dragoneel",
    types: [
      "Water",
      "Dragon"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 110,
      atk: 85,
      def: 70,
      spa: 130,
      spd: 110,
      spe: 80
    },
    abilities: {
      0: "Strong Jaw",
      1: "Intimidate",
      H: "Swift Swim"
    },
    heightm: 12.8,
    weightkg: 441.8,
    color: "Red",
    eggGroups: [
      "Amorphous"
    ]
  },
  mechakoopa: {
    num: 124,
    name: "Mechakoopa",
    types: [
      "Electric"
    ],
    gender: "N",
    baseStats: {
      hp: 65,
      atk: 45,
      def: 85,
      spa: 125,
      spd: 95,
      spe: 95
    },
    abilities: {
      0: "Download",
      H: "Trace"
    },
    heightm: 0.8,
    weightkg: 57.3,
    color: "Yellow",
    eggGroups: [
      "Amorphous"
    ],
    otherFormes: [
      "Mechakoopa-Water",
      "Mechakoopa-Fire",
      "Mechakoopa-Ice"
    ],
    formeOrder: [
      "Mechakoopa",
      "Mechakoopa-Water",
      "Mechakoopa-Fire",
      "Mechakoopa-Ice"
    ]
  },
  mechakoopa-water: {
    num: 124,
    name: "Mechakoopa-Water",
    types: [
      "Electric",
      "Water"
    ],
    gender: "N",
    baseStats: {
      hp: 65,
      atk: 45,
      def: 90,
      spa: 110,
      spd: 110,
      spe: 90
    },
    abilities: {
      0: "Lightning Rod",
      H: "Trace"
    },
    heightm: 0.8,
    weightkg: 57.3,
    color: "Yellow",
    eggGroups: [
      "Amorphous"
    ]
  },
  mechakoopa-fire: {
    num: 124,
    name: "Mechakoopa-Fire",
    types: [
      "Electric",
      "Fire"
    ],
    gender: "N",
    baseStats: {
      hp: 65,
      atk: 45,
      def: 80,
      spa: 120,
      spd: 90,
      spe: 110
    },
    abilities: {
      0: "Flash Fire",
      H: "Trace"
    },
    heightm: 0.8,
    weightkg: 57.3,
    color: "Yellow",
    eggGroups: [
      "Amorphous"
    ]
  },
  mechakoopa-ice: {
    num: 124,
    name: "Mechakoopa-Ice",
    types: [
      "Electric",
      "Ice"
    ],
    gender: "N",
    baseStats: {
      hp: 65,
      atk: 45,
      def: 80,
      spa: 140,
      spd: 80,
      spe: 100
    },
    abilities: {
      0: "Snow Force",
      H: "Trace"
    },
    heightm: 0.8,
    weightkg: 57.3,
    color: "Yellow",
    eggGroups: [
      "Amorphous"
    ]
  },
  jelectro: {
    num: 125,
    name: "Jelectro",
    types: [
      "Water",
      "Electric"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 75,
      atk: 15,
      def: 45,
      spa: 80,
      spd: 60,
      spe: 70
    },
    abilities: {
      0: "Rain Dish",
      1: "Damp",
      H: "Compound Eyes"
    },
    heightm: 0.6,
    weightkg: 24.2,
    color: "Black",
    eggGroups: [
      "Water3"
    ],
    evos: [
      "Jellybeam"
    ]
  },
  flurry: {
    num: 126,
    name: "Flurry",
    types: [
      "Ice",
      "Fairy"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    baseStats: {
      hp: 70,
      atk: 35,
      def: 60,
      spa: 110,
      spd: 85,
      spe: 140
    },
    abilities: {
      0: "Ice Body",
      1: "Wonder Skin",
      H: "Snow Warning"
    },
    heightm: 1.2,
    weightkg: 46.2,
    color: "White",
    eggGroups: [
      "Amorphous"
    ]
  },
  topmini: {
    num: 127,
    name: "Topmini",
    types: [
      "Electric",
      "Steel"
    ],
    gender: "N",
    baseStats: {
      hp: 30,
      atk: 30,
      def: 45,
      spa: 70,
      spd: 45,
      spe: 80
    },
    abilities: {
      0: "Motor Drive",
      1: "Soundproof",
      H: "Galvanize"
    },
    heightm: 0.2,
    weightkg: 1.8,
    color: "Yellow",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Topman"
    ]
  },
  topman: {
    num: 128,
    name: "Topman",
    types: [
      "Electric",
      "Steel"
    ],
    gender: "N",
    baseStats: {
      hp: 50,
      atk: 60,
      def: 55,
      spa: 80,
      spd: 75,
      spe: 90
    },
    abilities: {
      0: "Motor Drive",
      1: "Soundproof",
      H: "Galvanize"
    },
    heightm: 0.9,
    weightkg: 19.4,
    color: "Red",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Topmaniac"
    ]
  },
  topmaniac: {
    num: 129,
    name: "Topmaniac",
    types: [
      "Electric",
      "Steel"
    ],
    gender: "N",
    baseStats: {
      hp: 65,
      atk: 75,
      def: 70,
      spa: 110,
      spd: 100,
      spe: 130
    },
    abilities: {
      0: "Motor Drive",
      1: "Soundproof",
      H: "Galvanize"
    },
    heightm: 1.8,
    weightkg: 67.9,
    color: "Black",
    eggGroups: [
      "Amorphous"
    ]
  },
  lovubble: {
    num: 130,
    name: "Lovubble",
    types: [
      "Fairy",
      "Flying"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    baseStats: {
      hp: 60,
      atk: 40,
      def: 55,
      spa: 60,
      spd: 65,
      spe: 30
    },
    abilities: {
      0: "Unaware",
      1: "Sweet Veil",
      H: "Simple"
    },
    heightm: 0.4,
    weightkg: 11.4,
    color: "Pink",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Smeech"
    ]
  },
  smeech: {
    num: 131,
    name: "Smeech",
    types: [
      "Fairy",
      "Flying"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    baseStats: {
      hp: 85,
      atk: 73,
      def: 75,
      spa: 97,
      spd: 105,
      spe: 75
    },
    abilities: {
      0: "Unaware",
      1: "Sweet Veil",
      H: "Triage"
    },
    heightm: 0.8,
    weightkg: 26.3,
    color: "Pink",
    eggGroups: [
      "Amorphous"
    ]
  },
  foo: {
    num: 132,
    name: "Foo",
    types: [
      "Ice",
      "Flying"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 85,
      atk: 30,
      def: 60,
      spa: 70,
      spd: 95,
      spe: 40
    },
    abilities: {
      0: "Prankster",
      1: "Cloud Nine",
      H: "Blow Away"
    },
    heightm: 0.8,
    weightkg: 0.8,
    color: "White",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Ty-Foo"
    ]
  },
  tyfoo: {
    num: 133,
    name: "Ty-Foo",
    types: [
      "Ice",
      "Flying"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 120,
      atk: 40,
      def: 90,
      spa: 90,
      spd: 130,
      spe: 50
    },
    abilities: {
      0: "Prankster",
      1: "Cloud Nine",
      H: "Blow Away"
    },
    heightm: 3.2,
    weightkg: 12.6,
    color: "White",
    eggGroups: [
      "Amorphous"
    ]
  },
  cooligan: {
    num: 134,
    name: "Cooligan",
    types: [
      "Ice",
      "Water"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 80,
      atk: 110,
      def: 75,
      spa: 65,
      spd: 55,
      spe: 115
    },
    abilities: {
      0: "Snow Force",
      1: "Slush Rush",
      H: "Thick Fat"
    },
    heightm: 1.6,
    weightkg: 41.6,
    color: "Blue",
    eggGroups: [
      "Amorphous"
    ]
  },
  megamole: {
    num: 135,
    name: "Mega Mole",
    types: [
      "Ground"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    baseStats: {
      hp: 100,
      atk: 115,
      def: 120,
      spa: 50,
      spd: 80,
      spe: 60
    },
    abilities: {
      0: "Sand Boost",
      1: "Sand Rush",
      H: "Thick Fat"
    },
    heightm: 2.2,
    weightkg: 88.9,
    color: "Brown",
    eggGroups: [
      "Field"
    ]
  },
  firesnake: {
    num: 136,
    name: "Fire Snake",
    types: [
      "Fire"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 55,
      atk: 85,
      def: 65,
      spa: 65,
      spd: 65,
      spe: 75
    },
    abilities: {
      0: "Drought",
      1: "Blaze",
      H: "Insomnia"
    },
    heightm: 1.3,
    weightkg: 52.4,
    color: "Red",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Angry Sun"
    ]
  },
  angrysun: {
    num: 137,
    name: "Angry Sun",
    types: [
      "Fire",
      "Psychic"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 80,
      atk: 110,
      def: 90,
      spa: 90,
      spd: 70,
      spe: 100
    },
    abilities: {
      0: "Drought",
      1: "Solar Power",
      H: "Shine Thief"
    },
    heightm: 7.0,
    weightkg: 198.9,
    color: "Red",
    eggGroups: [
      "Amorphous"
    ]
  },
  phanto: {
    num: 138,
    name: "Phanto",
    types: [
      "Dark",
      "Fairy"
    ],
    gender: "N",
    baseStats: {
      hp: 66,
      atk: 55,
      def: 80,
      spa: 120,
      spd: 104,
      spe: 125
    },
    abilities: {
      0: "Fairy Aura",
      1: "Dark Aura",
      H: "Intimidate"
    },
    heightm: 0.8,
    weightkg: 66.6,
    color: "Red",
    eggGroups: [
      "Amorphous"
    ]
  },
  sumobro: {
    num: 139,
    name: "Sumo Bro",
    types: [
      "Fighting",
      "Electric"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    baseStats: {
      hp: 110,
      atk: 95,
      def: 95,
      spa: 145,
      spd: 75,
      spe: 15
    },
    abilities: {
      0: "Vital Spirit",
      1: "Scrappy",
      H: "Volt Absorb"
    },
    heightm: 2.0,
    weightkg: 116.4,
    color: "Brown",
    eggGroups: [
      "Humanlike"
    ]
  },
  bitefrost: {
    num: 140,
    name: "Bitefrost",
    types: [
      "Ice",
      "Ground"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 85,
      atk: 110,
      def: 120,
      spa: 40,
      spd: 85,
      spe: 85
    },
    abilities: {
      0: "Strong Jaw",
      1: "Snow Force",
      H: "Mold Breaker"
    },
    heightm: 7.4,
    weightkg: 326.1,
    color: "White",
    eggGroups: [
      "Amorphous"
    ]
  },
  scuttler: {
    num: 141,
    name: "Scuttler",
    types: [
      "Bug",
      "Poison"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 55,
      atk: 35,
      def: 55,
      spa: 55,
      spd: 45,
      spe: 60
    },
    abilities: {
      0: "Swarm",
      1: "Compound Eyes",
      H: "Terrorize"
    },
    heightm: 0.5,
    weightkg: 7.3,
    color: "Pink",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Scuttlebug"
    ]
  },
  scuttlebug: {
    num: 142,
    name: "Scuttlebug",
    types: [
      "Bug",
      "Poison"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 80,
      atk: 55,
      def: 80,
      spa: 100,
      spd: 65,
      spe: 100
    },
    abilities: {
      0: "Swarm",
      1: "Compound Eyes",
      H: "Terrorize"
    },
    heightm: 1.2,
    weightkg: 34.2,
    color: "Yellow",
    eggGroups: [
      "Amorphous"
    ]
  },
  venomush: {
    num: 143,
    name: "Venomush",
    types: [
      "Poison",
      "Dark"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 50,
      atk: 85,
      def: 65,
      spa: 55,
      spd: 40,
      spe: 80
    },
    abilities: {
      0: "Poison Touch",
      1: "Guts",
      H: "No Guard"
    },
    heightm: 0.3,
    weightkg: 13.6,
    color: "Purple",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Zombimush"
    ]
  },
  zombimush: {
    num: 144,
    name: "Zombimush",
    types: [
      "Poison",
      "Dark"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 80,
      atk: 135,
      def: 85,
      spa: 75,
      spd: 60,
      spe: 105
    },
    abilities: {
      0: "Poison Touch",
      1: "Guts",
      H: "No Guard"
    },
    heightm: 1.7,
    weightkg: 73.8,
    color: "Purple",
    eggGroups: [
      "Amorphous"
    ]
  },
  komu: {
    num: 145,
    name: "Komu",
    types: [
      "Water",
      "Grass"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 40,
      atk: 50,
      def: 30,
      spa: 80,
      spd: 60,
      spe: 70
    },
    abilities: {
      0: "Simple",
      1: "Contrary",
      H: "Sap Sipper"
    },
    heightm: 0.9,
    weightkg: 11.4,
    color: "Green",
    eggGroups: [
      "Water1"
    ],
    evos: [
      "Komboo"
    ]
  },
  sumolad: {
    num: 146,
    name: "Sumo Lad",
    types: [
      "Fighting",
      "Electric"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    baseStats: {
      hp: 75,
      atk: 65,
      def: 60,
      spa: 80,
      spd: 55,
      spe: 10
    },
    abilities: {
      0: "Vital Spirit",
      1: "Scrappy",
      H: "Volt Absorb"
    },
    heightm: 1.3,
    weightkg: 67.7,
    color: "Brown",
    eggGroups: [
      "Humanlike"
    ],
    evos: [
      "Sumo Bro"
    ]
  },
  jango: {
    num: 147,
    name: "Jango",
    types: [
      "Dark",
      "Flying"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    baseStats: {
      hp: 90,
      atk: 60,
      def: 40,
      spa: 25,
      spd: 40,
      spe: 75
    },
    abilities: {
      0: "Pickpocket",
      1: "Big Pecks",
      H: "Gale Wings"
    },
    heightm: 0.8,
    weightkg: 57.4,
    color: "Black",
    eggGroups: [
      "Flying"
    ],
    evos: [
      "Klepto"
    ]
  },
  bumpty: {
    num: 148,
    name: "Bumpty",
    types: [
      "Water"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 60,
      atk: 80,
      def: 50,
      spa: 45,
      spd: 40,
      spe: 80
    },
    abilities: {
      0: "Snow Force",
      1: "Slush Rush",
      H: "Thick Fat"
    },
    heightm: 0.4,
    weightkg: 12.3,
    color: "Blue",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Cooligan"
    ]
  },
  dinotorch: {
    num: 149,
    name: "Dino Torch",
    types: [
      "Fire",
      "Dragon"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 45,
      atk: 50,
      def: 40,
      spa: 73,
      spd: 40,
      spe: 52
    },
    abilities: {
      0: "Berserk",
      H: "Sheer Force"
    },
    heightm: 0.3,
    weightkg: 22.3,
    color: "Blue",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Dino Rhino"
    ]
  },
  dinorhino: {
    num: 150,
    name: "Dino Rhino",
    types: [
      "Fire",
      "Dragon"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 60,
      atk: 65,
      def: 75,
      spa: 90,
      spd: 85,
      spe: 75
    },
    abilities: {
      0: "Berserk",
      H: "Sheer Force"
    },
    heightm: 2.1,
    weightkg: 137.2,
    color: "Blue",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Reznor"
    ]
  },
  reznor: {
    num: 151,
    name: "Reznor",
    types: [
      "Fire",
      "Dragon"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 85,
      atk: 90,
      def: 90,
      spa: 130,
      spd: 115,
      spe: 90
    },
    abilities: {
      0: "Berserk",
      H: "Sheer Force"
    },
    heightm: 3.1,
    weightkg: 204.7,
    color: "Blue",
    eggGroups: [
      "Amorphous"
    ]
  },
  shrooblet: {
    num: 152,
    name: "Shrooblet",
    types: [
      "Psychic"
    ],
    gender: "N",
    baseStats: {
      hp: 45,
      atk: 60,
      def: 45,
      spa: 15,
      spd: 20,
      spe: 60
    },
    abilities: {
      0: "Synchronize",
      1: "Toxic Boost",
      H: "Hustle"
    },
    heightm: 0.3,
    weightkg: 12.4,
    color: "Purple",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Shroob"
    ]
  },
  shroob: {
    num: 153,
    name: "Shroob",
    types: [
      "Psychic"
    ],
    gender: "N",
    baseStats: {
      hp: 70,
      atk: 90,
      def: 70,
      spa: 50,
      spd: 45,
      spe: 60
    },
    abilities: {
      0: "Synchronize",
      1: "Toxic Boost",
      H: "Hustle"
    },
    heightm: 1.3,
    weightkg: 43.6,
    color: "Purple",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Shrooboid",
      "S.F.O."
    ]
  },
  shrooboid: {
    num: 154,
    name: "Shrooboid",
    types: [
      "Psychic"
    ],
    gender: "N",
    baseStats: {
      hp: 115,
      atk: 135,
      def: 100,
      spa: 60,
      spd: 70,
      spe: 70
    },
    abilities: {
      0: "Synchronize",
      1: "Toxic Boost",
      H: "Hustle"
    },
    heightm: 2.2,
    weightkg: 72.4,
    color: "Green",
    eggGroups: [
      "Amorphous"
    ]
  },
  sfo: {
    num: 155,
    name: "S.F.O.",
    types: [
      "Psychic",
      "Steel"
    ],
    gender: "N",
    baseStats: {
      hp: 70,
      atk: 45,
      def: 95,
      spa: 125,
      spd: 125,
      spe: 90
    },
    abilities: {
      0: "Levitate",
      H: "Download"
    },
    heightm: 1.6,
    weightkg: 112.8,
    color: "Purple",
    eggGroups: [
      "Amorphous"
    ]
  },
  sbobomb: {
    num: 156,
    name: "Bob-omb",
    types: [
      "Ice",
      "Fire"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    baseStats: {
      hp: 65,
      atk: 80,
      def: 75,
      spa: 110,
      spd: 130,
      spe: 90
    },
    abilities: {
      0: "Filter",
      1: "Flash Fire",
      H: "Adaptability"
    },
    heightm: 0.6,
    weightkg: 25.2,
    color: "White",
    eggGroups: [
      "Amorphous"
    ]
  },
  sblooper: {
    num: 157,
    name: "Blooper",
    types: [
      "Grass",
      "Psychic"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 85,
      atk: 125,
      def: 75,
      spa: 80,
      spd: 115,
      spe: 90
    },
    abilities: {
      0: "Star Boost",
      H: "Star Petals"
    },
    heightm: 1.7,
    weightkg: 19.2,
    color: "Brown",
    eggGroups: [
      "Amorphous"
    ]
  },
  spodoboo: {
    num: 158,
    name: "Podoboo",
    types: [
      "Water",
      "Ice"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    baseStats: {
      hp: 85,
      atk: 65,
      def: 115,
      spa: 125,
      spd: 100,
      spe: 80
    },
    abilities: {
      0: "Star Boost",
      H: "Star Bubble"
    },
    heightm: 0.8,
    weightkg: 54.0,
    color: "Blue",
    eggGroups: [
      "Amorphous"
    ]
  },
  skoopatroopa: {
    num: 159,
    name: "Koopatroopa",
    types: [
      "Steel",
      "Dark"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 60,
      atk: 130,
      def: 50,
      spa: 40,
      spd: 85,
      spe: 145
    },
    abilities: {
      0: "Tough Claws",
      H: "Star Dash"
    },
    heightm: 1.6,
    weightkg: 99.2,
    color: "Gray",
    eggGroups: [
      "Field",
      "Humanlike"
    ]
  },
  sboo: {
    num: 160,
    name: "Boo",
    types: [
      "Water",
      "Fairy"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 100,
      atk: 50,
      def: 85,
      spa: 110,
      spd: 85,
      spe: 95
    },
    abilities: {
      0: "Star Boost",
      H: "Haze Wave"
    },
    heightm: 1.1,
    weightkg: 1.0,
    color: "Blue",
    eggGroups: [
      "Amorphous"
    ]
  },
  flappy: {
    num: 161,
    name: "Flappy",
    types: [
      "Bug"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    baseStats: {
      hp: 65,
      atk: 85,
      def: 45,
      spa: 20,
      spd: 75,
      spe: 75
    },
    abilities: {
      0: "No Guard",
      1: "Technician",
      H: "Moxie"
    },
    heightm: 0.6,
    weightkg: 8.4,
    color: "Blue",
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Fighter Fly"
    ]
  },
  dusty: {
    num: 162,
    name: "Dusty",
    types: [
      "Ground",
      "Flying"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 40,
      atk: 50,
      def: 60,
      spa: 80,
      spd: 60,
      spe: 75
    },
    abilities: {
      0: "Sand Veil",
      1: "Sand Force",
      H: "Aerilate"
    },
    heightm: 0.5,
    weightkg: 12.4,
    color: "Brown",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Tweester"
    ]
  },
  tweester: {
    num: 163,
    name: "Tweester",
    types: [
      "Ground",
      "Flying"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 60,
      atk: 65,
      def: 80,
      spa: 125,
      spd: 80,
      spe: 105
    },
    abilities: {
      0: "Sand Veil",
      1: "Sand Force",
      H: "Aerilate"
    },
    heightm: 8.8,
    weightkg: 46.1,
    color: "Brown",
    eggGroups: [
      "Amorphous"
    ]
  },
  sbuzzybeetle: {
    num: 164,
    name: "Buzzybeetle",
    types: [
      "Bug",
      "Dragon"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 90,
      atk: 80,
      def: 120,
      spa: 110,
      spd: 75,
      spe: 85
    },
    abilities: {
      0: "Multiscale",
      H: "Star Shield"
    },
    heightm: 3.6,
    weightkg: 122.8,
    color: "Yellow",
    eggGroups: [
      "Amorphous"
    ]
  },
  pokio: {
    num: 165,
    name: "Pokio",
    types: [
      "Steel",
      "Flying"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 90,
      atk: 110,
      def: 100,
      spa: 25,
      spd: 75,
      spe: 75
    },
    abilities: {
      0: "Battle Armor",
      1: "Quick Feet",
      H: "Sturdy"
    },
    heightm: 1.2,
    weightkg: 41.3,
    color: "Blue",
    eggGroups: [
      "Amorphous"
    ]
  },
  luma: {
    num: 166,
    name: "Luma",
    types: [
      "Psychic",
      "Fairy"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 90,
      atk: 70,
      def: 70,
      spa: 70,
      spd: 70,
      spe: 70
    },
    abilities: {
      0: "Natural Cure",
      1: "Magic Guard",
      H: "Filter"
    },
    heightm: 0.9,
    weightkg: 44.2,
    color: "Yellow",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Lumalee"
    ]
  },
  lumalee: {
    num: 167,
    name: "Lumalee",
    types: [
      "Psychic",
      "Fairy"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 130,
      atk: 90,
      def: 90,
      spa: 90,
      spd: 90,
      spe: 90
    },
    abilities: {
      0: "Natural Cure",
      1: "Magic Guard",
      H: "Filter"
    },
    heightm: 1.4,
    weightkg: 56.3,
    color: "Blue",
    eggGroups: [
      "Amorphous"
    ]
  },
  eggranha: {
    num: 168,
    name: "Eggranha",
    types: [
      "Grass",
      "Dragon"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 90,
      atk: 80,
      def: 100,
      spa: 30,
      spd: 100,
      spe: 15
    },
    abilities: {
      0: "Leaf Guard",
      1: "Gluttony",
      H: "Thick Fat"
    },
    heightm: 3.8,
    weightkg: 112.6,
    color: "Green",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Dinoranha"
    ]
  },
  dinoranha: {
    num: 169,
    name: "Dinoranha",
    types: [
      "Grass",
      "Dragon"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 135,
      atk: 125,
      def: 70,
      spa: 75,
      spd: 80,
      spe: 75
    },
    abilities: {
      0: "Leaf Guard",
      1: "Gluttony",
      H: "Thick Fat"
    },
    heightm: 4.2,
    weightkg: 129.4,
    color: "Green",
    eggGroups: [
      "Amorphous"
    ]
  },
  pupdozer: {
    num: 170,
    name: "Pupdozer",
    types: [
      "Ground",
      "Fairy"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    baseStats: {
      hp: 60,
      atk: 60,
      def: 100,
      spa: 25,
      spd: 45,
      spe: 70
    },
    abilities: {
      0: "Own Tempo",
      1: "Gluttony",
      H: "Oblivious"
    },
    heightm: 2.4,
    weightkg: 51.4,
    color: "Yellow",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Glamdozer"
    ]
  },
  glamdozer: {
    num: 171,
    name: "Glamdozer",
    types: [
      "Ground",
      "Fairy"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    baseStats: {
      hp: 85,
      atk: 95,
      def: 145,
      spa: 40,
      spd: 70,
      spe: 65
    },
    abilities: {
      0: "Own Tempo",
      1: "Gluttony",
      H: "Dazzling"
    },
    heightm: 6.1,
    weightkg: 316.4,
    color: "Pink",
    eggGroups: [
      "Amorphous"
    ]
  },
  sgoomba: {
    num: 172,
    name: "Goomba",
    types: [
      "Psychic",
      "Normal"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    baseStats: {
      hp: 100,
      atk: 60,
      def: 80,
      spa: 120,
      spd: 100,
      spe: 80
    },
    abilities: {
      0: "Magic Bounce",
      H: "Star Bat"
    },
    heightm: 0.7,
    weightkg: 22.8,
    color: "Pink",
    eggGroups: [
      "Amorphous"
    ]
  },
  wingo: {
    num: 173,
    name: "Wingo",
    types: [
      "Psychic",
      "Flying"
    ],
    gender: "M",
    baseStats: {
      hp: 105,
      atk: 65,
      def: 75,
      spa: 135,
      spd: 105,
      spe: 85
    },
    abilities: {
      0: "Synchronize",
      H: "Tinted Lens"
    },
    heightm: 7.3,
    weightkg: 149.3,
    color: "Blue",
    eggGroups: [
      "Amorphous"
    ]
  },
  mrtropical: {
    num: 174,
    name: "Mr.Tropical",
    types: [
      "Ground",
      "Water"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 95,
      atk: 65,
      def: 85,
      spa: 105,
      spd: 115,
      spe: 45
    },
    abilities: {
      0: "AQUAAMPLIFY",
      H: "Drizzle"
    },
    heightm: 1.8,
    weightkg: 674.9,
    color: "Yellow",
    eggGroups: [
      "Amorphous"
    ]
  },
  starkid: {
    num: 175,
    name: "Star Kid",
    types: [
      "Fairy"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 60,
      atk: 60,
      def: 60,
      spa: 60,
      spd: 60,
      spe: 60
    },
    abilities: {
      0: "Pixilate",
      1: "Shooting Star",
      H: "Serene Grace"
    },
    heightm: 0.6,
    weightkg: 15.6,
    color: "Yellow",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Star Spirit",
      "Star Sprite"
    ]
  },
  starspirit: {
    num: 176,
    name: "Star Spirit",
    types: [
      "Fairy"
    ],
    gender: "M",
    baseStats: {
      hp: 65,
      atk: 120,
      def: 100,
      spa: 70,
      spd: 70,
      spe: 95
    },
    abilities: {
      0: "Pixilate",
      1: "Shooting Star",
      H: "Serene Grace"
    },
    heightm: 1.4,
    weightkg: 192.2,
    color: "Yellow",
    eggGroups: [
      "Amorphous"
    ]
  },
  starsprite: {
    num: 177,
    name: "Star Sprite",
    types: [
      "Fairy"
    ],
    gender: "F",
    baseStats: {
      hp: 95,
      atk: 65,
      def: 80,
      spa: 105,
      spd: 120,
      spe: 55
    },
    abilities: {
      0: "Pixilate",
      1: "Shooting Star",
      H: "Regenerator"
    },
    heightm: 1.4,
    weightkg: 192.2,
    color: "Yellow",
    eggGroups: [
      "Amorphous"
    ]
  },
  tanoomba: {
    num: 178,
    name: "Tanoomba",
    types: [
      "Normal"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 70,
      atk: 75,
      def: 70,
      spa: 75,
      spd: 70,
      spe: 90
    },
    abilities: {
      0: "Speed Boost",
      H: "Imposter"
    },
    heightm: 0.9,
    weightkg: 32.8,
    color: "Brown",
    eggGroups: [
      "Amorphous"
    ]
  },
  splantranha: {
    num: 179,
    name: "Plantranha",
    types: [
      "Fire",
      "Flying"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 85,
      atk: 105,
      def: 80,
      spa: 115,
      spd: 90,
      spe: 95
    },
    abilities: {
      0: "Star Boost",
      H: "Star Flame"
    },
    heightm: 1.9,
    weightkg: 39.2,
    color: "Red",
    eggGroups: [
      "Amorphous"
    ]
  },
  scheepcheep: {
    num: 180,
    name: "Cheep Cheep",
    types: [
      "Electric",
      "Flying"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 110,
      atk: 40,
      def: 50,
      spa: 105,
      spd: 95,
      spe: 135
    },
    abilities: {
      0: "Galvanize",
      H: "Star Shock"
    },
    heightm: 0.9,
    weightkg: 113.4,
    color: "Yellow",
    eggGroups: [
      "Amorphous"
    ]
  },
  lilbrr: {
    num: 181,
    name: "L'il Brr",
    types: [
      "Ice"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 50,
      atk: 15,
      def: 25,
      spa: 60,
      spd: 70,
      spe: 60
    },
    abilities: {
      0: "Levitate",
      H: "Mega Launcher"
    },
    heightm: 0.6,
    weightkg: 54.2,
    color: "Blue",
    eggGroups: [
      "Amorphous"
    ]
  },
  baronbrrr: {
    num: 182,
    name: "Baron Brrr",
    types: [
      "Ice",
      "Steel"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 80,
      atk: 40,
      def: 60,
      spa: 130,
      spd: 120,
      spe: 95
    },
    abilities: {
      0: "Levitate",
      H: "Mega Launcher"
    },
    heightm: 1.8,
    weightkg: 119.6,
    color: "Blue",
    eggGroups: [
      "Amorphous"
    ]
  },
  plessie: {
    num: 183,
    name: "Plessie",
    types: [
      "Fairy",
      "Dragon"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 100,
      atk: 88,
      def: 62,
      spa: 118,
      spd: 80,
      spe: 102
    },
    abilities: {
      0: "Swift Swim",
      1: "Water Absorb",
      H: "OCEANSFAVOR"
    },
    heightm: 3.1,
    weightkg: 216.8,
    color: "Yellow",
    eggGroups: [
      "Amorphous"
    ]
  },
  sbulletbill: {
    num: 184,
    name: "Bullet Bill",
    types: [
      "Poison",
      "Steel"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 95,
      atk: 140,
      def: 85,
      spa: 60,
      spd: 55,
      spe: 95
    },
    abilities: {
      0: "Levitate",
      H: "Technician"
    },
    heightm: 0.8,
    weightkg: 48.7,
    color: "Black",
    eggGroups: [
      "Amorphous"
    ]
  },
  peepa: {
    num: 185,
    name: "Peepa",
    types: [
      "Ghost"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 50,
      atk: 55,
      def: 70,
      spa: 110,
      spd: 105,
      spe: 100
    },
    abilities: {
      0: "Frisk",
      1: "Infiltrator",
      H: "Prankster"
    },
    heightm: 1.2,
    weightkg: 1.1,
    color: "White",
    eggGroups: [
      "Amorphous"
    ]
  },
  parabeetle: {
    num: 186,
    name: "Parabeetle",
    types: [
      "Rock",
      "Flying"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    baseStats: {
      hp: 80,
      atk: 95,
      def: 90,
      spa: 30,
      spd: 100,
      spe: 110
    },
    abilities: {
      0: "Solid Rock",
      1: "Shell Armor",
      H: "Bulletproof"
    },
    heightm: 1.1,
    weightkg: 88.2,
    color: "Red",
    eggGroups: [
      "Monster",
      "Field"
    ]
  },
  queenomb: {
    num: 187,
    name: "Queen-omb",
    types: [
      "Fire"
    ],
    gender: "F",
    baseStats: {
      hp: 70,
      atk: 65,
      def: 90,
      spa: 130,
      spd: 80,
      spe: 95
    },
    abilities: {
      0: "Flash Fire",
      1: "White Smoke",
      H: "Queenly Majesty"
    },
    heightm: 3.3,
    weightkg: 118.2,
    color: "Blue",
    eggGroups: [
      "Amorphous"
    ]
  },
  mommaranha: {
    num: 188,
    name: "Mommaranha",
    types: [
      "Grass"
    ],
    gender: "F",
    baseStats: {
      hp: 85,
      atk: 75,
      def: 65,
      spa: 105,
      spd: 125,
      spe: 70
    },
    abilities: {
      0: "Natural Cure",
      1: "Chlorophyll",
      H: "Poison Heal"
    },
    heightm: 2.6,
    weightkg: 266.8,
    color: "Green",
    eggGroups: [
      "Amorphous"
    ]
  },
  sushi: {
    num: 189,
    name: "Sushi",
    types: [
      "Water"
    ],
    gender: "F",
    baseStats: {
      hp: 75,
      atk: 130,
      def: 55,
      spa: 70,
      spd: 65,
      spe: 115
    },
    abilities: {
      0: "Defiant",
      1: "Rock Head",
      H: "Sheer Force"
    },
    heightm: 2.6,
    weightkg: 266.8,
    color: "Green",
    eggGroups: [
      "Amorphous"
    ]
  },
  sluma: {
    num: 190,
    name: "Luma",
    types: [
      "Dragon",
      "Psychic"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 90,
      atk: 110,
      def: 90,
      spa: 110,
      spd: 90,
      spe: 110
    },
    abilities: {
      0: "Pressure",
      H: "Neuroforce"
    },
    heightm: 1.2,
    weightkg: 72.6,
    color: "Green",
    eggGroups: [
      "Amorphous"
    ]
  },
  sptooie: {
    num: 191,
    name: "Ptooie",
    types: [
      "Grass",
      "Fighting"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 95,
      atk: 125,
      def: 75,
      spa: 25,
      spd: 85,
      spe: 115
    },
    abilities: {
      0: "Steelworker",
      1: "Iron Fist",
      H: "Chlorophyll"
    },
    heightm: 2.6,
    weightkg: 198.2,
    color: "Green",
    eggGroups: [
      "Amorphous"
    ]
  },
  bonybeetle: {
    num: 192,
    name: "Bonybeetle",
    types: [
      "Rock",
      "Ghost"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 75,
      atk: 50,
      def: 120,
      spa: 110,
      spd: 85,
      spe: 40
    },
    abilities: {
      0: "Sturdy",
      1: "Insomnia",
      H: "Sand Stream"
    },
    heightm: 0.9,
    weightkg: 55.6,
    color: "Gray",
    eggGroups: [
      "Amorphous"
    ]
  },
  sandmaargh: {
    num: 193,
    name: "Sandmaargh",
    types: [
      "Ground",
      "Dragon"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 80,
      atk: 125,
      def: 95,
      spa: 95,
      spd: 95,
      spe: 70
    },
    abilities: {
      0: "Sand Stream",
      H: "Dragon's Maw"
    },
    heightm: 6.8,
    weightkg: 882.7,
    color: "Yellow",
    eggGroups: [
      "Amorphous"
    ]
  },
  smagikoopa: {
    num: 194,
    name: "Magikoopa",
    types: [
      "Psychic",
      "Ghost"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 55,
      atk: 80,
      def: 45,
      spa: 125,
      spd: 65,
      spe: 95
    },
    abilities: {
      0: "Filter",
      H: "Star Guard"
    },
    heightm: 1.3,
    weightkg: 62.2,
    color: "Yellow",
    eggGroups: [
      "Amorphous"
    ]
  },
  schainchomp: {
    num: 195,
    name: "Chain Chomp",
    types: [
      "Rock",
      "Ghost"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 60,
      atk: 90,
      def: 140,
      spa: 110,
      spd: 85,
      spe: 65
    },
    abilities: {
      0: "Frisk",
      1: "Rock Head",
      H: "STARSTEAL"
    },
    heightm: 2.4,
    weightkg: 238.4,
    color: "Gray",
    eggGroups: [
      "Amorphous"
    ]
  },
  scaredyrat: {
    num: 196,
    name: "Scaredy Rat",
    types: [
      "Dark"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 81,
      atk: 99,
      def: 68,
      spa: 43,
      spd: 57,
      spe: 122
    },
    abilities: {
      0: "Intimidate",
      1: "Quick Feet",
      H: "Wimp Out"
    },
    heightm: 2.4,
    weightkg: 238.4,
    color: "Gray",
    eggGroups: [
      "Amorphous"
    ]
  },
  runt: {
    num: 197,
    name: "Runt",
    types: [
      "Dragon"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 60,
      atk: 40,
      def: 60,
      spa: 80,
      spd: 70,
      spe: 50
    },
    abilities: {
      0: "Marvel Scale",
      H: "Multiscale"
    },
    heightm: 0.6,
    weightkg: 20.4,
    color: "Blue",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Rex"
    ]
  },
  cobrat: {
    num: 198,
    name: "Cobrat",
    types: [
      "Fire",
      "Poison"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 45,
      atk: 30,
      def: 40,
      spa: 85,
      spd: 65,
      spe: 75
    },
    abilities: {
      0: "Shed Skin",
      1: "Corrosion",
      H: "Regenerator"
    },
    heightm: 0.8,
    weightkg: 19.2,
    color: "Red",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Tryclyde"
    ]
  },
  tryclyde: {
    num: 199,
    name: "Tryclyde",
    types: [
      "Fire",
      "Poison"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 65,
      atk: 55,
      def: 65,
      spa: 130,
      spd: 85,
      spe: 110
    },
    abilities: {
      0: "Shed Skin",
      1: "Corrosion",
      H: "Regenerator"
    },
    heightm: 0.8,
    weightkg: 19.2,
    color: "Red",
    eggGroups: [
      "Amorphous"
    ]
  },
  sluggy: {
    num: 200,
    name: "Sluggy",
    types: [
      "Ghost",
      "Poison"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 100,
      atk: 10,
      def: 30,
      spa: 75,
      spd: 80,
      spe: 10
    },
    abilities: {
      0: "Gooey",
      1: "Liquid Ooze",
      H: "Natural Cure"
    },
    heightm: 0.3,
    weightkg: 0.1,
    color: "White",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Sluggard"
    ]
  },
  sluggard: {
    num: 201,
    name: "Sluggard",
    types: [
      "Ghost",
      "Poison"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 150,
      atk: 35,
      def: 65,
      spa: 100,
      spd: 120,
      spe: 30
    },
    abilities: {
      0: "Gooey",
      1: "Liquid Ooze",
      H: "Natural Cure"
    },
    heightm: 3.2,
    weightkg: 1.9,
    color: "Red",
    eggGroups: [
      "Amorphous"
    ]
  },
  brolder: {
    num: 202,
    name: "Brolder",
    types: [
      "Rock"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 40,
      atk: 30,
      def: 95,
      spa: 70,
      spd: 70,
      spe: 20
    },
    abilities: {
      0: "Solid Rock",
      1: "Bulletproof",
      H: "Magma Armor"
    },
    heightm: 1.8,
    weightkg: 193.2,
    color: "Gray",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Magmolder"
    ]
  },
  magmolder: {
    num: 203,
    name: "Magmolder",
    types: [
      "Rock",
      "Fire"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 85,
      atk: 45,
      def: 155,
      spa: 125,
      spd: 105,
      spe: 35
    },
    abilities: {
      0: "Solid Rock",
      1: "Bulletproof",
      H: "MAGMAENERGY"
    },
    heightm: 3.7,
    weightkg: 617.9,
    color: "Gray",
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Magmolder"
    ]
  },
  mri: {
    num: 204,
    name: "Mr. I",
    types: [
      "Dark",
      "Ghost"
    ],
    gender: "M",
    baseStats: {
      hp: 80,
      atk: 40,
      def: 95,
      spa: 100,
      spd: 125,
      spe: 50
    },
    abilities: {
      0: "Keen Eye",
      1: "Tinted Lens",
      H: "Magic Guard"
    },
    heightm: 2.8,
    weightkg: 80.2,
    color: "White",
    eggGroups: [
      "Amorphous"
    ],
    evos: [],
    otherFormes: [
      "Mr. I-Small"
    ],
    formeOrder: [
      "Mr. I",
      "Mr. I-Small"
    ]
  },
  mr. i-small: {
    num: 204,
    name: "Mr. I-Small",
    types: [
      "Dark",
      "Ghost"
    ],
    gender: "M",
    baseStats: {
      hp: 70,
      atk: 40,
      def: 65,
      spa: 115,
      spd: 90,
      spe: 110
    },
    abilities: {
      0: "Keen Eye",
      1: "Tinted Lens",
      H: "No Guard"
    },
    heightm: 0.8,
    weightkg: 22.4,
    color: "White",
    eggGroups: [
      "Amorphous"
    ],
    evos: []
  },
  uproot: {
    num: 205,
    name: "Uproot",
    types: [
      "Grass",
      "Dark"
    ],
    gender: "M",
    baseStats: {
      hp: 80,
      atk: 95,
      def: 110,
      spa: 40,
      spd: 65,
      spe: 85
    },
    abilities: {
      0: "Disguise",
      H: "Long Reach"
    },
    heightm: 1.4,
    weightkg: 22.3,
    color: "Green",
    eggGroups: [
      "Amorphous"
    ],
    evos: [],
    otherFormes: [
      "Uproot-Potless"
    ],
    formeOrder: [
      "Uproot",
      "Uproot-Potless"
    ]
  },
  uproot-potless: {
    num: 205,
    name: "Uproot-Potless",
    types: [
      "Grass",
      "Dark"
    ],
    gender: "M",
    baseStats: {
      hp: 80,
      atk: 95,
      def: 110,
      spa: 40,
      spd: 65,
      spe: 85
    },
    abilities: {
      0: "Disguise",
      H: "Long Reach"
    },
    heightm: 1.4,
    weightkg: 8.4,
    color: "Green",
    eggGroups: [
      "Amorphous"
    ],
    evos: []
  },
  madpole: {
    num: 206,
    name: "Madpole",
    types: [
      "Water",
      "Ground"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 55,
      atk: 30,
      def: 30,
      spa: 55,
      spd: 55,
      spe: 15
    },
    abilities: {
      0: "Storm Drain",
      1: "Unaware",
      H: "BLUBBERBODY"
    },
    heightm: 0.6,
    weightkg: 7.7,
    color: "Blue",
    eggGroups: [
      "Water2"
    ],
    evos: [
      "Splounder"
    ]
  },
  splounder: {
    num: 207,
    name: "Splounder",
    types: [
      "Water",
      "Ground"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 90,
      atk: 50,
      def: 50,
      spa: 90,
      spd: 90,
      spe: 45
    },
    abilities: {
      0: "Storm Drain",
      1: "Unaware",
      H: "BLUBBERBODY"
    },
    heightm: 3.1,
    weightkg: 44.1,
    color: "Blue",
    eggGroups: [
      "Water2"
    ],
    evos: []
  },
  pidgit: {
    num: 208,
    name: "Pidgit",
    types: [
      "Dark",
      "Flying"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    baseStats: {
      hp: 65,
      atk: 40,
      def: 65,
      spa: 100,
      spd: 95,
      spe: 95
    },
    abilities: {
      0: "Berserk",
      1: "Aerilate",
      H: "Magic Guard"
    },
    heightm: 0.8,
    weightkg: 22.6,
    color: "Black",
    eggGroups: [
      "Flying"
    ]
  },
  boomboom: {
    num: 209,
    name: "Boom Boom",
    types: [
      "Fighting",
      "Dark"
    ],
    gender: "M",
    baseStats: {
      hp: 90,
      atk: 135,
      def: 115,
      spa: 85,
      spd: 75,
      spe: 70
    },
    abilities: {
      0: "Iron Fist",
      H: "Defiant"
    },
    heightm: 1.9,
    weightkg: 79.6,
    color: "Black",
    eggGroups: [
      "Flying"
    ]
  },
  antasman: {
    num: 210,
    name: "Antasman",
    types: [
      "Psychic",
      "Dark"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 60,
      atk: 50,
      def: 60,
      spa: 105,
      spd: 80,
      spe: 80
    },
    abilities: {
      0: "Bad Dreams",
      H: "Magic Guard"
    },
    heightm: 1.8,
    weightkg: 47.7,
    color: "Black",
    eggGroups: [
      "Flying"
    ],
    evos: [
      "Antasmimic"
    ]
  },
  antasmimic: {
    num: 211,
    name: "Antasmimic",
    types: [
      "Psychic",
      "Dark"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 75,
      atk: 95,
      def: 70,
      spa: 135,
      spd: 90,
      spe: 95
    },
    abilities: {
      0: "Bad Dreams",
      H: "SHADOWSTEAL"
    },
    heightm: 3.2,
    weightkg: 103.4,
    color: "Black",
    eggGroups: [
      "Flying"
    ]
  },
  strollinstu: {
    num: 212,
    name: "StrollinStu",
    types: [
      "Normal"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 60,
      atk: 55,
      def: 55,
      spa: 55,
      spd: 55,
      spe: 55
    },
    abilities: {
      0: "Run Away",
      H: "Adaptability"
    },
    heightm: 0.6,
    weightkg: 36.6,
    color: "White",
    eggGroups: [
      "Flying"
    ],
    evos: [
      "SearinStu",
      "ShockinStu",
      "SoakinStu"
    ]
  },
  searinstu: {
    num: 213,
    name: "SearinStu",
    types: [
      "Fire"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 80,
      atk: 55,
      def: 55,
      spa: 125,
      spd: 75,
      spe: 85
    },
    abilities: {
      0: "Flash Fire",
      H: "ETERNALFLAME"
    },
    heightm: 0.8,
    weightkg: 42.5,
    color: "Red",
    eggGroups: [
      "Flying"
    ]
  },
  shockinstu: {
    num: 214,
    name: "ShockinStu",
    types: [
      "Electric"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 80,
      atk: 75,
      def: 60,
      spa: 75,
      spd: 60,
      spe: 125
    },
    abilities: {
      0: "Volt Absorb",
      H: "VOLTAICENERGY"
    },
    heightm: 0.8,
    weightkg: 42.5,
    color: "Yellow",
    eggGroups: [
      "Flying"
    ]
  },
  soakinstu: {
    num: 215,
    name: "SoakinStu",
    types: [
      "Water"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 80,
      atk: 85,
      def: 125,
      spa: 55,
      spd: 55,
      spe: 75
    },
    abilities: {
      0: "Water Absorb",
      H: "Water Bubble"
    },
    heightm: 0.8,
    weightkg: 42.5,
    color: "Blue",
    eggGroups: [
      "Flying"
    ]
  },
  fishinboo: {
    num: 216,
    name: "Fishin Boo",
    types: [
      "Fire",
      "Ghost"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    baseStats: {
      hp: 50,
      atk: 65,
      def: 75,
      spa: 120,
      spd: 90,
      spe: 85
    },
    abilities: {
      0: "Levitate",
      H: "HAUNTEDHOOK"
    },
    heightm: 1.3,
    weightkg: 27.6,
    color: "Blue",
    eggGroups: [
      "Flying"
    ]
  }
}