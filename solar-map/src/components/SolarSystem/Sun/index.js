import { forwardRef, useEffect } from 'react';
import Plant from '../ultils/Plant';
import solarSystemTexture from '~/public/image';

function Sun({}, ref) {
    return (
        <group ref={ref.sunObjectRef}>
            <Plant radius={16} img={solarSystemTexture.sunTexture} type={'basic'} position={0} ref={ref.sunRef} />
        </group>
    );
}

export default forwardRef(Sun);
