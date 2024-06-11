import { useRef, useCallback } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Planets, factorDistancefpp, factorRadiusfpp, factorRevolutionfpp, factorRotationfpp } from '~/data';
import Planet from '../ultils/Planet';

function Moon() {
    const data = useRef(Planets.moon);
    const texture = new THREE.TextureLoader().load(data.current.img);

    const objectRef = useRef();
    const clock = useRef(new THREE.Clock());
    const phi = useRef(Math.floor(10 * Math.random()));
    const revolution = useCallback(() => {
        const elapsedTime = clock.current.getElapsedTime();
        objectRef.current.position.x =
            -factorDistancefpp *
            data.current.position *
            Math.cos(factorRevolutionfpp * 2 * Math.PI * elapsedTime + phi.current);
        objectRef.current.position.z =
            factorDistancefpp *
            data.current.position *
            Math.sin(factorRevolutionfpp * 2 * Math.PI * elapsedTime + phi.current);
    }, []);

    useFrame(() => {
        revolution();
    });

    return (
        <group ref={objectRef} position={[factorDistancefpp * data.current.position, 0, 0]}>
            <Planet
                radius={factorRadiusfpp * data.current.radius}
                speedRotation={factorRotationfpp * data.current.speedRotation}
                texture={[texture]}
                tittle={data.current.tittle}
                receiveShadow={true}
                castShadow={true}
            />
        </group>
    );
}

export default Moon;
