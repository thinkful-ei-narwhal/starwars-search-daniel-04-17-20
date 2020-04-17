import React, { Component } from 'react';
import Item from '../Item/Item';
import UserContext from '../../UserContext';
import './ResultsList.css';

export default class ResultsList extends Component {

  static contextType = UserContext;

  render() {

    const {
      results,
     } = this.context;

    

    let resultsList = results.length > 0 ? results.map(item => {return (<Item name={item.name} title={item.title}/>)}) : <p className="no-results">There were no results, please try again!</p>

    return (
      <div className="results">
        {resultsList}
      </div>
    )
  }
}
