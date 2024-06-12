import { useRef, useCallback, useContext } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { Planets, factorDistancefpp, factorRadiusfpp, factorRevolutionfpp, factorRotationfpp } from '~/data';
import Planet from '../ultils/Planet';
import { ControlContext, StatusContext } from '~/pages/Adventurefpp/provider';

function Jupiter() {
    const data = useRef(Planets.jupiter);
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
        <group
            ref={objectRef}
            position={[
                factorDistancefpp * data.current.position,
                0,
                -Math.floor(factorDistancefpp * data.current.position * Math.random()),
            ]}
        >
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

export default Jupiter;
