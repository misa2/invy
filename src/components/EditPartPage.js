import React from 'react'
import { connect } from 'react-redux'
import PartForm from './PartForm'
import { editPart, removePart } from './../actions/parts'

const EditPartPage = (props) => {
    return (
        <div>
            <PartForm
                part={props.part}
                onSubmit={(part) => {
                    props.dispatch(editPart(props.part.id, part))
                    props.history.push('/')
                }}
            />
            <button onClick={ () => {
                props.dispatch(removePart({id: props.part.id}))
                props.history.push('/')}
            }>
                Remove
            </button>
        </div>  
    )
}

const mapStateToProps = (state, props) => {
    return {
        part: state.parts.find((part)=>{
            return part.id === props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(EditPartPage)