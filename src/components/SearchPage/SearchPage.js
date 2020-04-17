import React, { Component } from 'react';
import UserContext from '../../UserContext';
import ResultsList from '../ResultsList/ResultsList';
import SearchBarNav from '../SearchBarNav/SearchBarNav';
import './SearchPage.css';

export default class SearchPage extends Component {
  static contextType = UserContext;

  render() {

    const {
      loading
     } = this.context;

    return (
      <div className="search-page">
        <SearchBarNav history={this.props.history}/>
        <p className="loading">{loading ? "LOOKING IN A GALAXY FAR, FAR AWAY. . .": ''}</p>
        <ResultsList />
      </div>
    )
  }
}
