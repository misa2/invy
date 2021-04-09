import React from 'react'
import { connect } from 'react-redux'
import PartForm from './PartForm'
import { startEditPart, startRemovePart } from './../actions/parts'

const EditPartPage = (props) => {
    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Edit Part</h1>
                </div>
            </div>
            <div className="content-container">
                <PartForm
                    part={props.part}
                    onSubmit={(part) => {
                        props.dispatch(startEditPart(props.part.id, part))
                        props.history.push('/')
                    }}
                    options={props.options}
                />
                <button className="button--red" onClick={() => {
                    props.dispatch(startRemovePart({ id: props.part.id }))
                    props.history.push('/')
                }
                }>
                    Remove part
            </button>
            </div>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        part: state.parts.find((part) => {
            return part.id === props.match.params.id
        }),
        options: state.options
    }
}

export default connect(mapStateToProps)(EditPartPage)