import React, { Component } from 'react'

export default class ErrorPage extends Component {
  state = {error: null};

  static getDerivedStateFormError(error) {
    console.error(error);
    return (error)
  }
  render() {
    if (this.state.error) {
      return (
        <main className="error-page">
        <img src="https://s.yimg.com/ny/api/res/1.2/24j6n22F6DTQy8CkEGOUcw--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/hello_giggles_454/589679af0ca30342d5c0085351ed756f" alt="Han Solo Prentending things are fine"/>
        <h2>Everything is under control.
        Situation normal.  Uh... had a 
        slight weapons malfunction.
        But, uh, everything's perfectly
        all right now. We're fine. 
        We're all fine here, now, thank you. 
        How are you?</h2>

        <p>Please send the listed error report to 
        danielsottile@gmail.com and we'll get on it right away!</p>

        <p>{this.state.error}</p>

        </main>
      )
    }
    //otherwise render the children
    return this.props.children
  }
}