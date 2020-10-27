import React from 'react'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import store from './store/invyStore'

import 'normalize.css/normalize.css'
import './styles/styles.scss'

function App() {




  return (
    <div className="App">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
}


export default App;
