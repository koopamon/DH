export const FormatsData: {[k: string]: SpeciesFormatsData} = {
	//Custom tiers are "RDex Uber", "RDex OU", "RDex UUBL", and "RDex UU" (and "RDex LC" and "RDex NFE")
	
/*
	aerodactyl: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	ekans: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	arbok: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	growlithe: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	arcanine: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	archen: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	archeops: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	articunogalar: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	shuppet: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	banette: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	oddish: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	gloom: {
		tier: "RDex NFE",
		doublesTier: "RDex NFE",
	},
	bellossom: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	vileplume: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	bidoof: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	bibarel: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	yamper: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	boltund: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	charmander: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	charmeleon: {
		tier: "RDex NFE",
		doublesTier: "RDex NFE",
	},
	charizard: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	chingling: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	chimecho: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	clauncher: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	clawitzer: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	rolycoly: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	carkol: {
		tier: "RDex NFE",
		doublesTier: "RDex NFE",
	},
	coalossal: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	cufant: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	copperajah: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	lileep: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	cradily: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	corsolagalar: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	cursola: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	dedenne: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	skrelp: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	dragalge: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	drampa: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	chewtle: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	drednaw: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	druddigon: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	diglett: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	dugtrio: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	eevee: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	vaporeon: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	jolteon: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	flareon: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	espeon: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	umbreon: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	leafeon: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	glaceon: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	sylveon: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	drilbur: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	excadrill: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	totodile: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	croconaw: {
		tier: "RDex NFE",
		doublesTier: "RDex NFE",
	},
	feraligatr: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	flabebe: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	floette: {
		tier: "RDex NFE",
		doublesTier: "RDex NFE",
	},
	florges: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	snorunt: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	glalie: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	froslass: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	snom: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	frosmoth: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	girafarig: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	golett: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	golurk: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	impidimp: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	morgrem: {
		tier: "RDex NFE",
		doublesTier: "RDex NFE",
	},
	grimmsnarl: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	groudon: {
		tier: "RDex Uber",
		doublesTier: "RDex DOU",
	},
	hippopotas: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	hippowdon: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	tyrogue: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	hitmonlee: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	hitmonchan: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	hitmontop: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	houndour: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	houndoom: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	indeedee: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	indeedeef: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	chimchar: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	monferno: {
		tier: "RDex NFE",
		doublesTier: "RDex NFE",
	},
	infernape: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	sobble: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	drizzile: {
		tier: "RDex NFE",
		doublesTier: "RDex NFE",
	},
	inteleon: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	kangaskhan: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	kangaskhanmega: {
		tier: "RDex Uber",
		doublesTier: "RDex DOU",
	},
	klefki: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	komala: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	kyurem: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	kyuremwhite: {
		tier: "RDex Uber",
		doublesTier: "RDex DOU",
	},
	landorus: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	landorustherian: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	latias: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	zigzagoon: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	linoone: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	luvdisc: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	inkay: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	malamar: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	electrike: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	manectric: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	moltres: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	moltresgalar: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	mimejr: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	mrmime: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	zigzagoongalar: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	linoonegalar: {
		tier: "RDex NFE",
		doublesTier: "RDex NFE",
	},
	obstagoon: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	remoraid: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	octillery: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	omanyte: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	omastar: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	sandygast: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	palossand: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	nosepass: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	probopass: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	pyukumuku: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	regice: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	relicanth: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	reshiram: {
		tier: "RDex Uber",
		doublesTier: "RDex DOU",
	},
	yamaskgalar: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	runerigus: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	salandit: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	salazzle: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	sandshrewalola: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	sandslashalola: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	sawk: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	farfetchdgalar: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	sirfetchd: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	spectrier: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	spinda: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	stakataka: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	lillipup: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	herdier: {
		tier: "RDex NFE",
		doublesTier: "RDex NFE",
	},
	stoutland: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	stunfiskgalar: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	taillow: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	swellow: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	tapubulu: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	tapufini: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	tauros: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	togedemaru: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	tyrunt: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	tyrantrum: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	bulbasaur: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	ivysaur: {
		tier: "RDex NFE",
		doublesTier: "RDex NFE",
	},
	venusaur: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	volbeat: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	cottonee: {
		tier: "RDex LC",
		doublesTier: "RDex LC",
	},
	whimsicott: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	zarude: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
*/
	tapubulu: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	tapufini: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	absol: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	absolmega: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	appletun: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	applin: {
		tier: "RDex LC",
		doublesTier: "RDex DOU",
	},
	articuno: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	aurorus: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	amaura: {
		tier: "RDex LC",
		doublesTier: "RDex DOU",
	},
	basculin: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	basculinbluestriped: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	beartic: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	cubchoo: {
		tier: "RDex LC",
		doublesTier: "RDex DOU",
	},
	bisharp: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	pawniard: {
		tier: "RDex LC",
		doublesTier: "RDex DOU",
	},
	calyrex: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	camerupt: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	cameruptmega: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	numel: {
		tier: "RDex LC",
		doublesTier: "RDex DOU",
	},
	celesteela: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	cloyster: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	shellder: {
		tier: "RDex LC",
		doublesTier: "RDex DOU",
	},
	crawdaunt: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	corphish: {
		tier: "RDex LC",
		doublesTier: "RDex DOU",
	},
	cursola: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	corsolagalar: {
		tier: "RDex LC",
		doublesTier: "RDex DOU",
	},
	dedenne: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	delibird: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	eelektross: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	eelektrik: {
		tier: "RDex NFE",
		doublesTier: "RDex DOU",
	},
	tynamo: {
		tier: "RDex LC",
		doublesTier: "RDex DOU",
	},
	espeon: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	eevee: {
		tier: "RDex LC",
		doublesTier: "RDex DOU",
	},
	flapple: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	flareon: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	flygon: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	vibrava: {
		tier: "RDex NFE",
		doublesTier: "RDex DOU",
	},
	trapinch: {
		tier: "RDex LC",
		doublesTier: "RDex DOU",
	},
	galvantula: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	joltik: {
		tier: "RDex LC",
		doublesTier: "RDex DOU",
	},
	girafarig: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	glaceon: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	goodra: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	sliggoo: {
		tier: "RDex NFE",
		doublesTier: "RDex DOU",
	},
	goomy: {
		tier: "RDex LC",
		doublesTier: "RDex DOU",
	},
	gourgeist: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	gourgeistsmall: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	gourgeistsuper: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	gourgeistlarge: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	pumpkaboo: {
		tier: "RDex LC",
		doublesTier: "RDex DOU",
	},
	pumpkaboosmall: {
		tier: "RDex LC",
		doublesTier: "RDex DOU",
	},
	pumpkaboosuper: {
		tier: "RDex LC",
		doublesTier: "RDex DOU",
	},
	pumpkaboolarge: {
		tier: "RDex LC",
		doublesTier: "RDex DOU",
	},
	grimmsnarl: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	morgrem: {
		tier: "RDex NFE",
		doublesTier: "RDex DOU",
	},
	impidimp: {
		tier: "RDex LC",
		doublesTier: "RDex DOU",
	},
	guzzlord: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	heliolisk: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	helioptile: {
		tier: "RDex LC",
		doublesTier: "RDex DOU",
	},
	hitmonchan: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	hitmonlee: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	hitmontop: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	tyrogue: {
		tier: "RDex LC",
		doublesTier: "RDex DOU",
	},
	incineroar: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	torracat: {
		tier: "RDex NFE",
		doublesTier: "RDex DOU",
	},
	litten: {
		tier: "RDex LC",
		doublesTier: "RDex DOU",
	},
	indeedee: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	indeedeef: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	jolteon: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	kangaskhan: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	kangaskhanmega: {
		tier: "RDex Uber",
		doublesTier: "RDex Uber",
	},
	kartana: {
		tier: "RDex Uber",
		doublesTier: "RDex Uber",
	},
	kommoo: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	jangmoo: {
		tier: "RDex LC",
		doublesTier: "RDex DOU",
	},
	hakamoo: {
		tier: "RDex NFE",
		doublesTier: "RDex DOU",
	},
	kyurem: {
		tier: "RDex Uber",
		doublesTier: "RDex Uber",
	},
	lanturn: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	chinchou: {
		tier: "RDex LC",
		doublesTier: "RDex DOU",
	},
	leafeon: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	leavanny: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	swadloon: {
		tier: "RDex NFE",
		doublesTier: "RDex DOU",
	},
	sewaddle: {
		tier: "RDex LC",
		doublesTier: "RDex DOU",
	},
	ludicolo: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	lombre: {
		tier: "RDex NFE",
		doublesTier: "RDex DOU",
	},
	lotad: {
		tier: "RDex LC",
		doublesTier: "RDex DOU",
	},
	lunatone: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	luvdisc: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	machamp: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	machoke: {
		tier: "RDex NFE",
		doublesTier: "RDex DOU",
	},
	machop: {
		tier: "RDex LC",
		doublesTier: "RDex DOU",
	},
	mandibuzz: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	vullaby: {
		tier: "RDex LC",
		doublesTier: "RDex DOU",
	},
	medicham: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	medichammega: {
		tier: "RDex Uber",
		doublesTier: "RDex Uber",
	},
	meditite: {
		tier: "RDex LC",
		doublesTier: "RDex DOU",
	},
	nihilego: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	palossand: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	sandygast: {
		tier: "RDex LC",
		doublesTier: "RDex DOU",
	},
	pidgeotmega: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	pidgeot: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	pidgeotto: {
		tier: "RDex NFE",
		doublesTier: "RDex DOU",
	},
	pidgey: {
		tier: "RDex LC",
		doublesTier: "RDex DOU",
	},
	probopass: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	nosepass: {
		tier: "RDex LC",
		doublesTier: "RDex DOU",
	},
	pyroar: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	litleo: {
		tier: "RDex LC",
		doublesTier: "RDex DOU",
	},
	sawk: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	sceptilemega: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	sceptile: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	grovyle: {
		tier: "RDex NFE",
		doublesTier: "RDex DOU",
	},
	treecko: {
		tier: "RDex LC",
		doublesTier: "RDex DOU",
	},
	scolipede: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	whirlipede: {
		tier: "RDex NFE",
		doublesTier: "RDex DOU",
	},
	venipede: {
		tier: "RDex LC",
		doublesTier: "RDex DOU",
	},
	shiftry: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	nuzleaf: {
		tier: "RDex NFE",
		doublesTier: "RDex DOU",
	},
	seedot: {
		tier: "RDex LC",
		doublesTier: "RDex DOU",
	},
	simisage: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	pansage: {
		tier: "RDex LC",
		doublesTier: "RDex DOU",
	},
	slowbro: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	slowbromega: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	slowking: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	slowpoke: {
		tier: "RDex LC",
		doublesTier: "RDex DOU",
	},
	sylveon: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	tauros: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	typhlosion: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	quilava: {
		tier: "RDex NFE",
		doublesTier: "RDex DOU",
	},
	cyndaquil: {
		tier: "RDex LC",
		doublesTier: "RDex DOU",
	},
	umbreon: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	ursaring: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	teddiursa: {
		tier: "RDex LC",
		doublesTier: "RDex DOU",
	},
	vaporeon: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	whiscash: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	barboach: {
		tier: "RDex LC",
		doublesTier: "RDex DOU",
	},
	wishiwashi: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	zebstrika: {
		tier: "RDex OU",
		doublesTier: "RDex DOU",
	},
	blitzle: {
		tier: "RDex LC",
		doublesTier: "RDex DOU",
	},
};
