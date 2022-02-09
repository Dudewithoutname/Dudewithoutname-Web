import React, { useState } from 'react';
import './styles/style.scss';
import { Navigation } from './components/navigation';
import { Console } from './components/console/console';

function App() {
    const [cli, setCli] = useState(false);
    
    const doSomething = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setCli(!cli);
    }
    return (
        <>
            <Navigation>
                <a href="#/" onClick={e => doSomething(e)}>Cli</a>
                <a href="http://steamcommunity.com/profiles/76561198134726714">Steam</a>
                <a href="https://github.com/Dudewithoutname">Github</a>
                <a href="https://opensea.io/Dudewithoutname">Opensea</a>
            </Navigation>
            {cli ? <Console /> : null}
        </>
    );
}

export default App;
