import { useLoader } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { TextureLoader } from 'three';
import * as THREE from 'three';

function Ring({ innerRadius, outerRadius, img, position }) {
    const texture = useLoader(TextureLoader, img);
    const meshRef = useRef();
    useEffect(() => {
        meshRef.current.rotateX(-0.5 * Math.PI);
    }, []);
    return (
        <mesh position={[position, 0, 0]} ref={meshRef}>
            <ringGeometry args={[innerRadius, outerRadius]} />
            <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
        </mesh>
    );
}

export default Ring;
