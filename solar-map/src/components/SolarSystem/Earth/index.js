import { forwardRef } from 'react';
import Plant from '../ultils/Plant';
import solarSystemTexture from '~/public/image';

function Earth({}, ref) {
    return (
        <group ref={ref.earthObjectRef}>
            <Plant
                radius={6}
                img={solarSystemTexture.earthTexture}
                type={'standard'}
                position={62}
                ref={ref.earthRef}
            />
        </group>
    );
}

export default forwardRef(Earth);
