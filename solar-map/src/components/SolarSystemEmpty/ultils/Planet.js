import { useCallback, useRef, memo } from 'react';
import { useFrame } from '@react-three/fiber';
import Ring from '../ultils/Ring';

function Planet({ radius, speedRotation, texture, tittle = 'Hello', emissive, ring, probs }) {
    // Lấy object của mesh
    const meshRef = useRef();

    // Quay quanh trục
    const rotate = useCallback(() => {
        meshRef.current.rotateY(2 * Math.PI * speedRotation);
    }, []);

    // Lặp lại theo thời gian
    useFrame(() => {
        rotate();
    });

    return (
        <>
            <mesh ref={meshRef} {...probs}>
                <sphereGeometry args={[radius]} />
                {tittle === 'Sun' ? (
                    <meshBasicMaterial map={texture[0]} />
                ) : (
                    <meshStandardMaterial map={texture[0]} {...emissive} />
                )}
            </mesh>
            {ring && <Ring {...ring} />}
        </>
    );
}

export default memo(Planet);
