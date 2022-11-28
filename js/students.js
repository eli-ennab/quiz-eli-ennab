const students = [
	{
		id: 1,
		name: "Abdi Ali",
		image: "assets/images/students/abdi_ali.jpg",
	},
	{
		id: 2,
		name: "Albin Lindeborg",
		image: "assets/images/students/albin_lindeborg.jpg",
	},
	{
		id: 3,
		name: "Alexander Olsson",
		image: "assets/images/students/alexander_olsson.jpg",
	},
	{
		id: 4,
		name: "André Lang",
		image: "assets/images/students/andre_lang.jpg",
	},
	{
		id: 5,
		name: "Andreas Gustafsson",
		image: "assets/images/students/andreas_gustafsson.jpg",
	},
	{
		id: 6,
		name: "Andreas Xu",
		image: "assets/images/students/andreas_xu.jpg",
	},
	{
		id: 7,
		name: "Arden Haldorson",
		image: "assets/images/students/arden_haldorson.jpg",
	},
	{
		id: 8,
		name: "Asenakew Zegeye",
		image: "assets/images/students/asenakew_zegeye.jpg",
	},
	{
		id: 9,
		name: "Astrid Lindfors",
		image: "assets/images/students/astrid_lindfors.jpg",
	},
	{
		id: 10,
		name: "Bob Oskar Kindgren",
		image: "assets/images/students/bob_oskar_kindgren.jpg",
	},
	{
		id: 11,
		name: "Christine Nilsson",
		image: "assets/images/students/christine_nilsson.jpg",
	},
	{
		id: 12,
		name: "Daniella Dam",
		image: "assets/images/students/daniella_dam.jpg",
	},
	{
		id: 13,
		name: "Eli Ennab",
		image: "assets/images/students/eli_ennab.jpg",
	},
	{
		id: 14,
		name: "Felicia Gartz Levin",
		image: "assets/images/students/felicia_gartz_levin.jpg",
	},
	{
		id: 15,
		name: "Hanna Björling",
		image: "assets/images/students/hanna_bjorling.jpg",
	},
	{
		id: 16,
		name: "Harald Henriksson",
		image: "assets/images/students/harald_henriksson.jpg",
	},
	{
		id: 17,
		name: "Helga Börjesson",
		image: "assets/images/students/helga_borjesson.jpg",
	},
	{
		id: 18,
		name: "Isak Westerberg",
		image: "assets/images/students/isak_westerberg.jpg",
	},
	{
		id: 19,
		name: "Jimmy Nguyen",
		image: "assets/images/students/jimmy_nguyen.jpg",
	},
	{
		id: 20,
		name: "Joakim Ottosson",
		image: "assets/images/students/joakim_ottosson.jpg",
	},
	{
		id: 21,
		name: "Jonas Nilsson",
		image: "assets/images/students/jonas_nilsson.jpg",
	},
	{
		id: 22,
		name: "Kristopher Gray",
		image: "assets/images/students/kristopher_gray.jpg",
	},
	{
		id: 23,
		name: "Linnea Saxvik",
		image: "assets/images/students/linnea_saxvik.jpg",
	},
	{
		id: 24,
		name: "Linus Ohlander",
		image: "assets/images/students/linus_ohlander.jpg",
	},
	{
		id: 25,
		name: "Louise Keinström",
		image: "assets/images/students/louise_keinstrom.jpg",
	},
	{
		id: 26,
		name: "Louise Murray",
		image: "assets/images/students/louise_murray.jpg",
	},
	{
		id: 27,
		name: "Ludvig Lundberg",
		image: "assets/images/students/ludvig_lundberg.jpg",
	},
	{
		id: 28,
		name: "Malin Kyttä",
		image: "assets/images/students/malin_kytta.jpg",
	},
	{
		id: 29,
		name: "Måns Edenfalk",
		image: "assets/images/students/mans_edenfalk.jpg",
	},
	{
		id: 30,
		name: "Marcus Birgersson",
		image: "assets/images/students/marcus_birgersson.jpg",
	},
	{
		id: 31,
		name: "Michelle Klemendz",
		image: "assets/images/students/michelle_klemendz.jpg",
	},
	{
		id: 32,
		name: "Mohammad Mzien",
		image: "assets/images/students/mohammad_mzien.jpg",
	},
	{
		id: 33,
		name: "Nastassia Martin",
		image: "assets/images/students/nastassia_martin.jpg",
	},
	{
		id: 34,
		name: "Patrik He",
		image: "assets/images/students/patrik_he.jpg",
	},
	{
		id: 35,
		name: "Philippe Le Gall",
		image: "assets/images/students/philippe_legall.jpg",
	},
	{
		id: 36,
		name: "Sandra Vidalin",
		image: "assets/images/students/sandra_vidalin.jpg",
	},
	{
		id: 37,
		name: "Simon Bengtsson",
		image: "assets/images/students/simon_bengtsson.jpg",
	},
	{
		id: 38,
		name: "Sofia Travnicek Mattiasson",
		image: "assets/images/students/sofia_travnicek_mattiasson.jpg",
	},
	{
		id: 39,
		name: "Sonja Svidén",
		image: "assets/images/students/sonja_sviden.jpg",
	},
	{
		id: 40,
		name: "Tanja Söderholm",
		image: "assets/images/students/tanja_soderholm.jpg",
	},
	{
		id: 41,
		name: "Viktor Pettersson",
		image: "assets/images/students/viktor_pettersson.jpg",
	},
];

const missing_students = [
	{
		name: "Amer El-Jechi",
		image: null,
	},
	{
		name: "Amin Hassani",
		image: null,
	},
	{
		name: "Gunnar Omander",
		image: null,
	},
	{
		name: "Maryia Tamasheuskaya",
		image: null,
	},
];
