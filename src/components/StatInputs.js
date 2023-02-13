import React, {useState} from 'react'
import characters from '../characters'
import calculator from '../calc'
import Lythos from '../assets/Lythos_crest.webp'

const StatInputs = (props) => {
    const [currentChapter, setCurrentChapter] = useState(1);
    const [currentChar, setCurrentChar] = useState("alear")
    const handleSubmit = (event) => {
      event.preventDefault();
      let stats = {};
      for (let i = 2; i <= 10; i += 1) {
        stats[event.target[i].name] = parseInt(event.target[i].value);
      }
    const newCalc = calculator(characters[event.target[1].value], stats);
    props.setResults(newCalc)
    //   event.target.reset();
    }
    const handleChange = (charname) => {
        setCurrentChar(charname.toLowerCase())
    }
  return (
    <form className='stat-input' onSubmit={(e) => handleSubmit(e)}>
        <div className='stat-container' id='chapter'>
            <label htmlFor="chapter-select">Characters up to chapter:</label>
            <select defaultValue={currentChapter} onChange={(e) => {setCurrentChapter(e.target.value); setCurrentChar('alear'); props.resetAll()}} name="chapter-select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
            <option>18</option>
            <option>19</option>
            <option>20</option>
            <option>21</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
            <option>25</option>
            <option>26</option>
            <option>27</option>
        </select>
        </div>
        <div className='stat-container' id='character' >
            <img src={require('../assets/' + currentChar + '.png')} alt={currentChar} id='char-icon'/>
            <select value={currentChar[0].toUpperCase() + currentChar.slice(1)} name="character-select" id="character-select" onChange = {(e) => {handleChange(e.target.value); props.resetAll()}}>
                { Object.keys(characters).map((character) => 
                characters[character].chapter <= currentChapter ? 
                <option key={ character } value={character}>{character}</option> :
                ''
                ) }
            </select>
        </div>
        <div className='stat-container'>
            <label htmlFor='HP'>HP:
                <span className='explanation'>Health points. If this number reaches 0 in combat, a unit will die and become unable to participate in battle</span>
            </label>
            <div>
                <input type='number' name='HP' id='HP' required max={100} defaultValue={27}></input>
                <span className='bar'></span>
            </div>
        </div>
        <div className='stat-container'>
            <label htmlFor='Str'>Str:
                <span className='explanation'>Strength. This number affects the amount of damage a unit deals with physical weapons in combat</span>
            </label>
            <div>
                <input type='number' name='Str' id='Str' required max={100} defaultValue={9}></input>
                <span className='bar'></span>
            </div>
        </div>
        <div className='stat-container'>
            <label htmlFor='Mag'>Mag:
                <span className='explanation'>Magic. This number affects the amount of damage a unit deals with magical weapons in combat</span>
            </label>
            <div>
                <input type='number' name='Mag' id='Mag' required max={100} defaultValue={1}></input>
                <span className='bar'></span>
            </div>
        </div>
        <div className='stat-container'>
            <label htmlFor='Dex'>Dex:
                <span className='explanation'>Dexterity. This number affects a unit's hit and critical rates.</span>
            </label>
            <div>
                <input type='number' name='Dex' id='Dex' required max={100} defaultValue={13}></input>
                <span className='bar'></span>
            </div>
        </div>
        <div className='stat-container'>
            <label htmlFor='Spd'>Spd:
                <span className='explanation'>Speed. This number affects whether a unit can move twice in combat, and also affects avoid.</span>
            </label>
            <div>
                <input type='number' name='Spd' id='Spd' required max={100} defaultValue={13}></input>
                <span className='bar'></span>
            </div>
        </div>
        <div className='stat-container'>
            <label htmlFor='Def'>Def:
                <span className='explanation'>Defense. This number affects the damage a unit will take when being attacked with physical weapons. </span>
            </label>
            <div>
                <input type='number' name='Def' id='Def' required max={100} defaultValue={12}></input>
                <span className='bar'></span>
            </div>
        </div>
        <div className='stat-container'>
            <label htmlFor='Res'>Res:
                <span className='explanation'>Resistance. This number affects the damage a unit will take when being attacked with magical weapons. </span>
            </label>
            <div>
                <input type='number' name='Res' id='Res' required max={100} defaultValue={4}></input>
                <span className='bar'></span>
            </div>
        </div>
        <div className='stat-container'>
            <label htmlFor='Lck'>Lck:
                <span className='explanation'>Luck. This number affects a unit's ability to dodge both normal and critical hits, and a unit's chance to deal hits.</span>
            </label>
            <div>
                <input type='number' name='Lck' id='Lck' required max={100} defaultValue={6}></input>
                <span className='bar'></span>
            </div>
        </div>
        <div className='stat-container'>
            <label htmlFor='Bld'>Bld:
                <span className='explanation'>Build. The more Bld a unit has the lower the penalty for wielding heavy weapons is. </span>
            </label>
            <div>
                <input type='number' name='Bld' id='Bld' required max={100} defaultValue={4}></input>
                <span className='bar'></span>
            </div>
        </div>
        <input type='submit' id='calc' value='Estimate'></input>
        <img src={Lythos} alt='Crest of Lythos' id='bg-element'/>
        <span className='info' onClick={() => props.setHelpActive(true)}>How does this work?</span>
    </form>
  )
}

export default StatInputs