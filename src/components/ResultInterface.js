import React  from 'react'
import ResultOutput from './ResultOutput'
import { AnimatePresence, motion } from 'framer-motion'

const ResultInterface = (props) => {
  return (
    <AnimatePresence mode='wait'>
      {!props.currentPromote ?       
      <div className='results' id={props.resultsShown ? 'active' : ''}>
          <span className='waiting'>Waiting for input...</span>
      </div> :     
      <div className='results' id={props.resultsShown ? 'active' : ''}>
        <div>
        {props.results ?
        <div className='class-select'>
          <AnimatePresence>
            {props.results.map((item, index) => 
            <motion.div 
            className='class'
            initial={{opacity: 0, x: 100}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: 100}}
            transition={{ease: "easeInOut", duration: .15, delay: index * .025}}
            key={props.currentChar+item.name}
            id={props.currentPromote.name === item.name ? 'active' : ''}
            onClick={() => props.jumpTo(props.results.indexOf(props.results.find(element => element.name === item.name)))}>
              {item.name}
            </motion.div>)}
          </AnimatePresence>
        </div> : ''}
          <motion.div className='results-inner'>
            <ResultOutput currentPromote = {props.currentPromote} />
          </motion.div>
        </div>
      </div>}
    </AnimatePresence>
  )
}

export default ResultInterface
