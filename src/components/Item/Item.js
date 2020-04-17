import React, { Component } from 'react';
import './Item.css';

export default class OpenItem extends Component {
  render() {
    return (
      <div>
       <p>{this.props.name}{this.props.title}</p> 
      </div>
    )
  }
}
