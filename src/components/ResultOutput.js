import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const ResultOutput = (props) => {
  return (
    <AnimatePresence mode='wait'>
        <motion.div
        initial={{opacity: 0, x: -50}}
        animate={{opacity: 1, x: 0}}
        exit={{opacity: 0, x: -50}}
        transition={{ease: "easeInOut", duration: .25}}
        key={props.currentPromote.name}
        className='result-output'>
            <div className='current-class'><span>{props.currentPromote.name}</span></div>
            <div className='stat-container'>
                <span className='stat-lead'>HP </span><span>{props.currentPromote.HP}</span>
            </div>
            <div className='stat-container'>
                <span className='stat-lead'>Str </span><span>{props.currentPromote.Str}</span>
            </div>
            <div className='stat-container'>
                <span className='stat-lead'>Mag </span><span>{props.currentPromote.Mag}</span>
            </div>
            <div className='stat-container'>
                <span className='stat-lead'>Dex </span><span>{props.currentPromote.Dex}</span>
            </div>
            <div className='stat-container'>
                <span className='stat-lead'>Spd </span><span>{props.currentPromote.Spd}</span>
            </div>
            <div className='stat-container'>
                <span className='stat-lead'>Def </span><span>{props.currentPromote.Def}</span>
            </div>
            <div className='stat-container'>
                <span className='stat-lead'>Res </span><span>{props.currentPromote.Res}</span>
            </div>
            <div className='stat-container'>
                <span className='stat-lead'>Lck </span><span>{props.currentPromote.Lck}</span>
            </div>
            <div className='stat-container'>
                <span className='stat-lead'>Bld </span><span>{props.currentPromote.Bld}</span>
            </div>
            {/* <div className='stat-container'>
                <span className='stat-lead'>Rating: </span><span>{props.currentPromote.rating}</span>
            </div> */}
    </motion.div>
    </AnimatePresence>
  )
}

export default ResultOutput