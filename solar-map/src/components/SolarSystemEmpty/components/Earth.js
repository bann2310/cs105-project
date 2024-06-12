import { useRef, useCallback, useContext, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { StatusContext } from '~/pages/Adventurefpp/provider';
import { Planets, factorDistancefpp, factorRadiusfpp, factorRevolutionfpp, factorRotationfpp } from '~/data';
import Planet from '../ultils/Planet';
import Moon from './Moon';

function Earth() {
    const data = useRef(Planets.earth);
    const texture = new THREE.TextureLoader().load(data.current.img[[0]]);
    const textureEmissive = new THREE.TextureLoader().load(data.current.img[[1]]);

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

    const [, setStatus] = useContext(StatusContext);
    const { camera } = useThree();
    useFrame(() => {
        revolution();
        const objectPosition = objectRef.current.position;
        const cameraPosition = camera.position;
        const d = Math.sqrt(
            Math.pow(objectPosition.x - cameraPosition.x, 2) +
                Math.pow(objectPosition.y - cameraPosition.y, 2) +
                Math.pow(objectPosition.z - cameraPosition.z, 2),
        );
        if (d < data.current.radius + 3) {
            setStatus(true);
        }
    });

    return (
        <group ref={objectRef}>
            <Planet
                radius={factorRadiusfpp * data.current.radius}
                speedRotation={factorRotationfpp * data.current.speedRotation}
                texture={[texture]}
                tittle={data.current.tittle}
                emissive={{
                    emissiveMap: textureEmissive,
                    emissiveIntensity: 0.25,
                    emissive: '#ffffff',
                }}
                receiveShadow={true}
                castShadow={true}
            />
            <Moon />
        </group>
    );
}

export default Earth;
