import { useState, useRef, memo, useContext, useCallback } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import Planet from '../../ultils/Planet';
import { Planets } from '~/data';
import { ContextFactor } from '~/components/GlobalStyles/store';
import Moon from '../Moon';

function Earth() {
    const data = useRef(Planets.earth);
    const state = useContext(ContextFactor);
    const texture = new THREE.TextureLoader().load(data.current.img[0]);
    const textureEmisive = new THREE.TextureLoader().load(data.current.img[1]);

    const [hover, setHover] = useState(false);

    const [click, setClick] = useState(false);

    const objectRef = useRef();
    const clock = useRef(new THREE.Clock());
    const revolution = useCallback(() => {
        const elapsedTime = clock.current.getElapsedTime();
        objectRef.current.position.x =
            data.current.position * -Math.cos(2 * Math.PI * data.current.speedRevolution * elapsedTime);
        objectRef.current.position.z =
            data.current.position * Math.sin(2 * Math.PI * data.current.speedRevolution * elapsedTime);
    }, []);
    const handleClick = () => {
        setClick((prev) => !prev);
    };

    const { camera } = useThree();
    const followPlanet = () => {
        const elapsedTime = clock.current.getElapsedTime();
        const objectPosition = objectRef.current.position;
        const cameraPosition = new THREE.Vector3(
            data.current.position * -Math.cos(2 * Math.PI * data.current.speedRevolution * elapsedTime + Math.PI / 6),
            objectPosition.y,
            data.current.position * Math.sin(2 * Math.PI * data.current.speedRevolution * elapsedTime + Math.PI / 6),
        );
        const cameraLootAt = new THREE.Vector3(objectPosition.x, objectPosition.y, objectPosition.z);
        camera.lookAt(cameraLootAt);
        camera.position.copy(cameraPosition);
    };

    const handleHover = () => {
        setHover((prev) => {
            return !prev;
        });
    };

    const handleHoverOut = () => {
        setHover((prev) => {
            return !prev;
        });
    };

    useFrame(() => {
        revolution();
        if (click) {
            followPlanet();
        }
    });

    return (
        <group ref={objectRef} position={[data.current.position, 0, 0]}>
            <Planet
                radius={data.current.radius * state.factorRadius}
                speedRotation={data.current.speedRotation * state.factorRotation}
                texture={[texture]}
                tittle={data.current.tittle}
                onPointerEnter={handleHover}
                onPointerOut={handleHoverOut}
                onClick={handleClick}
                emissive={{ emissiveMap: textureEmisive, emissiveIntensity: 1, emissive: '#ffffff' }}
            />
            <Moon />
        </group>
    );
}

export default memo(Earth);
