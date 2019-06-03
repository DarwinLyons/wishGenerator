import React, {Component} from 'react';

class Form extends Component {
 render () {
   return (
     <form action="">
        <label htmlFor="wishLabel"
        className="visuallyHidden">
          Type your wish here
        </label>
        {/* create user input, and bind to value */}
        <input onChange={this.props.whenChange} 
        type="text" 
        placeholder="Type your wish here" 
        value={this.props.userValue} 
        id="wishLabel"
       />
       {/* bind click event to button  */}
       <button onClick={this.props.userClick}>Send your wish</button>
     </form>
   )
 }
}

export default Form;