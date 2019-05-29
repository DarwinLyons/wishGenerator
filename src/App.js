import React, { Component } from 'react';
import firebase from './firebase';
import Header from './header.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
    //provide state for my application 
    this.state = {
      wishes: [],
      userInput: '',
    }
  }
  componentDidMount() {
    //create variable that holds a reference to database
    const dbRef = firebase.database().ref();
    //firebase watch command, watch the value changing 
    dbRef.on('value', (response) => {
      //variable for new state
      const newState = [];
      //variable that contains everything in the database
      const data = response.val();
      //looping through the firebase object and pushing new information to it, giving it the firebase key and a name
      for (let key in data) {
        newState.push({
          key: key,
          name: data[key],
        });
      }
      //update previous state with new state array
      this.setState({
        wishes: newState,
      })
    })

    
    //componentDidMount  
  }
  //see when user changes input
  handleChange = (event) => {
    this.setState({
      userInput: event.target.value,
    })
  }

  //see when user clicks button 
  handleClick = (event) => {
    event.preventDefault();
    //save firbase data here
    const dbRef = firebase.database().ref();
    //push new input to state
    dbRef.push(this.state.userInput);
    //reset user input 
    this.setState({
      userInput: '',
    })
  }
  render() {
    return (
      <div className="App">
        <ul>
          {/* map over the user inputted wishes and display on the page */}
          {this.state.wishes.map((wish) => {
            console.log(wish);
            return (
              <div className="listContainer">
                <li key={wish.key}>
                <p>{wish.name}</p>
                </li>
                <li>test grid</li>
                <li>test grid</li>
                <li>test grid</li>
              </div>
            )
          })}
        </ul>
        
        <header>
          <Header />

          <form action="">
            {/* create user input, and bind to value */}
            <input onChange ={this.handleChange} type="text" placeholder="Type your wish here" value={this.state.userInput}/>
            {/* bind click event to button  */}
            <button onClick={this.handleClick}>Send your wish</button>
          </form>

        </header>
        {/* Import Header */}
      </div>
    )
  }
  //component 
}

export default App;
