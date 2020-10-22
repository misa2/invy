export const setValueFilter = (value = '') => ({
    type: 'SET_VALUE_FILTER',
    value
})

export const sortByType = () => ({
    type: 'SORT_BY_TYPE'
})
export const sortByValue = () => ({
    type: 'SORT_BY_VALUE'
})
export const sortByLocation = () => ({
    type: 'SORT_BY_LOCATION'
})