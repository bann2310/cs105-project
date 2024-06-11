import { useState } from 'react';
import HoverContext from './HoverContext';

function HoverProvider({ children }) {
    const [planetHover, setPlanetHover] = useState('');
    return <HoverContext.Provider value={[planetHover, setPlanetHover]}>{children}</HoverContext.Provider>;
}

export default HoverProvider;
