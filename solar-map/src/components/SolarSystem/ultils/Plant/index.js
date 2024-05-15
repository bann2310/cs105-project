import { useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { TextureLoader } from 'three';
import Ring from '../Ring';
function Plant({ radius, img, type, position, speedRotation, ring }) {
    const texture = useLoader(TextureLoader, img);

    const meshRef = useRef();

    useFrame(() => {
        meshRef.current.rotateY(speedRotation);
    });

    const TypeMaterial = {
        basic({ texture }) {
            return <meshBasicMaterial map={texture} />;
        },
        standard({ texture }) {
            return <meshStandardMaterial map={texture} />;
        },
    };
    const Component = TypeMaterial[type];

    const randomZ = Math.ceil(Math.random() * position);

    return (
        <>
            <mesh ref={meshRef} position={[position, 0, randomZ]}>
                <sphereGeometry args={[radius]} />
                <Component texture={texture} />
            </mesh>
            {ring && (
                <Ring
                    innerRadius={ring.innerRadius}
                    outerRadius={ring.outerRadius}
                    img={ring.texture}
                    position={{ position, randomZ }}
                />
            )}
        </>
    );
}

export default Plant;
