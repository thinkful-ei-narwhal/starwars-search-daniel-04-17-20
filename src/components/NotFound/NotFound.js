import React, { Component } from 'react';
import './NotFound.css';

export default class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <h2>404 Not Found</h2>

        <img src="https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F018%2F682%2Fobi-wan.jpg" alt="Obi-Wan insisting these are not your droids"/>
        <div className="content">
        <p>Um...these are not the droids you are looking for.
        Please click here to head back:
        </p>
        <p>some kind of back button</p>
        </div>
      </div>
    )
  }
}