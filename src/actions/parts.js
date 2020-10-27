//import {v4 as uuid} from 'uuid'
import database from './../firebase/firebase'
const addPart = ( part ) => ({
    type: 'ADD_PART',
    part
})

export const startAddPart = (partsData = {}) => {
    return (dispatch) => {
        const {
            type = 'other', 
            value = '', 
            unit = '',
            quantity = '', 
            location = 'Unassigned'
        } = partsData;
        const part = {type, value, unit, quantity, location}
        database.ref('parts').push(part).then( (ref) => {
            dispatch(addPart({
                id: ref.key,
                ...part
            }))
        })
    }
}

const removePart = ({ id } = {} ) => ({
    type: 'REMOVE_PART',
    id
})

export const startRemovePart = ( {id} = {}) => {
    return (dispatch) => {
        return database.ref(`parts/${id}`).remove().then(() => {
            dispatch(removePart({id}))
        })
    }
}

const editPart = (id, updates) => ({
    type: 'EDIT_PART',
    id,
    updates
})
export const startEditPart = ( id, updates) => {
    return (dispatch) => {
        return database.ref(`parts/${id}`).update(updates).then(() => {
            dispatch(editPart(id, updates))
        })
    }
}


export const setParts = (parts) => ({
    type: 'SET_PARTS',
    parts
})

export const startSetParts = () => {
    return(dispatch) => {
        return database.ref('parts').once('value').then((snapshot) => {
            const parts = []
            snapshot.forEach(el_snapshot => {
                parts.push({
                    id: el_snapshot.key,
                    ...el_snapshot.val()
                })  
            })
            dispatch(setParts(parts))
        })
    }
}



export {addPart, removePart, editPart}