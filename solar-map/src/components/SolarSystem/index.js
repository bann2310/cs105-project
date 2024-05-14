import classnames from 'classnames/bind';
import { useFrame } from '@react-three/fiber';

import { useEffect, useRef } from 'react';
import Sun from './Sun';
import Mercury from './Mercury';
import Venus from './Venus';
import styles from './SolarSystem.module.scss';
import solarSystemTexture from '~/public/image';
import Earth from './Earth';
import Mars from './Mars';
import Jupiter from './Jupiter';
import Saturn from './Saturn';
import Uranus from './Uranus';
import Neptune from './Neptune';
import { Stars } from '@react-three/drei';
import Pluto from './Pluto';

const cx = classnames.bind(styles);

function SolarSystem() {
    useFrame((state, delta) => {
        sunRef.current.rotateY(0.004);
        mercuryRef.current.rotateY(0.004);
        venusRef.current.rotateY(0.002);
        earthRef.current.rotateY(0.02);
        marsRef.current.rotateY(0.018);
        jupiterRef.current.rotateY(0.04);
        saturnRef.current.rotateY(0.038);
        uranusRef.current.rotateY(0.03);
        neptuneRef.current.rotateY(0.032);
        plutoRef.current.rotateY(0.008);
        starRef.current.rotateY(0.0001);

        mercuryObjectRef.current.rotateY(0.04);
        venusObjectRef.current.rotateY(0.015);
        earthObjectRef.current.rotateY(0.01);
        marsObjectRef.current.rotateY(0.008);
        jupiterObjectRef.current.rotateY(0.002);
        saturnObjectRef.current.rotateY(0.0009);
        uranusObjectRef.current.rotateY(0.0004);
        neptuneObjectRef.current.rotateY(0.0001);
        plutoObjectRef.current.rotateY(0.00007);
    });

    const sunRef = useRef();
    const sunObjectRef = useRef();

    const mercuryRef = useRef();
    const mercuryObjectRef = useRef();

    const venusRef = useRef();
    const venusObjectRef = useRef();

    const earthRef = useRef();
    const earthObjectRef = useRef();

    const marsRef = useRef();
    const marsObjectRef = useRef();

    const jupiterRef = useRef();
    const jupiterObjectRef = useRef();

    const saturnRef = useRef();
    const saturnObjectRef = useRef();

    const uranusRef = useRef();
    const uranusObjectRef = useRef();

    const neptuneRef = useRef();
    const neptuneObjectRef = useRef();

    const plutoRef = useRef();
    const plutoObjectRef = useRef();

    const starRef = useRef();
    return (
        <>
            <pointLight position={[0, 0, 0]} args={[0xffffff, 30000, 1000]} />
            <Sun ref={{ sunRef, sunObjectRef }} />
            <Mercury ref={{ mercuryRef, mercuryObjectRef }} />
            <Venus ref={{ venusRef, venusObjectRef }} />
            <Earth ref={{ earthRef, earthObjectRef }} />
            <Mars ref={{ marsRef, marsObjectRef }} />
            <Jupiter ref={{ jupiterRef, jupiterObjectRef }} />
            <Saturn ref={{ saturnRef, saturnObjectRef }} />
            <Uranus ref={{ uranusRef, uranusObjectRef }} />
            <Neptune ref={{ neptuneRef, neptuneObjectRef }} />
            <Pluto ref={{ plutoRef, plutoObjectRef }} />
            <Stars ref={starRef} />
        </>
    );
}

export default SolarSystem;
