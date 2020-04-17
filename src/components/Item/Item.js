import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Item.css';

export default class Item extends Component {
  render() {
    return (
      <div className="item">
       <p>{this.props.name}{this.props.title}</p> 
      </div>
    )
  }
}

Item.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
};