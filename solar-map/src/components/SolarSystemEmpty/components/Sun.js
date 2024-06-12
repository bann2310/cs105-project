import { useContext, useRef } from 'react';
import * as THREE from 'three';
import { Planets, factorDistancefpp, factorRadiusfpp, factorRevolutionfpp, factorRotationfpp } from '~/data';
import Planet from '../ultils/Planet';
import { useFrame, useThree } from '@react-three/fiber';
import { StatusContext } from '~/pages/Adventurefpp/provider';

function Sun() {
    const data = useRef(Planets.sun);
    const texture = new THREE.TextureLoader().load(data.current.img);

    const objectRef = useRef();

    const [, setStatus] = useContext(StatusContext);
    const { camera } = useThree();
    useFrame(() => {
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
            />
        </group>
    );
}

export default Sun;
