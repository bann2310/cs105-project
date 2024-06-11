import { useState, useRef, memo, useContext, useCallback } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import Planet from '../../ultils/Planet';
import { Planets } from '~/data';
import { ContextFactor } from '~/components/GlobalStyles/store';

function Moon() {
    const data = useRef(Planets.moon);
    const state = useContext(ContextFactor);
    const texture = new THREE.TextureLoader().load(data.current.img[0]);

    const objectRef = useRef();
    const clock = useRef(new THREE.Clock());
    const revolution = useCallback(() => {
        const elapsedTime = clock.current.getElapsedTime();
        objectRef.current.position.x =
            data.current.position * -Math.cos(2 * Math.PI * data.current.speedRevolution * elapsedTime);
        objectRef.current.position.z =
            data.current.position * Math.sin(2 * Math.PI * data.current.speedRevolution * elapsedTime);
    }, []);

    const handleClick = () => {};

    const handleHover = () => {};

    const handleHoverOut = () => {};

    useFrame(() => {
        revolution();
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
            />
        </group>
    );
}

export default memo(Moon);
