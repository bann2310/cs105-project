import { Line } from '@react-three/drei';
import * as THREE from 'three';
import { memo } from 'react';

function Trajectory({ radius }) {
    const points = [];
    for (let index = 0; index < 64; index++) {
        const angle = (index / 64) * 2 * Math.PI;
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);
        points.push(new THREE.Vector3(x, 0, z));
    }
    points.push(points[0]);
    return <Line points={points} lineWidth={1} />;
}

export default memo(Trajectory);
