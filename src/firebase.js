import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAMQfoyI8xrqNcCs3Ioq882ptHVySSJoxw",
    authDomain: "clone-9356d.firebaseapp.com",
    projectId: "clone-9356d",
    storageBucket: "clone-9356d.appspot.com",
    messagingSenderId: "488340106568",
    appId: "1:488340106568:web:c62a98dc910430e7b1977d"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()  
const auth = firebase.auth()

export {db,auth}
