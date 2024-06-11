import { useContext, useRef } from 'react';
import * as THREE from 'three';
import { Planets, factorDistancefpp, factorRadiusfpp, factorRevolutionfpp, factorRotationfpp } from '~/data';
import Planet from '../ultils/Planet';

function Sun() {
    const data = useRef(Planets.sun);
    const texture = new THREE.TextureLoader().load(data.current.img);

    const objectRef = useRef();

    return (
        <group ref={objectRef}>
            <Planet
                radius={factorRadiusfpp * data.current.radius}
                speedRotation={factorRotationfpp * data.current.speedRotation}
                texture={[texture]}
                tittle={data.current.tittle}
            />
        </group>
    );
}

export default Sun;
