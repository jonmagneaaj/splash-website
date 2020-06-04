import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAUz4ZEOXz6VZxXtC7NKftPdgfx8iyRrnI",
    authDomain: "gameapp-45001.firebaseapp.com",
    databaseURL: "https://gameapp-45001.firebaseio.com",
    projectId: "gameapp-45001",
    storageBucket: "gameapp-45001.appspot.com",
    messagingSenderId: "166833359801",
    appId: "1:166833359801:web:729f259182419cd1ef4468"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()

//autentication
export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider
