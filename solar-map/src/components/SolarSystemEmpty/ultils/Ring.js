import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function Ring({ innerRadius, outerRadius, texture }) {
    const meshRef = useRef();
    useEffect(() => {
        meshRef.current.rotateX(-0.5 * Math.PI);
    }, []);
    return (
        <mesh position={[0, 0, 0]} ref={meshRef}>
            <ringGeometry args={[innerRadius, outerRadius]} />
            <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
        </mesh>
    );
}

export default Ring;
