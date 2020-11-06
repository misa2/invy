const optionsReducerDefaultState = {
    type: ['Capacitor', 'Transistor', 'Diode', 'IC', 'Inductor', 'other'],
    unit: ['Ohm', 'KOhm', 'MOhm', 'pF', 'nF', 'uF', 'uH', 'mH', 'N/A'],
    container: ['Box']
}

const optionsReducer = (state = optionsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_PART_TYPE':
            return (state.type.splice().push(action.partType), state.unit, state.container )
        case 'ADD_PART_UNIT':
            return (state.type, state.unit.splice().push(action.partUnit), state.container )
        case 'ADD_PART_CONTAINER':
            return (state.type, state.unit, state.container.splice().push(action.partContainer) )
        case 'UPDATE_OPTIONS':
            return action.updatedOptions
        default:
            return state;
    }
}

export default optionsReducer

