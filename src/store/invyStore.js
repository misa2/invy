import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from 'redux-thunk'

import partsReducer from './../reducers/parts'
import filtersReducer from './../reducers/filters'
import authReducer from './../reducers/auth'
import optionsReducer from './../reducers/options'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(combineReducers({parts: partsReducer,
                            filters: filtersReducer,
                            auth: authReducer,
                            options: optionsReducer}), 
                        composeEnhancers(applyMiddleware(thunk))
                        )
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

/*
store.subscribe( ()=> {
    const state = store.getState()
    //const visibleParts = getVisibleParts(state.parts, state.filters)
    //console.log(visibleParts)
})

*/


export default store