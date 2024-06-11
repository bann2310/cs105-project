import React from 'react';

function Plane() {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -20, 0]}>
            <planeGeometry args={[1000, 1000, 100, 100]} />
            <meshBasicMaterial color={0xffffff} wireframe />
        </mesh>
    );
}

export default Plane;
