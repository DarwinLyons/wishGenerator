// firebase.js
import firebase from 'firebase';

// Initialize Firebase
// USE YOUR CONFIG OBJECT
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXA3PMTljdXIQCr2cFGG7wmBv35iGqtfc",
  authDomain: "darwin-lyons-project-five.firebaseapp.com",
  databaseURL: "https://darwin-lyons-project-five.firebaseio.com",
  projectId: "darwin-lyons-project-five",
  storageBucket: "darwin-lyons-project-five.appspot.com",
  messagingSenderId: "637715078446",
  appId: "1:637715078446:web:b71edb2f854f7b0d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// this exports the CONFIGURED version of firebase
export default firebase;