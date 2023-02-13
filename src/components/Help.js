import React from 'react'

const Help = (props) => {
  return (
    <div className='help' id={props.active ? 'active' : ''}>
    <h3>How does this work?</h3>
        This app simulates what your character's stats will look like at level 20 on each promoted class if they were to promote as they are now. 
        Your character is assumed to be at least level 10, and has the requisite proficiencies. Simply insert your characters stats and click 'Estimate'.
        <br/>
        <br/>
        For each promoted class, the estimator will simulate your character reaching level 20 100 times on that promoted class. It takes the average of all simulated level ups and outputs a level 20 stat spread. 
        It will do this for every advanced class.
        <br/>
        <br/>
        It's important to note that the random nature of level ups means you may get wildly different results in-game (or even across estimations). 
        The goal of the estimator is to provide you with an idea of what you can reasonably expect from a character at level 20.
        <br/>
        <br/>
        <span className='confirm' onClick={() => props.setActive(false)}>Got it!</span>
    </div>
  )
}

export default Help