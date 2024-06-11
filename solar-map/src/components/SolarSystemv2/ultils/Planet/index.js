import { useCallback, useRef, memo, useContext } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import Ring from '../Ring';
import TextPlanet from '../Text';
import { HoverContext } from '~/components/SolarSystemv2/stores/hoverStore';
import { ClickContext } from '~/components/SolarSystemv2/stores/clickStore';
import { InforContext } from '~/components/Information/informationStore';

function Planet({
    radius,
    speedRotation,
    texture,
    tittle = 'Hello',
    emissive,
    onPointerEnter,
    onPointerOut,
    onClick,
    probs,
}) {
    // Lấy object của mesh
    const meshRef = useRef();
    const probTextRef = useRef({
        radius: -radius - 2,
        color: '#45d8ff',
        fontSize: 2,
        fontWeight: 400,
        text: tittle,
    });

    const [planetHover, setPlanetHover] = useContext(HoverContext);
    const [planetClick, setPlanetClick] = useContext(ClickContext);
    const [infor, setInfor] = useContext(InforContext);
    const { camera } = useThree();

    // Quay quanh trục
    const rotate = useCallback(() => {
        meshRef.current.rotateY(2 * Math.PI * speedRotation);
    }, []);

    // Lặp lại theo thời gian
    useFrame(() => {
        rotate();
    });

    const handleHover = () => {
        if (planetHover === '' && tittle !== 'Moon') {
            setPlanetHover(tittle);
            onPointerEnter();
            meshRef.current.material.emissiveIntensity = 2;
            probTextRef.current.radius = radius + 2;
            probTextRef.current.color = '#ffffff';
        }
    };

    const handleHoverOut = () => {
        if (planetHover === tittle && tittle !== 'Moon') {
            setPlanetHover('');
            onPointerOut();
            if (tittle !== 'Sun') {
                meshRef.current.material.emissiveIntensity = 0.25;
            } else {
                meshRef.current.material.emissiveIntensity = 1;
            }
            probTextRef.current.radius = -radius - 2;
            probTextRef.current.color = '#45d8ff';
        }
    };

    const handleClick = () => {
        if (planetClick === '' && tittle !== 'Moon') {
            onClick();
            // Setting properties
            probTextRef.current.fontSize = 1;
            probTextRef.current.radius = radius + 2;
            probTextRef.current.color = '#ffffff';

            if (tittle !== 'Sun') {
                meshRef.current.material.emissiveIntensity = 0.25;
            } else {
                meshRef.current.material.emissiveIntensity = 1;
            }

            setInfor({
                infor: true,
                data: {
                    name: tittle,
                    description: 'Mặt trời nè',
                },
            });

            setPlanetClick(tittle);
            setPlanetHover('none');
        } else {
            if (planetClick === tittle && tittle !== 'Moon') {
                onClick();
                setPlanetClick('');
                setPlanetHover('');
                setInfor({
                    infor: false,
                    data: null,
                });
                // Setting properties
                // camera.lookAt(0, 0, 0);
                // camera.position.copy(new THREE.Vector3(-90, 60, 140));

                probTextRef.current.fontSize = 2;
                probTextRef.current.radius = -radius - 2;
                probTextRef.current.color = '#45d8ff';

                if (tittle !== 'Sun') {
                    meshRef.current.material.emissiveIntensity = 0.25;
                } else {
                    meshRef.current.material.emissiveIntensity = 1;
                }
            }
        }
    };

    return (
        <>
            <mesh
                ref={meshRef}
                onPointerEnter={handleHover}
                onPointerOut={handleHoverOut}
                onClick={handleClick}
                {...probs}
            >
                <sphereGeometry args={[radius]} />
                {tittle === 'Sun' ? (
                    <meshBasicMaterial map={texture[0]} />
                ) : (
                    <meshStandardMaterial map={texture[0]} {...emissive} />
                )}
            </mesh>
            <TextPlanet propsText={probTextRef.current} />
            {/* {ring && <Ring {...ring} />} */}
        </>
    );
}

export default memo(Planet);
