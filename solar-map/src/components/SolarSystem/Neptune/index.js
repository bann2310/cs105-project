import { forwardRef } from 'react';
import Plant from '../ultils/Plant';
import solarSystemTexture from '~/public/image';

function Neptune({}, ref) {
    return (
        <group ref={ref.neptuneObjectRef}>
            <Plant
                radius={7}
                img={solarSystemTexture.neptuneTexture}
                type={'standard'}
                position={200}
                ref={ref.neptuneRef}
            />
        </group>
    );
}

export default forwardRef(Neptune);
