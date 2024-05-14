import { forwardRef } from 'react';
import Plant from '../ultils/Plant';
import solarSystemTexture from '~/public/image';

function Venus({}, ref) {
    return (
        <group ref={ref.venusObjectRef}>
            <Plant
                radius={5.8}
                img={solarSystemTexture.venusTexture}
                type={'standard'}
                position={44}
                ref={ref.venusRef}
            />
        </group>
    );
}

export default forwardRef(Venus);
