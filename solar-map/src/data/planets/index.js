import PlanetTexture from '~/public/image';

const planets = {
    sun: {
        tittle: 'Sun',
        radius: 16,
        img: [PlanetTexture.sunTexture],
        position: 0,
        speedRotation: 0.004,
        speedRevolution: 0,
        description: `The Sun is the star at the heart of our solar system. Its gravity holds the solar system together, keeping everything – from the biggest planets to the smallest bits of debris – in its orbit.`,
    },
    mercury: {
        tittle: 'Mercury',
        radius: 3.2,
        img: [PlanetTexture.mercuryTexture],
        position: 28,
        speedRotation: 0.004,
        speedRevolution: 0.04,
        description: `Mercury is the closest planet to the Sun, and the smallest planet in our solar system - only slightly larger than Earth's Moon.\n
First Record:	14th Century BC\n
Surface Temperature:	-173 to 427°C\n
Orbit Period:	87.97 Earth days\n
Orbit Distance:	57,909,227 km (039 AU)\n
Notable Moons:	None\n
Known Moons:	None\n
Equatorial Circumference:	15,329 km\n
Polar Diameter:	4,879 km\n
Equatorial Diameter:	4,879 km\n
Mass:	330,104,000,000,000 billion kg (0.055 x Earth)
`,
    },
    venus: {
        tittle: 'Venus',
        radius: 5.8,
        img: [PlanetTexture.venusTexture],
        position: 44,
        speedRotation: 0.002,
        speedRevolution: 0.015,
        description: `Venus is the second planet from the Sun, and the sixth largest planet. It’s the hottest planet in our solar system.
First Record:	14th Century BC
Surface Temperature:	462° C
Orbit Period:	224.70 Earth days
Orbit Distance:	108,209,475 km (0.73 AU)
Notable Moons:	None
Known Moons:	None
Equatorial Circumference:	38,025 km
Polar Diameter:	12,104 km
Equatorial Diameter:	12,104 km
Mass:	4,867,320,000,000,000 billion kg (0.815 x Earth)
`,
    },
    earth: {
        tittle: 'Earth',
        radius: 6,
        img: [PlanetTexture.earthTexture, PlanetTexture.earthNightTexture],
        position: 62,
        speedRotation: 0.003,
        speedRevolution: 0.01,
        description: `Earth is the third planet from the Sun and the fifth largest planet in the Solar System with the highest density. It is currently the only known location where life is present.
Surface Temperature:	-88 to 58° C
Orbit Period:	365.26 Earth days
Orbit Distance:	149,598,262 km (1 AU)
Notable Moons:	The Moon
Known Moons:	1
Equatorial Circumference:	40,030 km
Polar Diameter:	12,714 km
Equatorial Diameter:	12,756 km
Mass:	5,972,190,000,000,000 billion kg
`,
    },
    moon: {
        tittle: 'Moon',
        radius: 2,
        img: [PlanetTexture.moonTexture],
        position: 10,
        speedRotation: 0,
        speedRevolution: 0.1,
    },
    mars: {
        tittle: 'Mars',
        radius: 4,
        img: [PlanetTexture.marsTexture],
        position: 78,
        speedRotation: 0.004,
        speedRevolution: 0.008,
        description: `Mars is the fourth planet from the Sun, and the seventh largest. It’s the only planet we know of inhabited entirely by robots.
First Record:	2nd Millenium BC
Surface Temperature:	-87 to -5 °C
Orbit Period:	686.98 Earth days (1.88 Earth years)
Orbit Distance:	227,943,824 km (1.38 AU)
Notable Moons:	Phobos & Deimos
Known Moons:	2
Equatorial Circumference:	21,297 km
Polar Diameter:	6,755 km
Equatorial Diameter:	6,805 km
Mass:	641,693,000,000,000 billion kg (0.107 x Earth)

`,
    },
    jupiter: {
        tittle: 'Jupiter',
        radius: 12,
        img: [PlanetTexture.jupiterTexture],
        position: 100,
        speedRotation: 0.005,
        speedRevolution: 0.002,
        description: `Jupiter is the fifth planet from the Sun, and the largest in the solar system – more than twice as massive as the other planets combined.
First Record:	7th or 8th Century BC
Surface Temperature:	-108°C
Orbit Period:	4,332.82 Earth days (11.86 Earth years)
Orbit Distance:	778,340,821 km (5.20 AU)
Known Rings:	4
Notable Moons:	Io, Europa, Ganymede, & Callisto
Known Moons:	67
Equatorial Circumference:	439,264 km
Polar Diameter:	133,709 km
Equatorial Diameter:	142,984 km
Mass:	1,898,130,000,000,000,000 billion kg (317.83 x Earth)
`,
    },
    saturn: {
        tittle: 'Saturn',
        radius: 10,
        img: [PlanetTexture.saturnTexture],
        position: 138,
        speedRotation: 0.038,
        speedRevolution: 0.0009,
        ring: { innerRadius: 10, outerRadius: 20, texture: PlanetTexture.saturnRingTexture },
        description: `Saturn is the sixth planet from the Sun, and the second largest in the solar system. It’s surrounded by beautiful rings.
First Record:	8th Century BC
Surface Temperature:	-139 °C
Orbit Period:	10,755.70 Earth days (29.45 Earth years)
Orbit Distance:	1,426,666,422 km (9.58 AU)
Known Rings:	30+ (7 Groups)
Notable Moons:	Titan, Rhea & Enceladus
Known Moons:	62
Equatorial Circumference:	365,882 km
Polar Diameter:	108,728 km
Equatorial Diameter:	120,536 km
Mass:	568,319,000,000,000,000 billion kg (95.16 x Earth)
`,
    },
    uranus: {
        tittle: 'Uranus',
        radius: 7,
        img: [PlanetTexture.uranusTexture],
        position: 176,
        speedRotation: 0.03,
        speedRevolution: 0.0004,
        ring: { innerRadius: 7, outerRadius: 12, texture: PlanetTexture.uranusRingTexture },
        description: `Uranus is the seventh planet from the Sun, and the third largest planet in our solar system. It appears to spin sideways.
First Record:	March 13th 1781
Surface Temperature:	-197 °C
Orbit Period:	30,687.15 Earth days (84.02 Earth years)
Orbit Distance:	2,870,658,186 km (19.22 AU)
Known Rings:	13
Notable Moons:	Oberon, Titania, Miranda, Ariel & Umbriel
Known Moons:	27
Equatorial Circumference:	159,354 km
Polar Diameter:	49,946 km
Equatorial Diameter:	51,118 km
Mass:	86,810,300,000,000,000 billion kg (14.536 x Earth)
`,
    },
    neptune: {
        tittle: 'Neptune',
        radius: 7,
        img: [PlanetTexture.neptuneTexture],
        position: 200,
        speedRotation: 0.032,
        speedRevolution: 0.0001,
        description: `First Record:	September 23rd 1846
Surface Temperature:	-201 °C
Orbit Period:	60,190.03 Earth days (164.79 Earth years)
Orbit Distance:	4,498,396,441 km (30.10 AU)
Known Rings:	5
Notable Moons:	Triton
Known Moons:	14
Equatorial Circumference:	155,600 km
Polar Diameter:	48,682 km
Equatorial Diameter:	49,528 km
Mass:	102,410,000,000,000,000 billion kg (17.15x Earth)
`,
    },
    pluto: {
        tittle: 'Pluto',
        radius: 2.8,
        img: [PlanetTexture.plutoTexture],
        position: 216,
        speedRotation: 0.008,
        speedRevolution: 0.00007,
        description: `Pluto is the largest known dwarf planet in the Solar System, discovered in 1930. It was thought to be the 9th planet of our system for 75 years until the discovery of Eris and other similar objects that led to its demotion from a planet to a dwarf planet in 2006.
Discovery Date:	February 18th 1930
Surface Temperature:	-229°C
Orbit Period:	247.92065 Earth years
Orbit Distance:	5,874,000,000 km (39.26 AU)
Notable Moons:	Charon, Nix, Hydra, Kerberos and Styx
Known Moons:	5
Diameter:	2,368 km (+- 20km)
Mass:	13,050,000,000,000 billion kg (0.00218 x Earth)
`,
    },
};

export default planets;
