import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyB-dDHnwy87aMiK1g1zmiR2Xj3cif0rYyk",
  authDomain: "udemy-ninja-chat-app.firebaseapp.com",
  databaseURL: "https://udemy-ninja-chat-app.firebaseio.com",
  projectId: "udemy-ninja-chat-app",
  storageBucket: "udemy-ninja-chat-app.appspot.com",
  messagingSenderId: "1044128370798"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()