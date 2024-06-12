import { createContext, useState } from 'react';

const ControlContext = createContext();
function ControlProvider({ children, control }) {
    const controlRef = control;
    return <ControlContext.Provider value={controlRef}>{children}</ControlContext.Provider>;
}

const StatusContext = createContext();
function StatusProvider({ children, control }) {
    const [status, setStatus] = useState(false);
    return <StatusContext.Provider value={[status, setStatus]}>{children}</StatusContext.Provider>;
}

export { ControlContext, ControlProvider, StatusContext, StatusProvider };
