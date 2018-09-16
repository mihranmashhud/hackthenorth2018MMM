import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA3hsku1kZDalXwaUzX7PE-ppMrAMOtJIw",
  authDomain: "github-gallery.firebaseapp.com",
  databaseURL: "https://github-gallery.firebaseio.com",
  projectId: "github-gallery",
  storageBucket: "github-gallery.appspot.com",
  messagingSenderId: "363470626737"
};

if (!firebase.app.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth };
