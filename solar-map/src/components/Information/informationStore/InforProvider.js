import { useState } from 'react';
import InforContext from './InforContext.js';

function InforProvider({ children }) {
    const [infor, setInfor] = useState({
        infor: false,
        data: '',
    });
    return <InforContext.Provider value={[infor, setInfor]}>{children}</InforContext.Provider>;
}

export default InforProvider;
