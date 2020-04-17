import React, { Component } from 'react';
import UserContext from '../../UserContext';
import ResultsList from '../ResultsList/ResultsList';
import SearchBarNav from '../SearchBarNav/SearchBarNav';

export default class SearchPage extends Component {
  static contextType = UserContext;

  render() {

    const {
      loading
     } = this.context;

    return (
      <div>
        <SearchBarNav history={this.props.history}/>
        {loading ? "LOOKING IN A GALAXY FAR, FAR AWAY. . .": ''}
        <ResultsList />
      </div>
    )
  }
}
