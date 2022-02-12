import { OrbitControls, Stars, Text } from '@react-three/drei';
import { Canvas, ThreeEvent } from '@react-three/fiber';
import { useState } from 'react';
import '../styles/style.scss';

export function Space(){
    const [hitCount, setHitCount] = useState(0);
    const [headText, setHeadText] = useState('Welcome to my WORLD');

    const onClick = (e: ThreeEvent<MouseEvent>) =>{
        setHitCount(hitCount + 1);
        setHeadText(`You've destroyed ${hitCount + 1} spaceship${hitCount + 1 > 1 ? 's' : ''}`)
    }

    return(
        <Canvas className='three-box'>
            <OrbitControls zoomSpeed={0}/>
            <Stars saturation={0.4} fade={true} factor={5} />
            <Text color='#ffffff' anchorX='center' anchorY='middle' font='comic-sans' fontSize={0.5} onClick={e => onClick(e)} {...null}>{headText}</Text>
            
        </Canvas>
    );
}



/*
<spotLight position={[10, 15,10]} angle={0.3} />
<ambientLight intesity={0.5} />

function Loader() {
    const { progress } = useProgress()
    return <Html center>{progress} % loaded</Html>
}
  
function ExModel() {
    const group = useRef();
    const mdl = useFBX('/resources/exModel.fbx');
    console.log(mdl);
    return (
        <primitive object={mdl}  />
    );
}
*/