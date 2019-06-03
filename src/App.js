import React, { Component } from 'react';
import firebase from './firebase';
import Swal from 'sweetalert2';
import Header from './header.js';
import Form from './Form.js';
import Wish from './Wish.js';
import './App.css';


class App extends Component {
  constructor() {
    super();
    //provide state for my application, create empty array for wishes, empty string to reset input and a boolean for the balloon animation
    this.state = {
      wishes: [],
      userInput: '',
      knownWishes: false,
    }
  }

  componentDidMount() {
    //create variable that holds a reference to database
    const dbRef = firebase.database().ref();
    //firebase watch command, watch the value changing 
    dbRef.on('value', (response) => {
      //variable for new state
      const newState = [];
      //variable for the state of wishes on page load (Brent helped me with this)
      const knownWishes = this.state.knownWishes
      //variable for wishes added after original state
      let newKnownWishes;
      //if knownWishes is false, which I've set it to on page load, then do below
      if (knownWishes === false){
        //if known wishes is false, make newKnownWishes an empty array
        newKnownWishes = [];
      } else {
        //if knownWishes has items in it, include the new known wishes
        newKnownWishes = knownWishes;
      }
      //variable that contains everything in the database
      const data = response.val();
      //looping through the firebase object and pushing new information to it, giving it the firebase key and a name
      for (let key in data) {
        //creating a variable for wishData that is the data and its key 
        let wishData = data[key];
        //create a boolean value for new wishes
        let wishIsNew = false;
        //if known wishes is not false then do below
        if (knownWishes !== false){
          //if the wish that we're looking at isn't known we're going mark it as new
          if (knownWishes.includes(key) === false) {
            wishIsNew = true
            //we're going to push new wishes to newKnownWishes
            newKnownWishes.push(key)
          }
        } else{
          //add all keys to newKnownWishes
          newKnownWishes.push(key)
        }
        //push to new state they key, the wishData and the newWish
        newState.push({
          key: key,
          name: wishData,
          new: wishIsNew,
        });
      }
      //update previous state with new state array
      this.setState({
        wishes: newState,
        //set known wishes to newKnownWishes, which tracks all the wishes on the page so we can animate anything new
        knownWishes: newKnownWishes,
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
    //make a new variable that checkes userInput
    const checkUserInput = this.state.userInput
    //if userInput is empty didplay an error
    if (checkUserInput === '' || checkUserInput === ' ' || checkUserInput === undefined) {
      Swal.fire({
        type: 'error',
        text: 'Please enter a wish!',
      })
      //if userInput has something in it then
    } else {
      //save firbase data here
      const dbRef = firebase.database().ref();
      //push new input to state
      dbRef.push(this.state.userInput);
      //reset user input 
      this.setState({
        userInput: '',
      })
    }
  }
  //what is being rendered to the page 
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className="wrapperSmall">
            <div className="wishWrapper" aria-live="polite" aria-atomic="true" aria-relevant="additions">
              {/* map over the user inputted wishes and display on the page */}
              {this.state.wishes.map((userInput) => {
                return (
                        // import wish componenet
                        <Wish 
                        singleWish={userInput}
                        key={userInput.key}
                        />
                  )
              })}
            </div>
            
            <header>
              {/* import header componenet */}
              <Header />
              {/* import form component */}
              <Form 
              whenChange={this.handleChange}
              userValue={this.state.userInput}
              userClick={this.handleClick}
              />
            </header>
          </div>{/* wrapperSmall */}
        </div>{/* wrapper */}

      </div> // App
    )
  }
  //component 
}

export default App;
