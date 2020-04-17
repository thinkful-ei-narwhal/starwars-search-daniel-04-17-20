import React, { Component } from 'react';
import UserContext from '../../UserContext';
import SearchBarNav from '../SearchBarNav/SearchBarNav';

export default class HomePage extends Component {

  static contextType = UserContext;

  render() {

    const {
      loading
     } = this.context;

    return (
      <div>
        <SearchBarNav history={this.props.history}/>
        {loading ? "LOOKING IN A GALAXY FAR, FAR AWAY. . .": ''}
      </div>
    )
  }
}
