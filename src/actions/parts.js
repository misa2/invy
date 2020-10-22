import {v4 as uuid} from 'uuid'
const addPart = (
    { 
        type = 'other', 
        value = '', 
        unit = '',
        quantity = '', 
        location = 'Unassigned'
    } = {} ) => ({
    type: 'ADD_PART',
    part: {
        id: uuid(),
        type,
        value,
        unit,
        quantity,
        location
    }
})

const removePart = ({ id } = {} ) => ({
    type: 'REMOVE_PART',
    id
})

const editPart = (id, updates) => ({
    type: 'EDIT_PART',
    id,
    updates
})
export {addPart, removePart, editPart}