import React from 'react'
import { connect } from 'react-redux'
import selectParts from './../selectors/parts'
import selectPartsContainers from './../selectors/partsContainers'

export const PartsSummary = ( {partsCount, containersCount}) => {
    const partsWord = partsCount === 1 ? 'part' : 'parts'
    const containersWord = containersCount === 1 ? 'container' : 'containers'
    return (
        <div>
            <h1>Viewing {partsCount} {partsWord}, stored in {containersCount} {containersWord}.</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleParts = selectParts(state.parts, state.filters)

    return {
        partsCount: visibleParts.length,
        containersCount: selectPartsContainers(visibleParts)
    }
}

export default connect(mapStateToProps)(PartsSummary)