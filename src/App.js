import './components/StatInputs'
import StatInputs from './components/StatInputs';
import React, { useEffect, useState } from 'react';
import ResultInterface from './components/ResultInterface';
import Help from './components/Help'
import logo from './assets/logo.png'

function App() {
  const [results, setResults] = useState(false)
  const [helpActive, setHelpActive] = useState(false)
  const [currentPromote, setCurrent] = useState(results.length > 20 ? results[0] : results[Math.floor(Math.random() * 20)])

  useEffect(() => {
    results ? setCurrent(results.length > 19 ? results[0] : results[Math.floor(Math.random() * 20)]) : setCurrent(false)
  }, [results])

  const handleChange = (newResults) => {
    setResults(newResults)
  }

  const goForward = () => {
    const currentIndex = results.indexOf(currentPromote)
    if (currentIndex + 1 > results.length - 1) {
      setCurrent(results[0])
    } else {
      setCurrent(results[currentIndex + 1])
    }
  }

  const goBack = () => {
    const currentIndex = results.indexOf(currentPromote)
    if (currentIndex - 1 < 0) {
      setCurrent(results[results.length - 1])
    } else {
      setCurrent(results[currentIndex - 1])
    }
  }

  const jumpTo = (index) => {
    setCurrent(results[index]);
  }

  const resetAll = () => {
    setResults(false);
    setCurrent(false)
  }

  return (
    <div className="App">
      <div className='header'>
        <img src={logo} alt='Fire Emblem Engage logo'/>
        <span>CHARACTER ESTIMATOR</span>
      </div>
      <StatInputs setResults={handleChange} resetAll={resetAll} setHelpActive={setHelpActive}/>
      <ResultInterface currentPromote={currentPromote} results={ results } goForward={goForward} goBack={goBack} jumpTo={jumpTo}/>
      <Help active={helpActive} setActive={setHelpActive}/>
      {helpActive ? <div className='overlay' id='active'/> : <div className='overlay'/>}
    </div>
  );
}

export default App;
