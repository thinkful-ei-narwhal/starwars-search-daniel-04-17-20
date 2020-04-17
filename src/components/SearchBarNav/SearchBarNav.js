import React, { Component } from 'react';
import UserContext from '../../UserContext';
import './SearchBarNav.css';

export default class SearchBarNav extends Component {

  static contextType = UserContext;

  render() {

    const {
      textInput,
      parameterSelect,
      setTextInput,
      setSearchParam,
      validateTextInput,
      validateParameter,
      onGetSearch,
     } = this.context;


    return (
      <div>

        <form id="search-form" className="search-form">
          <label htmlFor="input-text">Search:</label>
          {textInput.touched && <p className="error">{validateTextInput()}</p>}
          <input type="text" id="input-text" name="input-text" value={textInput.value} onChange={e => setTextInput(e.target.value)}/>
          <label htmlFor="parameter">Parameter:</label>
          {parameterSelect.touched && <p className="error">{validateParameter()}</p>}
          <select name="parameter" id="parameter" onChange={e => setSearchParam(e.target.value)}> 
            <option value="" defaultValue>Choose an option</option>
            <option value="planets">Planets</option>
            <option value="starships">Starships</option>
            <option value="vehicles">Vehicles</option>
            <option value="people">People</option>
            <option value="films">Films</option>
            <option value="species">Species</option>
          </select>
          <button className="submit-form"
            disabled={
            validateTextInput() ||
            validateParameter()
            }
            onClick={() => {
            this.props.history.push(`/Results/`)
            onGetSearch()}}>Submit</button>
        </form>
        
      </div>
    )
  }
}
