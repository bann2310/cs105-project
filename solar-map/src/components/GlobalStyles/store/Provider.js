import { useState } from 'react';
import { ContextFactor } from './Context';
import { factorDistance, factorRadius, factorRevolution, factorRotation } from '~/data';

function Provider({ children }) {
    const [chosenPlanet, setChosenPlanet] = useState('');
    return (
        <ContextFactor.Provider value={{ factorDistance, factorRadius, factorRevolution, factorRotation }}>
            {children}
        </ContextFactor.Provider>
    );
}

export default Provider;
