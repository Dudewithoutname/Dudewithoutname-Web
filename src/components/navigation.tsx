import React from 'react';
import '../styles/style.scss'
import '../styles/nav.scss'

export function Navigation(props: { children: boolean | React.ReactChild | React.ReactFragment | null }) {
  return (
    <div className='navigation'>
        <div className='leftContent'>
            Dudewithoutname
        </div>
        <div className='rightContent'>
            {props.children}
        </div>
    </div> 
  );
}
