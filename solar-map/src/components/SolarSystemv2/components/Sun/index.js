import { useState, useRef, memo, useContext, useCallback, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import Planet from '../../ultils/Planet';
import { Planets } from '~/data';
import { ContextFactor } from '~/components/GlobalStyles/store';
import { ClickContext } from '../../stores/clickStore';
import { InforContext } from '~/components/Information/informationStore';

function Sun() {
    const data = useRef(Planets.sun);
    const state = useContext(ContextFactor);
    const texture = new THREE.TextureLoader().load(data.current.img);

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

    const { camera } = useThree();

    useFrame(() => {
        if (click) {
            const cameraLookAt = new THREE.Vector3(0, 0, 0);
            camera.lookAt(cameraLookAt);
            const cameraPosition = new THREE.Vector3(-40, 40, 40);
            camera.position.copy(cameraPosition);
        }
    });

    return (
        <group>
            <Planet
                radius={data.current.radius * state.factorRadius}
                speedRotation={data.current.speedRotation * state.factorRotation}
                texture={[texture]}
                tittle={data.current.tittle}
                emissiveIntensity={1}
                onClick={handleClick}
            />
        </group>
    );
}

export default memo(Sun);
