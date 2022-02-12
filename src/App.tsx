import { useState } from 'react';
import './styles/style.scss';
import { Navigation } from './components/navigation';
import { Console } from './components/console/console';
import { Space } from './components/space';


function App() {
    const [cli, setCli] = useState(false);
    
    const openCLI = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setCli(!cli);
    }

    return (
        <>
            <Space />
            <Navigation>
                <a href='#/' onClick={e => openCLI(e)}>Console</a>
                <a href='http://steamcommunity.com/profiles/76561198134726714'>Steam</a>
                <a href='https://github.com/Dudewithoutname'>Github</a>
                <a href='https://opensea.io/Dudewithoutname'>Opensea</a>
            </Navigation>
            {cli ? <Console /> : null}
        </>
    );
}

export default App;
