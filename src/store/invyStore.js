import { createStore, combineReducers } from "redux"

import partsReducer from './../reducers/parts'
import filtersReducer from './../reducers/filters'
//import getVisibleParts from './../selectors/parts'




const store = createStore(combineReducers(
    {parts: partsReducer,
    filters: filtersReducer}
),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

/*
store.subscribe( ()=> {
    const state = store.getState()
    //const visibleParts = getVisibleParts(state.parts, state.filters)
    //console.log(visibleParts)
})

*/


export default store