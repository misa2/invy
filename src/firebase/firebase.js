import * as firebase from 'firebase';
/*
var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};
*/
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

try {
    firebase.initializeApp(firebaseConfig);
}
catch(error)
{
    throw new Error('Firebase initialization error')
}
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export { firebase, googleAuthProvider, database as default};

//firebase.database.enableLogging(true);
//firebase.setLogLevel(firebase.setLogLevel.DEBUG);
//database.getInstance().setLogLevel(Logger.Level.INFO);
// //child changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// /*
// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// */
// /*
// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

//  */

// /*
// const expenses = [
//     {
//         description: 'Rent',
//         note: 'Monthly',
//         amount: 12000,
//         createdAt: 21121
//     }, {
//         description: 'Fun',
//         note: 'Monthly',
//         amount: 13000,
//         createdAt: 2211
//     }, {
//         description: 'Food',
//         note: 'daily',
//         amount: 1200,
//         createdAt: 21333
//     }
// ];

// expenses.forEach(el => database.ref('expenses').push(el));
// */



// //database.ref('notes/-MCfcGP11voaWk8-jyOU').remove();

// /*
// database.ref('notes').push({
//     title: 'Topics',
//     body: 'React, nodejs'
// });
// */
// /*
// const firebaseNotes = {
//     notes: {
//         sfddsfdsfds: {
//             title: 'First note!',
//             body: 'This is my note'   
//         }, 
//         eeqeqeqweq: {
//             title: 'Another note!',
//             body: 'This is my note'  
//         }

//     }
// };

// const notes = [{
//         id: '12',
//         title: 'First note!',
//         body: 'This is my note'    
//     }, {
//         id: '761ase',
//         title: 'Another note!',
//         body: 'This is my note'            
//     }
// ];

// database.ref('notes').set(notes);
// */
// /*
// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// })

// setTimeout(() => {
//     database.ref('age').set(28);
// }, 3500)


// setTimeout(() => {
//     database.ref('age').set(28);
// }, 3500)

// setTimeout(() => {
//     database.ref('age').set(28);
// }, 3500)
// */
// // database.ref().once('value')
// //     .then((snapshot) => {
// //         const val = snapshot.val();
// //         console.log(val);
// //     })
// //     .catch((err) => {
// //         console.log('Error fetching data', err);
// //     })


// // database.ref().set({
// //     name: 'Milos Kostic',
// //     age: 48,
// //     stressLevel: 6,
// //     job: {
// //         title: 'Software developer',
// //         company: 'Google'
// //     },
// //     location: {
// //         city: 'Belgrade',
// //         country: 'Serbia'
// //     }
// // }).then(() => {
// //     console.log('data is saved');
// // }).catch((err) => {
// //     console.log('This failed', err);
// // });

// // database.ref().update({
// //     stressLevel:9,
// //     'job/company': 'Amazon',
// //     'location/city': 'Seattle'
// // });

// //database.ref('isSingle').set(null);
// // database.ref().remove()
// // .then(() => {
// //     console.log('Remove successfull');
// // }).catch((err) => {
// //     console.log('remove failed', err);
// // });
