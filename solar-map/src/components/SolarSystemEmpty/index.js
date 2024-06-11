import Earth from './components/Earth';
import Jupiter from './components/Jupiter';
import Mars from './components/Mars';
import Mercury from './components/Mercury';
import Neptune from './components/Neptune';
import Pluto from './components/Pluto';
import Saturn from './components/Saturn';
import Sun from './components/Sun';
import Uranus from './components/Uranus';
import Venus from './components/Venus';
import Stars from './ultils/Stars';

function CanvasSolarSystemEmpty() {
    return (
        <>
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
        </>
    );
}

export default CanvasSolarSystemEmpty;
