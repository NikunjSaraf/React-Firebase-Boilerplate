import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDehjfa2_FbV-4sYLZ9Pw_kH4_6LxNcmfI",
  authDomain: "react-boilerplate-6d58e.firebaseapp.com",
  databaseURL: "https://react-boilerplate-6d58e.firebaseio.com",
  projectId: "react-boilerplate-6d58e",
  storageBucket: "react-boilerplate-6d58e.appspot.com",
  messagingSenderId: "128197264131",
  appId: "1:128197264131:web:05b293fefeaca5dacb9f36",
};
firebase.initializeApp(firebaseConfig);

export default firebase;
