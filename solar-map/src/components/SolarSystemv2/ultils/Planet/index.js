import { useCallback, useRef, memo, useContext } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import Ring from '../Ring';
import TextPlanet from '../Text';

function Planet({ radius, speedRotation, texture, tittle = 'Hello', emissive, onClick, ring, probs }) {
    // Lấy object của mesh
    const meshRef = useRef();
    const probTextRef = useRef({
        radius: -radius - 2,
        color: '#45d8ff',
        fontSize: 2,
        fontWeight: 400,
        text: tittle,
    });

    // Quay quanh trục
    const rotate = useCallback(() => {
        meshRef.current.rotateY(2 * Math.PI * speedRotation);
    }, []);

    // Lặp lại theo thời gian
    useFrame(() => {
        rotate();
    });

    const handleClick = () => {
        onClick(probTextRef);
    };

    return (
        <>
            <mesh ref={meshRef} onClick={handleClick} {...probs}>
                <sphereGeometry args={[radius]} />
                {tittle === 'Sun' ? (
                    <meshBasicMaterial map={texture[0]} />
                ) : (
                    <meshStandardMaterial map={texture[0]} {...emissive} />
                )}
            </mesh>
            <TextPlanet propsText={probTextRef.current} />
            {ring && <Ring {...ring} />}
        </>
    );
}

export default memo(Planet);
