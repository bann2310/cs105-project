import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { forwardRef } from 'react';
function Plant({ radius, img, type, position }, ref) {
    const texture = useLoader(TextureLoader, img);
    const TypeMaterial = {
        basic({ texture }) {
            return <meshBasicMaterial map={texture} />;
        },
        standard({ texture }) {
            return <meshStandardMaterial map={texture} />;
        },
    };
    const Component = TypeMaterial[type];

    return (
        <mesh ref={ref} position={[position, 0, 0]}>
            <sphereGeometry args={[radius]} />
            <Component texture={texture} />
        </mesh>
    );
}

export default forwardRef(Plant);
