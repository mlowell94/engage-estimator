import React from 'react'

const Help = (props) => {
  return (
    <div className='help'>
      <span className='info'  id={props.active ? 'active' : ''} onClick={() => {props.active ? props.setHelpActive(false) : props.setHelpActive(true)}}>{props.active ? 'Close' : 'How does this work?'}</span>
      <div className='help-content-wrapper' id={props.active ? 'active' : ''}>
        <div className='help-content'>
          This app estimates a character's max stats at level 20 for every potential promotion if they were to promote with the stats they have now.
          <br/>
          <br/>
          Simply select a character, input their current stats, and hit 'Estimate'. This will show you an averaged stat spread on every potential promotion at level 20 for that character.
        </div>
      </div>
    </div>
  )
}

export default Help