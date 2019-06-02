import React, { Component } from 'react';

class Wish extends Component {
  render () {
    return (
      <div className={
        "animationTime"+(
          //if this is new, give class lastWish, if not new, give empty string
          this.props.singleWish.new? " lastWish" : ""
        )
        // +(
          //if the wish is being hovered give it a class of hover, if not give empty string
          // this.props.hoverState === this.props.singleWish.name? " hovered" : ""
        // )
        }>
        <div className="balloon"
          // + (
          //   //if the wish is being hovered give it a class of hover, if not give empty string
          //   this.props.hoverState === this.props.singleWish.name ? " hovered" : ""
          // )
        
          // onMouseEnter={() => this.props.onMouseEnter(this.props.singleWish.name)}
        >

          <p>{this.props.singleWish.name}</p>
        </div>
      </div>

    )
  }
}

export default Wish;