import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './SolarSystem.module.scss';
import CanvasSolarSystem from '~/components/SolarSystemv2';
import Information from '~/components/Information';
import { InforContext } from '~/components/Information/informationStore';

const cx = classNames.bind(styles);

function SolarSystem() {
    const [infor] = useContext(InforContext);
    return (
        <div className={cx('container')}>
            {infor.infor && (
                <div className={cx('information')}>
                    <Information name={infor.data.name} description={infor.data.description} />
                </div>
            )}
            <Canvas style={{ backgroundColor: '#000000' }}>
                <PerspectiveCamera makeDefault position={[-90, 60, 140]} />
                <OrbitControls />
                <CanvasSolarSystem />
            </Canvas>
        </div>
    );
}

export default SolarSystem;
