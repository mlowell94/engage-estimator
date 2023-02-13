import React from 'react'

const ResultOutput = (props) => {
  return (
    <div className='result-output'>
        <div className='stat-container'>
            <span>HP: </span><span>{props.currentPromote.HP}</span>
        </div>
        <div className='stat-container'>
            <span>Str: </span><span>{props.currentPromote.Str}</span>
        </div>
        <div className='stat-container'>
            <span>Mag: </span><span>{props.currentPromote.Mag}</span>
        </div>
        <div className='stat-container'>
            <span>Dex: </span><span>{props.currentPromote.Dex}</span>
        </div>
        <div className='stat-container'>
            <span>Spd: </span><span>{props.currentPromote.Spd}</span>
        </div>
        <div className='stat-container'>
            <span>Def: </span><span>{props.currentPromote.Def}</span>
        </div>
        <div className='stat-container'>
            <span>Res: </span><span>{props.currentPromote.Res}</span>
        </div>
        <div className='stat-container'>
            <span>Lck: </span><span>{props.currentPromote.Lck}</span>
        </div>
        <div className='stat-container'>
            <span>Bld: </span><span>{props.currentPromote.Bld}</span>
        </div>
        <div className='stat-container'>
            <span>Rating: </span><span>{props.currentPromote.rating}</span>
        </div>
    </div>
  )
}

export default ResultOutput