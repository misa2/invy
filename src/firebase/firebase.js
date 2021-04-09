import * as firebase from 'firebase';
// Initialize Firebase

var firebaseConfig = {
    apiKey: "AIzaSyD0wlU0K_GbdU3rhvyfLOWizJ-scBs_mDU",
    authDomain: "invy-74849.firebaseapp.com",
    databaseURL: "https://invy-74849.firebaseio.com",
    projectId: "invy-74849",
    storageBucket: "invy-74849.appspot.com",
    messagingSenderId: "903283374845",
    appId: "1:903283374845:web:bf7187090e07b0ff2d5c94",
    measurementId: "G-SD1DNLRDEV"
}

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export { firebase, googleAuthProvider, database as default};
