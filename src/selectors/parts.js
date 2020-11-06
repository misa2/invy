const selectParts = (parts, {type, value, container, sortBy}) => {
    return parts.filter((el) => {
        const typeMatch = (el.type === type) || (type ==='')
        const valueMatch = el.value.toLowerCase().includes(value.toLowerCase())
        const containerMatch = (el.container === container) || (container ==='')
        return typeMatch && valueMatch && containerMatch
    }).sort((el1, el2) => {
        switch (sortBy) {
            case 'type':
                return el1.type > el2.type ? 1 : -1
            case 'value':
                return el1.value > el2.value ? 1 : -1
            case 'container':
                return el1.container > el2.container ? 1 : -1
            default:
                return 0
        }
    })
}
export default selectParts