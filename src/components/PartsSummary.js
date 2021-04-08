import React from 'react'
import { connect } from 'react-redux'
import selectParts from './../selectors/parts'
import selectPartContainers from './../selectors/partContainers'
import {Link} from 'react-router-dom'

export const PartsSummary = ( {partsCount, containersCount}) => {
    const partsWord = partsCount === 1 ? 'part' : 'parts'
    const containersWord = containersCount === 1 ? 'container' : 'containers'
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{partsCount} {partsWord}</span>, stored in <span>{containersCount} {containersWord}</span>.</h1>
                <div className="page-header__actions">
                    <Link className="button" to="/add_part">Add Part</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleParts = selectParts(state.parts, state.filters)

    return {
        partsCount: visibleParts.length,
        containersCount: selectPartContainers(visibleParts).length
    }
}

export default connect(mapStateToProps)(PartsSummary)