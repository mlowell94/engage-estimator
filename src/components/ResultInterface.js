import React from 'react'
import ResultOutput from './ResultOutput'
import left from '../assets/chevron-left.svg'
import right from '../assets/chevron-right.svg'

const ResultInterface = (props) => {
  if  (!props.currentPromote) {
    return (
      <div className='results'>
        <span className='waiting'>Waiting for input...</span>
      </div>
    )
  }
  return (
    <div className='results'>
        <div className='stat-container' id='chapter'>
          <label htmlFor="jump-to">Jump to:</label>
          <select name="jump-to"onChange={(e) => props.jumpTo(props.results.indexOf(props.results.find(element => element.name === e.target.value)))}>
            {props.results.map(promote => <option key={promote.name}>{promote.name}</option>)}
          </select>
        </div>
        <h2><span>{props.currentPromote.name}</span>
          <span id="result-icon-container"><img src = {require('../assets/' + props.currentPromote.name.toLowerCase().replace(' ', '-') + '.png')} alt={props.currentPromote.name}/></span>
        </h2>
        <h2>Level 20</h2>
        <ResultOutput currentPromote = {props.currentPromote} />
        <div className='button-container'>
            <img src={left} alt={"An arrow pointing left. It will bring the previously viewed promotion back"} onClick={() => props.goBack()}/>
            <img src={right} alt={"An arrow pointing right. It will bring the next promotion into view"} onClick={() => props.goForward()}/>
        </div>
    </div>
  )
}

export default ResultInterface