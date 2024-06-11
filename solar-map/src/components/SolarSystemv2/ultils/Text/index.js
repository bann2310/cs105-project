import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { useRef } from 'react';

function TextPlanet({ propsText }) {
    const textRef = useRef();
    useFrame(({ camera }) => {
        textRef.current.lookAt(camera.position);
    });

    return (
        <Text
            ref={textRef}
            position={[0, propsText.radius, 0]}
            fontSize={propsText.fontSize}
            fontWeight={propsText.fontWeight}
            color={propsText.color}
        >
            {propsText.text}
        </Text>
    );
}

export default TextPlanet;
