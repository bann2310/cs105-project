import { Stars } from '@react-three/drei';
import Plane from './ultils/Plane';
import Light from './ultils/Light';
import Sun from './components/Sun';
import Mercury from './components/Mercury';
import Venus from './components/Venus';
import Earth from './components/Earth';

function CanvasSolarSystem() {
    return (
        <>
            {console.log('Hello ở canvas')}
            <Light />
            <Sun />
            <Mercury />
            <Venus />
            <Earth />
            <Stars />
            {/* <Plane /> */}
        </>
    );
}

export default CanvasSolarSystem;
