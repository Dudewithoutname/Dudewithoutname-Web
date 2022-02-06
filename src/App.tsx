import React from 'react';
import './styles/style.scss';
import { Navigation } from './components/navigation';
import { Console } from './components/console/console';

function App() {
  return (
    <>
        <Navigation/>
        <Console />
    </>
  );
}

export default App;
