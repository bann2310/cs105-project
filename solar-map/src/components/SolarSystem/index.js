import classnames from 'classnames/bind';
import Sun from './Sun';
import Mercury from './Mercury';
import Venus from './Venus';
import styles from './SolarSystem.module.scss';
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
    // const starRef = useRef();
    return (
        <>
            <pointLight position={[0, 0, 0]} args={[0xffffff, 10000, 1000]} />
            <ambientLight args={[0xffffff, 0.2]} />
            <Sun />
            <Mercury />
            <Venus />
            <Earth />
            <Mars />
            <Jupiter />
            <Saturn />
            <Uranus />
            <Neptune />
            <Pluto />
            <Stars />
        </>
    );
}

export default SolarSystem;
