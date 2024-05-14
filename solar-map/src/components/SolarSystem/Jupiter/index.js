import { forwardRef } from 'react';
import Plant from '../ultils/Plant';
import solarSystemTexture from '~/public/image';

function Jupiter({}, ref) {
    return (
        <group ref={ref.jupiterObjectRef}>
            <Plant
                radius={12}
                img={solarSystemTexture.jupiterTexture}
                type={'standard'}
                position={100}
                ref={ref.jupiterRef}
            />
        </group>
    );
}

export default forwardRef(Jupiter);
