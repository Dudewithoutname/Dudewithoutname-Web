import { useEffect, useState } from 'react';

export function Explosion(){
    const [size, setSize] = useState<number>(0.5);
    const [position] = useState<number[]>([
        Math.random() * 10 * (Math.floor(Math.random() * 2) == 0 ? 1 : -1),
        Math.random() * 10 * (Math.floor(Math.random() * 2) == 0 ? 1 : -1),
        Math.random() * 20 * -1
    ]);    
    
    useEffect(() =>{
        setTimeout(() => {
            if(size <= 0 ) return;
            setSize(size - 0.01)
        },10)
    });
    
    return(
        <>
    
            {(size > 0) 
            ? <mesh position={position}>
                <sphereGeometry args={[size, 12 , 12]}/>
                <meshStandardMaterial color='#e69138'/>
             </mesh>
            : null}
        </>
    );
}
