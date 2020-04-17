import React, { Component } from 'react';
import Item from '../Item/Item';
import UserContext from '../../UserContext';

export default class ResultsList extends Component {

  static contextType = UserContext;

  render() {

    const {
      results,
     } = this.context;

    const resultsList = results.map(item => {

      return (
        <Item 
        name={item.name}
        title={item.title}/>
      )
    })

    return (
      <div className="results">
        {resultsList}
      </div>
    )
  }
}
