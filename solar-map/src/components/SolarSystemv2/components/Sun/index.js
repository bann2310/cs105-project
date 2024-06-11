import { useState, useRef, memo, useContext, useCallback, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import * as TWEEN from '@tweenjs/tween.js';
import Planet from '../../ultils/Planet';
import { Planets } from '~/data';
import { ContextFactor } from '~/components/GlobalStyles/store';

function Sun() {
    const data = useRef(Planets.sun);
    const state = useContext(ContextFactor);
    const texture = new THREE.TextureLoader().load(data.current.img);

    const [hover, setHover] = useState(false);
    const [click, setClick] = useState(false);

    const [cameraPosition, setCameraPosition] = useState(new THREE.Vector3(-90, 60, 140));

    const [cameraTarget, setCameraTarget] = useState(new THREE.Vector3(0, 0, 0));

    const handleClick = () => {
        setClick((prev) => !prev);
    };

    const { camera } = useThree();
    const followPlanet = () => {
        if (click) {
            const cameraTargetPositio = new THREE.Vector3(-40, 40, 40);

            new TWEEN.Tween(cameraPosition)
                .to(cameraTargetPositio, 10)
                .onUpdate(() => {
                    // console.log(cameraPosition);
                    setCameraPosition(cameraPosition);
                })
                .easing(TWEEN.Easing.Quadratic.Out)
                .start();

            // camera.lookAt(cameraTarget);
            camera.position.copy(cameraPosition);
            // camera.updateProjectionMatrix();
        } else {
            const cameraTargetPositio = new THREE.Vector3(-90, 60, 140);

            new TWEEN.Tween(cameraPosition)
                .to(cameraTargetPositio, 1000)
                .onUpdate(() => {
                    // console.log(cameraPosition);
                    setCameraPosition(cameraPosition);
                })
                .easing(TWEEN.Easing.Quadratic.Out)
                .start();
        }
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
        followPlanet();
        TWEEN.update();
    });

    return (
        <group>
            <Planet
                radius={data.current.radius * state.factorRadius}
                speedRotation={data.current.speedRotation * state.factorRotation}
                texture={[texture]}
                tittle={data.current.tittle}
                emissiveIntensity={1}
                onPointerEnter={handleHover}
                onPointerOut={handleHoverOut}
                onClick={handleClick}
            />
        </group>
    );
}

export default memo(Sun);
