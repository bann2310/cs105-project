import { forwardRef } from 'react';
import Plant from '../ultils/Plant';
import Ring from '../ultils/Ring';
import solarSystemTexture from '~/public/image';

function Uranus({}, ref) {
    return (
        <group ref={ref.uranusObjectRef}>
            <Plant
                radius={7}
                img={solarSystemTexture.uranusTexture}
                type={'standard'}
                position={176}
                ref={ref.uranusRef}
            />
            <Ring innerRadius={7} outerRadius={12} img={solarSystemTexture.uranusRingTexture} position={176} />
        </group>
    );
}

export default forwardRef(Uranus);
