import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, FlyControls } from '@react-three/drei';
import classNames from 'classnames/bind';
import styles from './Adventurefpp.module.scss';
import CanvasSolarSystemEmpty from '~/components/SolarSystemEmpty';
import { useContext, useRef } from 'react';
import { ControlProvider, StatusContext } from './provider';
import music from '~/music.mp3';
import explosion from '~/explosion.mp3';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Adventurefpp() {
    const controlRef = useRef();

    const [status, setStatus] = useContext(StatusContext);

    const handleClick = () => {
        setStatus(false);
    };

    return (
        <div className={cx('container')}>
            {status && (
                <div className={cx('fail')}>
                    <audio src={explosion} autoPlay />
                    <div style={{ fontSize: '36px' }}>Bumpppp</div>
                    <a href={'/adventurefpp'}>
                        <button onClick={handleClick} className={cx('button')}>
                            Again
                        </button>
                    </a>
                </div>
            )}
            <div className={cx('tutorial')}>
                <b>WASD</b> move <br /> <b>R|F</b> up | down <br /> <b>Q|E</b> roll <br /> <b>up|down</b> pitch <br />
                <b>left|right</b> yaw
            </div>
            <audio src={music} autoPlay loop />
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
