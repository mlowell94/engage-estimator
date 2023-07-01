import './components/StatInputs'
import React, { useState } from 'react';
import Container from './components/Container';
import Help from './components/Help';
import Canvas from './components/Canvas';

function App() {
  const [helpActive, setHelpActive] = useState(false)

  return (
    <div className="App">
      <div className='header'>
        <span>ENGAGE ESTIMATOR v2</span>
        <Help active={helpActive} setHelpActive={setHelpActive}/>
      </div>
      <Container />
      <Canvas />
    </div>
  );
}

export default App;
