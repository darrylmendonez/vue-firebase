import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBcZilOBRz2sZy8UYLhMNQ2vIwQ_M_9VdE",
  authDomain: "udemy-ninja-smoothies-course.firebaseapp.com",
  databaseURL: "https://udemy-ninja-smoothies-course.firebaseio.com",
  projectId: "udemy-ninja-smoothies-course",
  storageBucket: "udemy-ninja-smoothies-course.appspot.com",
  messagingSenderId: "445357166246"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

// export firestore database
export default firebaseApp.firestore()