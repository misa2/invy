const partsReducerDefaultState = []

const partsReducer = (state = partsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_PART':
            return [
                ...state,
                action.part
            ]
        case 'REMOVE_PART':
            return state.filter(({id}) => id !== action.id)
        case 'EDIT_PART':
            return state.map((el)=> {
                if (el.id === action.id) {
                    return {
                        ...el, 
                        ...action.updates
                    }
                } else {
                    return el
                }
            })
        case 'SET_PARTS':
            return action.parts
        case 'ADD_SAMPLE_PARTS':
            return
        case 'UPDATE_UNIQUE_CONTAINERS':
            return
        default:
            return state;
    }
}

export default partsReducer