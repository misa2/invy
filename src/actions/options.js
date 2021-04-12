export const addPartType = ( partType ) => ({
    type: 'ADD_PART_TYPE',
    partType
})

export const addPartUnit = ( partUnit ) => ({
    type: 'ADD_PART_UNIT',
    partUnit
})

export const addPartContainer = ( partContainer ) => ({
    type: 'ADD_PART_CONTAINER',
    partContainer
})

export const updateOptions = (parts) => {
    let updatedOptions = {
        type: ['Resistor', 'Capacitor', 'Transistor', 'Diode', 'IC', 'Inductor'],
        unit: ['Ohm', 'KOhm', 'MOhm', 'pF', 'nF', 'uF', 'uH', 'mH', 'N/A'],
        container: ['Box 1']
    }
    if (parts) {
        parts.forEach((el_part) => {
            if (!updatedOptions.type.some((el_type) =>el_type === el_part.type)) {
                updatedOptions.type.push(el_part.type)
            }
            if (!updatedOptions.unit.some((el_unit) =>el_unit === el_part.unit)) {
                updatedOptions.unit.push(el_part.unit)
            }
            if (!updatedOptions.container.some((el_container) =>el_container === el_part.container)) {
                updatedOptions.container.push(el_part.container)
            }
        })
    }
    return ({
        type: 'UPDATE_OPTIONS',
        updatedOptions
    })
    
}



