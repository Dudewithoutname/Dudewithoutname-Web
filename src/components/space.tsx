import { OrbitControls, Stars, Text } from '@react-three/drei';
import { Canvas, ThreeEvent } from '@react-three/fiber';
import { useState } from 'react';
import { Explosion } from './effects/explosion';
import '../styles/style.scss';

export function Space(){
    const [hitCount, setHitCount] = useState(0);
    const [headText, setHeadText] = useState('Welcome to my WORLD');

    const onClick = (e: ThreeEvent<MouseEvent>) =>{
        setHitCount(hitCount + 1);
        setHeadText(`You've destroyed ${hitCount + 1} spaceship${hitCount + 1 > 1 ? 's' : ''}`)
    }

    const makeExplosions = () => {
        // limit Explosions to 8 at once
        let expl = []
        for(let i = hitCount - 8; i <= hitCount; i++)
        {
            if(i <= 0) continue;
            expl.push(<Explosion key={i}/>);
        }
        return expl;
    }
    
    return(
        <Canvas className='three-box'>
            <OrbitControls zoomSpeed={0}/>
            <ambientLight />
            <Stars saturation={0.4} fade={true} factor={5} />
            <Text color='#ffffff' anchorX='center' anchorY='middle' font='/resources/bebasneue.ttf' fontSize={0.5} onClick={e => onClick(e)} {...null}>
                {headText}
            </Text>
            {makeExplosions()}
        </Canvas>
    );
}