import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { firebase } from './firebase/firebase'
import store from './store/invyStore'
import {startAddPart, startSetParts} from './actions/parts'

// store.dispatch(startAddPart({type: 'Resistor Carbon-film',  value: '2', unit: 'Ohm', quantity: 1, location:'Box 1'}))
// store.dispatch(startAddPart({type: 'IC DIP', value: 'NE 555', quantity: 1, location:'Box 1'}))
// store.dispatch(startAddPart({type: 'Resistor Carbon-film',  value: '1', unit: 'Ohm', quantity: 1, location:'Box 1'}))
// store.dispatch(startAddPart({type: 'IC DIP', value: '74LS321', quantity: 1, location:'Box 2'}))
// store.dispatch(startAddPart({type: 'Resistor SMD 1206',  value: '40', unit: 'kOhm', quantity: 1, location:'Box 1'}))
// store.dispatch(startAddPart({type: 'IC DIP', value: 'TL041', quantity: 1, location:'Box 2'}))
// store.dispatch(startAddPart({type: 'IC DIP', value: 'TL082', quantity: 1, location:'Box 2'}))


ReactDOM.render(<p>Loading...</p>, document.getElementById('root'))
store.dispatch(startSetParts()).then(()=> {

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
  
})
firebase.auth().onAuthStateChanged( (user) => {
  if (user) {
    console.log('log in');
  } else {
    console.log('log out');
  }
})
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
