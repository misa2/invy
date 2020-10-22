const filtersReducerDeafultState = {
    type: '',
    value: '',
    location: '',
    sortBy: ''
}
const filtersReducer = (state = filtersReducerDeafultState, action) => {
    switch (action.type) {
        case 'SET_VALUE_FILTER':
            return {
                ...state,
                value: action.value
            }
        case 'SORT_BY_TYPE':
            return {
                ...state,
                sortBy: 'type'
            }

        case 'SORT_BY_VALUE':
            return {
                ...state,
                sortBy: 'value'
            }
        case 'SORT_BY_LOCATION':
            return {
                ...state,
                sortBy: 'location'
            }
        default:
            return state
    }
}

export default filtersReducer
