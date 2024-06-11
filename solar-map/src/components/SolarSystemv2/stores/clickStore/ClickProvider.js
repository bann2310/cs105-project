import { useState } from 'react';
import ClickContext from './ClickContext';

function ClickProvider({ children }) {
    const [planetClick, setPlanetClick] = useState('');
    return <ClickContext.Provider value={[planetClick, setPlanetClick]}>{children}</ClickContext.Provider>;
}

export default ClickProvider;
