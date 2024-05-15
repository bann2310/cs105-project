import PlantTexture from '~/public/image';

const plants = {
    sun: {
        radius: 16,
        img: PlantTexture.sunTexture,
        position: 0,
        speedRotation: 0.004,
        speedRevolution: 0,
    },
    mercury: {
        radius: 3.2,
        img: PlantTexture.mercuryTexture,
        position: 28,
        speedRotation: 0.004,
        speedRevolution: 0.04,
    },
    venus: {
        radius: 5.8,
        img: PlantTexture.venusTexture,
        position: 44,
        speedRotation: 0.002,
        speedRevolution: 0.015,
    },
    earth: {
        radius: 6,
        img: PlantTexture.earthTexture,
        position: 62,
        speedRotation: 0.02,
        speedRevolution: 0.01,
    },
    mars: {
        radius: 4,
        img: PlantTexture.marsTexture,
        position: 78,
        speedRotation: 0.018,
        speedRevolution: 0.008,
    },
    jupiter: {
        radius: 12,
        img: PlantTexture.jupiterTexture,
        position: 100,
        speedRotation: 0.04,
        speedRevolution: 0.002,
    },
    saturn: {
        radius: 10,
        img: PlantTexture.saturnTexture,
        position: 138,
        speedRotation: 0.038,
        speedRevolution: 0.0009,
        ring: { innerRadius: 10, outerRadius: 20, texture: PlantTexture.saturnRingTexture },
    },
    uranus: {
        radius: 7,
        img: PlantTexture.saturnTexture,
        position: 176,
        speedRotation: 0.03,
        speedRevolution: 0.0004,
        ring: { innerRadius: 7, outerRadius: 12, texture: PlantTexture.uranusRingTexture },
    },
    neptune: {
        radius: 7,
        img: PlantTexture.neptuneTexture,
        position: 200,
        speedRotation: 0.032,
        speedRevolution: 0.0001,
    },
    pluto: {
        radius: 2.8,
        img: PlantTexture.plutoTexture,
        position: 216,
        speedRotation: 0.008,
        speedRevolution: 0.00007,
    },
};

export default plants;
