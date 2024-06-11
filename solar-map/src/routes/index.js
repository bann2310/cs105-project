import Adventurefpp from '~/pages/Adventurefpp';
import Home from '~/pages/Home';
import SolarSystem from '~/pages/SolarSystem';

const publishRoutes = [
    { path: '/', component: Home, layout: null },
    { path: '/solarsystem', component: SolarSystem },
    { path: '/adventurefpp', component: Adventurefpp },
];

export default publishRoutes;
