import { act } from "react-dom/test-utils"

const optionsReducerDefaultState = {
    type: ['Capacitor', 'Transistor', 'Diode', 'IC', 'Inductor', 'other'],
    unit: ['Ohm', 'KOhm', 'MOhm', 'pF', 'nF', 'uF', 'uH', 'mH', 'N/A'],
    container: ['Box']
}

const optionsReducer = (state = optionsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_PART_TYPE': 
            return {...state, type:state.type.concat(action.partType) }
        case 'ADD_PART_UNIT':
            return {...state, unit:state.unit.concat(action.partUnit) }
        case 'ADD_PART_CONTAINER':
            return {...state, container:state.container.concat(action.partContainer) }
        case 'UPDATE_OPTIONS':
            return action.updatedOptions
        default:
            return state;
    }
}

export default optionsReducer

