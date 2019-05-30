import React, { Component } from 'react';

class Wish extends Component {
  render () {
    return (
      <li>
        <p>{this.props.singleWish.name}</p>
      </li>
    )
  }
}

export default Wish;