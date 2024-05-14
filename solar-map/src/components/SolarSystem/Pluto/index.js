import { forwardRef } from 'react';
import Plant from '../ultils/Plant';
import solarSystemTexture from '~/public/image';

function Pluto({}, ref) {
    return (
        <group ref={ref.plutoObjectRef}>
            <Plant
                radius={2.8}
                img={solarSystemTexture.plutoTexture}
                type={'standard'}
                position={216}
                ref={ref.plutoRef}
            />
        </group>
    );
}

export default forwardRef(Pluto);
