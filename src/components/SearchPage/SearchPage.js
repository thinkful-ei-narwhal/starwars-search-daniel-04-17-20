import React, { Component } from 'react';
import ResultsList from '../ResultsList/ResultsList';
import SearchBarNav from '../SearchBarNav/SearchBarNav';

export default class SearchPage extends Component {


  render() {

    return (
      <div>
        <SearchBarNav />
        <ResultsList />
      </div>
    )
  }
}
