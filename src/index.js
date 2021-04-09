import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { firebase } from './firebase/firebase'
import store from './store/invyStore'
import { login, logout } from './actions/auth'
import { startSetParts } from './actions/parts'
import { history } from './routers/AppRouter'
import LoadingPage from './components/LoadingPage'
//import { updateOptions } from './actions/options';


let hasRendered = false
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
    hasRendered = true
  }

}

ReactDOM.render(<LoadingPage />, document.getElementById('root'))

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid))
    store.dispatch(startSetParts()).then(() => {
      renderApp()
      if (history.location.pathname === '/') {
        history.push('/dashboard')
      }
    })

  } else {
    store.dispatch(logout())
    renderApp()
    history.push('/')

  }
})
serviceWorker.unregister();
