import React, {useEffect, useRef, useState} from 'react'
import characters from '../characters'
import calculator from '../calc'
import styles from '../selectStyles';
import Select from "react-select";


const StatInputs = (props) => {
    const [characterArray, setCharacterArray] = useState([{value: "Alear", label: "Alear"}, {value: "Vander", label: "Vander"}])
    const [selectedValue, setSelectedValue] = useState(characterArray[0])
    const [dlcFlagged, setDlcFlagged] = useState(false)
    const handleSubmit = (event) => {
      event.preventDefault();
      let stats = {};
      for (let i = 4; i <= 13; i += 1) {
        stats[event.target[i].name] = parseInt(event.target[i].value);
      }
      const charFormatted = props.currentChar.charAt(0).toUpperCase() + props.currentChar.slice(1);
      const newCalc = calculator(characters[charFormatted], stats);
      props.setResults(newCalc)
      props.setResultsShown(true)
    }
    const handleChange = (option) => {
        props.setCurrentChar(option.value.toLowerCase())
        setSelectedValue(option)
    }
    const genOptions = useRef();
    genOptions.current = () => {
        const characterOptions = [];
        const characterNames = Object.keys(characters)
        for (let character of characterNames) {
            if (characters[character].chapter === 'DLC') {
                if (dlcFlagged) {
                    characterOptions.push({value: character, label: character})
                }
            } else {
                if (characters[character].chapter <= props.currentChapter) {
                    characterOptions.push({value: character, label: character})
                }
            }
        }
        props.setCurrentChar(characterArray[0].value.toLowerCase())
        setCharacterArray(characterOptions);
        setSelectedValue(characterArray[0]);
    }

    useEffect(() => {
        genOptions.current();
    }, [props.currentChapter, dlcFlagged])

  return (
    <form className='stat-input' id={props.resultsShown ? '' : 'active'} onSubmit={(e) => handleSubmit(e)}>
        <div className='interface-inner'>
        <input type='submit' id='calc' value='Estimate'></input>
        <div className='stat-container' id='chapter'>
            <div className='main-quest'>
                <label htmlFor="chapter-select">Show characters up to chapter:</label>
                <input type='range' min='1' max='27' 
                defaultValue={props.currentChapter} 
                onChange={(e) => {props.handleCharChange(e)}} 
                name="chapter-select"></input>
                <span>{props.currentChapter}</span>
            </div>            
            <div className='dlc'>
                <label htmlFor='include-dlc'>Include DLC characters?</label>
                <input type='checkbox' onChange={() => {dlcFlagged ? setDlcFlagged(false) : setDlcFlagged(true)}}></input>
            </div>       
        </div>
            <div className='stat-container' id='character' >
                <Select 
                name="character-select"
                id="character-select"
                styles={styles}
                defaultValue={characterArray[0]}
                value={selectedValue}
                options={characterArray}
                onChange = {(option) => {handleChange(option); props.resetAll()}}>
                </Select>
            </div>
            <div className='stat-container'>
                <label htmlFor='HP'>HP</label>
                <div>
                    <input type='number' name='HP' id='HP' required max={100} defaultValue={27}></input>
                    <span className='bar'></span>
                </div>
            </div>
            <div className='stat-container'>
                <label htmlFor='Str'>Str</label>
                <div>
                    <input type='number' name='Str' id='Str' required max={100} defaultValue={9}></input>
                    <span className='bar'></span>
                </div>
            </div>
            <div className='stat-container'>
                <label htmlFor='Mag'>Mag</label>
                <div>
                    <input type='number' name='Mag' id='Mag' required max={100} defaultValue={1}></input>
                    <span className='bar'></span>
                </div>
            </div>
            <div className='stat-container'>
                <label htmlFor='Dex'>Dex</label>
                <div>
                    <input type='number' name='Dex' id='Dex' required max={100} defaultValue={13}></input>
                    <span className='bar'></span>
                </div>
            </div>
            <div className='stat-container'>
                <label htmlFor='Spd'>Spd</label>
                <div>
                    <input type='number' name='Spd' id='Spd' required max={100} defaultValue={13}></input>
                    <span className='bar'></span>
                </div>
            </div>
            <div className='stat-container'>
                <label htmlFor='Def'>Def</label>
                <div>
                    <input type='number' name='Def' id='Def' required max={100} defaultValue={12}></input>
                    <span className='bar'></span>
                </div>
            </div>
            <div className='stat-container'>
                <label htmlFor='Res'>Res</label>
                <div>
                    <input type='number' name='Res' id='Res' required max={100} defaultValue={4}></input>
                    <span className='bar'></span>
                </div>
            </div>
            <div className='stat-container'>
                <label htmlFor='Lck'>Lck</label>
                <div>
                    <input type='number' name='Lck' id='Lck' required max={100} defaultValue={6}></input>
                    <span className='bar'></span>
                </div>
            </div>
            <div className='stat-container'>
                <label htmlFor='Bld'>Bld</label>
                <div>
                    <input type='number' name='Bld' id='Bld' required max={100} defaultValue={4}></input>
                    <span className='bar'></span>
                </div>
            </div>
        </div>
    </form>
  )
}

export default StatInputs