import { forwardRef } from 'react';
import Plant from '../ultils/Plant';
import solarSystemTexture from '~/public/image';

function Mercury({}, ref) {
    return (
        <group ref={ref.mercuryObjectRef}>
            <Plant
                radius={3.2}
                img={solarSystemTexture.mercuryTexture}
                type={'standard'}
                position={28}
                ref={ref.mercuryRef}
            />
        </group>
    );
}

export default forwardRef(Mercury);
