import * as THREE from 'three';
import { useMemo } from 'react';

function Stars({ radius }) {
    const [starsGeometry, starsMaterials] = useMemo(() => {
        const r = radius;
        const starsGeometry = [new THREE.BufferGeometry(), new THREE.BufferGeometry()];
        const vertices1 = [];
        const vertices2 = [];
        const vertex = new THREE.Vector3();

        for (let i = 0; i < 250; i++) {
            vertex.x = Math.random() * 2 - 1;
            vertex.y = Math.random() * 2 - 1;
            vertex.z = Math.random() * 2 - 1;
            vertex.multiplyScalar(r);
            vertices1.push(vertex.x, vertex.y, vertex.z);
        }

        for (let i = 0; i < 1500; i++) {
            vertex.x = Math.random() * 2 - 1;
            vertex.y = Math.random() * 2 - 1;
            vertex.z = Math.random() * 2 - 1;
            vertex.multiplyScalar(r);
            vertices2.push(vertex.x, vertex.y, vertex.z);
        }

        starsGeometry[0].setAttribute('position', new THREE.Float32BufferAttribute(vertices1, 3));
        starsGeometry[1].setAttribute('position', new THREE.Float32BufferAttribute(vertices2, 3));

        const starsMaterials = [
            new THREE.PointsMaterial({ color: 0x9c9c9c, size: 2, sizeAttenuation: false }),
            new THREE.PointsMaterial({ color: 0x9c9c9c, size: 1, sizeAttenuation: false }),
            new THREE.PointsMaterial({ color: 0x7c7c7c, size: 2, sizeAttenuation: false }),
            new THREE.PointsMaterial({ color: 0x838383, size: 1, sizeAttenuation: false }),
            new THREE.PointsMaterial({ color: 0x5a5a5a, size: 2, sizeAttenuation: false }),
            new THREE.PointsMaterial({ color: 0x5a5a5a, size: 1, sizeAttenuation: false }),
        ];

        return [starsGeometry, starsMaterials];
    }, [radius]);

    const stars = useMemo(() => {
        const starsArray = [];
        for (let i = 10; i < 30; i++) {
            const stars = new THREE.Points(starsGeometry[i % 2], starsMaterials[i % 6]);
            stars.rotation.x = Math.random() * 6;
            stars.rotation.y = Math.random() * 6;
            stars.rotation.z = Math.random() * 6;
            stars.scale.setScalar(i * 10);
            stars.matrixAutoUpdate = false;
            stars.updateMatrix();
            starsArray.push(stars);
        }
        return starsArray;
    }, [starsGeometry, starsMaterials]);

    console.log(stars);

    return (
        <>
            {stars.map((star, index) => (
                <primitive key={index} object={star} />
            ))}
        </>
    );
}

export default Stars;
