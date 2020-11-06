const selectPartContainers = (parts) => {
    let uniqueContainers = new Array(0)

    parts.forEach((el_part) => {
        if (uniqueContainers.filter((el_uniqueContainer)=> el_uniqueContainer === el_part.container).length === 0) {
            uniqueContainers.push(el_part.container)
        }            
    })
    return uniqueContainers
}
export default selectPartContainers