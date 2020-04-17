import React, { Component } from 'react';
import UserContext from '../../UserContext';
import SearchBarNav from '../SearchBarNav/SearchBarNav';
import './HomePage.css';

export default class HomePage extends Component {

  static contextType = UserContext;

  render() {

    const {
      loading
     } = this.context;

    return (
      <div>
        <SearchBarNav history={this.props.history}/>
        <p className="loading">{loading ? "LOOKING IN A GALAXY FAR, FAR AWAY. . .": ''}</p>
      </div>
    )
  }
}
