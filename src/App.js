import React from 'react'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import store from './store/invyStore'
import {addPart} from './actions/parts'

import 'normalize.css/normalize.css'
import './styles/styles.scss'

function App() {

store.dispatch(addPart({type: 'Resistor Carbon-film',  value: '2', unit: 'Ohm', quantity: 1, location:'Box 1'}))
store.dispatch(addPart({type: 'IC DIP', value: 'NE 555', quantity: 1, location:'Box 1'}))
store.dispatch(addPart({type: 'Resistor Carbon-film',  value: '1', unit: 'Ohm', quantity: 1, location:'Box 1'}))
store.dispatch(addPart({type: 'IC DIP', value: '74LS321', quantity: 1, location:'Box 2'}))
store.dispatch(addPart({type: 'Resistor SMD 1206',  value: '40', unit: 'kOhm', quantity: 1, location:'Box 1'}))
store.dispatch(addPart({type: 'IC DIP', value: 'TL041', quantity: 1, location:'Box 2'}))
store.dispatch(addPart({type: 'IC DIP', value: 'TL082', quantity: 1, location:'Box 2'}))


  return (
    <div className="App">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
}


export default App;
