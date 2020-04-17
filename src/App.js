import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Item from './components/Item/Item';
import NotFound from './components/NotFound/NotFound';
import ErrorPage from './components/ErrorPage/ErrorPage';
import UserContext from './UserContext.js';
import SearchPage from './components/SearchPage/SearchPage';

export default class App extends Component {

  // State

  state = {
    results: [],
    textInput: {value: '', touched: false},
    parameterSelect: {value: '', touched: false},
    loading: false,
  }

  // API Function(s) On Submit

  onGetSearch = () => {

    const URL = "https://swapi-thinkful.herokuapp.com/api/";

    this.setState({loading: true});

    fetch(`${URL}${this.state.parameterSelect.value}/?search=${this.state.textInput.value}`)
      
      .then(res => res.json())
      .then(data => this.setState(
        {
          results : data.results,
          loading: false,
      }))
  }


  // State Input Update Functions

  setTextInput = textInput => {
    this.setState({textInput: {value: textInput, touched: true}});
  };

  setSearchParam = parameterSelect => {
    this.setState({parameterSelect: {value: parameterSelect, touched: true}});
  };

  // Validator Functions

  validateTextInput = () => {
    let textInput = this.state.textInput.value;
    textInput = textInput.toString().trim();
    if (textInput.length < 3) {
      // Check if it's at least 3 characters long
      return 'Note name must be at least 3 characters long';
    } else if (/<|>|[/]/.test(textInput)) {
      //checking to see if someone tried to put in script tags
      return 'How DARE you try to put HTML/script tags in my form!!!';
    }
  }

  validateParameter = () => {
    if (this.state.parameterSelect.value === '') {
      return 'Please choose a parameter!';
    }
  }

  render() {
    return (
      <UserContext.Provider value = {{
        loading: this.state.loading,
        results: this.state.results,
        textInput: this.state.textInput,
        parameterSelect: this.state.parameterSelect,
        setSearchParam: this.setSearchParam,
        setTextInput: this.setTextInput,
        validateTextInput: this.validateTextInput,
        validateParameter: this.validateParameter,
        onGetSearch: this.onGetSearch,
      }}>
      <div>
        <Link to="/"><h1>Star Wars Search</h1></Link>
        <ErrorPage>
        <Switch>
          <Route exact path='/' 
            component={HomePage} 
            />
          <Route exact path='/Results/' 
            component={SearchPage}
            />
          <Route exact path='/Expanded/:item' 
            component={Item}
            />
          <Route component={NotFound} />
        </Switch>
        </ErrorPage>
    </div>
    </UserContext.Provider>
    )
  }
}
