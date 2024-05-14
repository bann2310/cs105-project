import { forwardRef } from 'react';
import Plant from '../ultils/Plant';
import solarSystemTexture from '~/public/image';

function Mars({}, ref) {
    return (
        <group ref={ref.marsObjectRef}>
            <Plant radius={4} img={solarSystemTexture.marsTexture} type={'standard'} position={78} ref={ref.marsRef} />
        </group>
    );
}

export default forwardRef(Mars);
