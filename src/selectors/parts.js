const selectParts = (parts, {type, value, location, sortBy}) => {
    return parts.filter((el) => {
        const typeMatch = (el.type === type) || (type ==='')
        const valueMatch = el.value.toLowerCase().includes(value.toLowerCase())
        const locationMatch = (el.location === location) || (location ==='')
        return typeMatch && valueMatch && locationMatch
    }).sort((el1, el2) => {
        switch (sortBy) {
            case 'type':
                return el1.type > el2.type ? 1 : -1
            case 'value':
                return el1.value > el2.value ? 1 : -1
            case 'location':
                return el1.location > el2.location ? 1 : -1
            default:
                return 0
        }
    })
}
export default selectParts