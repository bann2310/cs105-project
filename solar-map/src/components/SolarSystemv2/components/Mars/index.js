import { useState, useRef, memo, useContext, useCallback, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import Planet from '../../ultils/Planet';
import { Planets } from '~/data';
import { ContextFactor } from '~/components/GlobalStyles/store';
import { ClickContext } from '../../stores/clickStore';
import { InforContext } from '~/components/Information/informationStore';

function Mars() {
    const data = useRef(Planets.mars);
    const state = useContext(ContextFactor);
    const texture = new THREE.TextureLoader().load(data.current.img);

    const objectRef = useRef();

    const [click, setClick] = useState(false);
    const [planetClick, setPlanetClick] = useContext(ClickContext);

    const [, setInfor] = useContext(InforContext);

    const handleClick = (probTextRef) => {
        if (planetClick === '' && data.current.tittle !== 'Moon') {
            // Setting properties
            probTextRef.current.fontSize = 1;
            probTextRef.current.radius = data.current.radius + 2;
            probTextRef.current.color = '#ffffff';

            setInfor({
                infor: true,
                data: {
                    name: data.current.tittle,
                    description: data.current.description,
                },
            });

            setPlanetClick(data.current.tittle);
        } else {
            if (planetClick === data.current.tittle && data.current.tittle !== 'Moon') {
                setPlanetClick('');
                setInfor({
                    infor: false,
                    data: null,
                });

                const cameraLookAt = new THREE.Vector3(0, 0, 0);
                camera.lookAt(cameraLookAt);
                const cameraPosition = new THREE.Vector3(-90, 60, 140);
                camera.position.copy(cameraPosition);

                probTextRef.current.fontSize = 2;
                probTextRef.current.radius = -data.current.radius - 2;
                probTextRef.current.color = '#45d8ff';
            }
        }

        setClick((prev) => !prev);
    };

    const phi = 0;

    const clock = useRef(new THREE.Clock());
    const revolution = useCallback(() => {
        const elapsedTime = clock.current.getElapsedTime();
        objectRef.current.position.x =
            data.current.position * -Math.cos(2 * Math.PI * data.current.speedRevolution * elapsedTime + phi);
        objectRef.current.position.z =
            data.current.position * Math.sin(2 * Math.PI * data.current.speedRevolution * elapsedTime + phi);
    }, []);

    const { camera } = useThree();

    const flow = () => {
        const elapsedTime = clock.current.getElapsedTime();
        const objectPosition = objectRef.current.position;
        const cameraPosition = new THREE.Vector3(
            data.current.position *
                -Math.cos(2 * Math.PI * data.current.speedRevolution * elapsedTime + phi + Math.PI / 6),
            objectPosition.y,
            data.current.position *
                Math.sin(2 * Math.PI * data.current.speedRevolution * elapsedTime + phi + Math.PI / 6),
        );
        const cameraLootAt = new THREE.Vector3(objectPosition.x, objectPosition.y, objectPosition.z);
        camera.lookAt(cameraLootAt);
        camera.position.copy(cameraPosition);
    };

    useFrame(() => {
        revolution();
        if (click) {
            flow();
        }
    });
    return (
        <group ref={objectRef} position={[data.current.position, 0, 0]}>
            <Planet
                radius={data.current.radius * state.factorRadius}
                speedRotation={data.current.speedRotation * state.factorRotation}
                texture={[texture]}
                tittle={data.current.tittle}
                onClick={handleClick}
            />
        </group>
    );
}

export default memo(Mars);
