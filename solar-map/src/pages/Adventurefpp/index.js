import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, FlyControls } from '@react-three/drei';
import classNames from 'classnames/bind';
import styles from './Adventurefpp.module.scss';
import CanvasSolarSystemEmpty from '~/components/SolarSystemEmpty';
import { useContext, useRef } from 'react';
import { ControlContext, ControlProvider } from './provider';

const cx = classNames.bind(styles);

function Adventurefpp() {
    const controlRef = useRef();
    return (
        <div className={cx('container')}>
            <ControlProvider control={controlRef}>
                <Canvas style={{ backgroundColor: '#000000' }}>
                    <fogExp2 attach="fog" args={[0x000000, 0.00000025]} />
                    <PerspectiveCamera makeDefault position={[-100, 20, 100]} lookAt={[0, 0, 0]} />
                    <FlyControls
                        ref={controlRef}
                        movementSpeed={10}
                        rollSpeed={Math.PI / 24}
                        autoForward={false}
                        dragToLook={false}
                    />
                    <CanvasSolarSystemEmpty />
                    <ambientLight intensity={0.2} />
                    <pointLight castShadow={true} intensity={100000} distance={10000} />
                </Canvas>
            </ControlProvider>
        </div>
    );
}

export default Adventurefpp;
