import React from 'react';
import '../styles/style.scss'
import '../styles/nav.scss'

export function Navigation() {
  return (
    <div className='navigation'>
        <div className='leftContent'>
            Dudewithoutname
        </div>
        <div className='rightContent'>
            <a href="https://github.com/Dudewithoutname">Github</a>
            <a href="http://steamcommunity.com/profiles/76561198134726714">Steam</a>
            <a href="https://opensea.io/Dudewithoutname">Opensea</a>
        </div>
    </div> 
  );
}
