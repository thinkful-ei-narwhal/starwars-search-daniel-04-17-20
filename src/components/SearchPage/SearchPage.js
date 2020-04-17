import React, { Component } from 'react';
import UserContext from '../../UserContext';

export default class SearchPage extends Component {

  static contextType = UserContext;

  render() {

    const {
      textInput,
      parameterSelect,
      setTextInput,
      setSearchParam,
      validateTextInput,
      onGetSearch,
     } = this.context;


    return (
      <div>

        <form id="search-form" class="search-form">
          <label htmlFor="input-text">Search:</label>
          {textInput.touched && <p className="error">{validateTextInput()}</p>}
          <input type="text" id="input-text" name="input-text" value={textInput.value} onChange={e => setTextInput(e.target.value)}/>
          <label htmlFor="parameter">Parameter:</label><br />
          <select name="parameter" id="parameter" onChange={e => setSearchParam(e.target.value)}> 
            <option value="" defaultValue>All</option>
            <option value="planets">Planets</option>
            <option value="spaceships">Spaceships</option>
            <option value="vehicles">Vehicles</option>
            <option value="characters">Characters</option>
            <option value="films">Films</option>
            <option value="species">Species</option>
          </select>
          <button className="submit-form"
            disabled={
            validateTextInput()
            }
            onClick={() => {
              this.props.history.push(`/Results/${textInput.value}${parameterSelect.value}`);
            onGetSearch()}}>Submit</button>
        </form>
        
      </div>
    )
  }
}
