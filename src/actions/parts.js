//import {v4 as uuid} from 'uuid'
import { updateOptions } from './options'
import database from './../firebase/firebase'
const addPart = ( part ) => ({
    type: 'ADD_PART',
    part
})

export const startAddPart = (partsData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const {
            type = 'other', 
            value = '', 
            unit = '',
            quantity = '', 
            container = ''
        } = partsData;
        const part = {type, value, unit, quantity, container}
        database.ref(`users/${uid}/parts`).push(part)
            .then( (ref) => {
                dispatch(addPart({
                    id: ref.key,
                    ...part
                }))
           })
           .catch((err) => console.log(err))
    }
}

const removePart = ({ id } = {} ) => ({
    type: 'REMOVE_PART',
    id
})

export const startRemovePart = ( {id} = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/parts/${id}`).remove()
        .then(() => {
            dispatch(removePart({id}))
        })
        .catch((err) => console.log(err))
    }
}

const editPart = (id, updates) => ({
    type: 'EDIT_PART',
    id,
    updates
})
export const startEditPart = ( id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/parts/${id}`).update(updates)
            .then(() => {
                dispatch(editPart(id, updates))
            })
            .catch((err) => console.log(err))
    }
}


export const setParts = (parts) => ({
    type: 'SET_PARTS',
    parts
})

export const startSetParts = () => {
    return(dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/parts`).once('value').then((snapshot) => {
            const parts = []
            snapshot.forEach(el_snapshot => {
                parts.push({
                    id: el_snapshot.key,
                    ...el_snapshot.val()
                })  
            })
            dispatch(setParts(parts))
            dispatch(updateOptions(parts))
        })
    }
}

export const addSampleParts = () => ({
    type: 'ADD_SAMPLE_PARTS'
})

export const startAddSampleParts = () => {
    return(dispatch) => {
        dispatch(startAddPart({type: 'Resistor Carbon-film',  value: '2', unit: 'Ohm', quantity: 1, container:'Box 1'}))
        dispatch(startAddPart({type: 'IC DIP', value: 'NE 555', unit:'N/A', quantity: 1, container:'Box 1'}))
        dispatch(startAddPart({type: 'Resistor Carbon-film',  value: '1', unit: 'Ohm', quantity: 1, container:'Box 1'}))
        dispatch(startAddPart({type: 'IC DIP', value: '74LS321', unit:'N/A', quantity: 1, container:'Box 2'}))
        dispatch(startAddPart({type: 'Resistor SMD 1206',  value: '40', unit: 'kOhm', quantity: 1, container:'Box 1'}))
        dispatch(startAddPart({type: 'IC DIP', value: 'TL041', unit:'N/A', quantity: 1, container:'Box 2'}))
        dispatch(startAddPart({type: 'IC DIP', value: 'TL082', unit:'N/A', quantity: 1, container:'Box 2'}))
        dispatch(startSetParts())
    }
}


export {addPart, removePart, editPart}