import React, { useEffect, useState } from 'react'
import StatInputs from './StatInputs'
import ResultInterface from './ResultInterface'
import { AnimatePresence, motion } from 'framer-motion'

const Container = () => {
    const [resultsShown, setResultsShown] = useState(false)
    const [results, setResults] = useState(false)
    const [currentChapter, setCurrentChapter] = useState(1);
    const [currentChar, setCurrentChar] = useState("alear")
    const [imgLoading, setImgLoading] = useState(true)
    const [currentPromote, setCurrent] = useState(results.length > 19 ? results[0] : results[Math.floor(Math.random() * 19)])

    useEffect(() => {
      results ? setCurrent(results.length > 19 ? results[0] : results[Math.floor(Math.random() * 19)]) : setCurrent(false)
    }, [results])

    const handleCharChange = (e) => {
      setCurrentChapter(e.target.value); 
      if (currentChar !== 'alear') {
        setCurrentChar('alear'); 
        setImgLoading(true); 
      }
      resetAll()
    }
  
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

    const getPath = (currentChar) => {
      if (currentChar === 'chloé') {
        return 'chloe'
      } else if (currentChar === 'céline') {
        return 'celine'
      }
      return currentChar
    }
  return (
<div className='container-outer'>
    <AnimatePresence mode="wait">
          <motion.img
          initial={{opacity: 0, x: -100}}
          animate={imgLoading ? {opacity: 0, x: -100} : {opacity: .95, x: 0}}
          exit={{opacity: 0, x: -100}}
          transition={{ease: "easeInOut", duration: .35}}
          className='char-img' 
          key={currentChar}
          src={require('../assets/' + getPath() + '.webp')} alt={currentChar} id='char-icon'
          onLoad={() => {setTimeout(() => { setImgLoading(false) }, 250)}}
          />
    </AnimatePresence>
    <div className='container-inner'>
        <div className='interface-container'>
          <StatInputs 
          setResults={handleChange}
          handleCharChange={handleCharChange}
          resetAll={resetAll}
          currentChar={currentChar}
          setCurrentChar={setCurrentChar}
          currentChapter={currentChapter}
          resultsShown={resultsShown}
          setResultsShown={setResultsShown}
          />
          <ResultInterface 
          currentPromote={currentPromote}
          currentChar={currentChar}
          results={ results } 
          goForward={goForward} 
          goBack={goBack} 
          jumpTo={jumpTo}
          resultsShown={resultsShown}
          />
        </div>
    </div>
    <div className='change-display'>
      <div onClick={() => {setResultsShown(true)}} id={resultsShown ? 'active' : ''}>Show Results</div>
      <div onClick={() => {setResultsShown(false)}} id={resultsShown ? '' : 'active'}>Hide Results</div>
    </div>
</div>
  )
}

export default Container