import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import classNames from 'classnames/bind';
import styles from '~/App.module.scss';
import Header from '~/components/Header';
import SolarSystem from '~/components/SolarSystem';

const cx = classNames.bind(styles);

function App() {
    return (
        <div className="App">
            <Header />
            <div className={cx('container')}>
                <Canvas>
                    <PerspectiveCamera makeDefault position={[-90, 140, 140]} />
                    <OrbitControls />
                    <SolarSystem />
                </Canvas>
            </div>
        </div>
    );
}

export default App;
