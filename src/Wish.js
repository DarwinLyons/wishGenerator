import React, { Component } from 'react';

class Wish extends Component {
  render () {
    return (
      <div className={
        "animationTime"+(
          //if this is new, give class lastWish, if not new, give empty string
          this.props.singleWish.new? " lastWish" : ""
        )
        }>
        <div className="balloon">
          <p>{this.props.singleWish.name}</p>
        </div>
      </div>

    )
  }
}

export default Wish;