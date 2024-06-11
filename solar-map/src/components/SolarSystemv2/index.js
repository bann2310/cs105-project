import { Stars } from '@react-three/drei';
import Plane from './ultils/Plane';
import Light from './ultils/Light';
import Sun from './components/Sun';
import Mercury from './components/Mercury';
import Venus from './components/Venus';
import Earth from './components/Earth';
import Mars from './components/Mars';
import Jupiter from './components/Jupiter';
import Saturn from './components/Saturn';
import Uranus from './components/Uranus';
import Neptune from './components/Neptune';
import Pluto from './components/Pluto';

function CanvasSolarSystem() {
    return (
        <>
            {console.log('Hello ở canvas')}
            <Light />
            <Sun />
            <Mercury />
            <Venus />
            <Earth />
            <Mars />
            <Stars />
            <Jupiter />
            <Saturn />
            <Uranus />
            <Neptune />
            <Pluto />
            {/* <Plane /> */}
        </>
    );
}

export default CanvasSolarSystem;
