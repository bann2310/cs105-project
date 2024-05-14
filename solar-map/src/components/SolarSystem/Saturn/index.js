import { forwardRef } from 'react';
import Plant from '../ultils/Plant';
import Ring from '../ultils/Ring';
import solarSystemTexture from '~/public/image';

function Saturn({}, ref) {
    return (
        <group ref={ref.saturnObjectRef}>
            <Plant
                radius={10}
                img={solarSystemTexture.saturnTexture}
                type={'standard'}
                position={138}
                ref={ref.saturnRef}
            />
            <Ring innerRadius={10} outerRadius={20} img={solarSystemTexture.saturnRingTexture} position={138} />
        </group>
    );
}

export default forwardRef(Saturn);
