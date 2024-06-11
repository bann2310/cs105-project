import { createContext } from 'react';
const ControlContext = createContext();

function ControlProvider({ children, control }) {
    const controlRef = control;
    return <ControlContext.Provider value={controlRef}>{children}</ControlContext.Provider>;
}

export { ControlContext, ControlProvider };
