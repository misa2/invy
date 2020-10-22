import React from 'react'
import { connect } from 'react-redux'
import PartForm from './PartForm'
import { addPart } from './../actions/parts'

const AddPartPage = (props) => (
    <div>
        <h1>Add Part</h1>
        <PartForm
            onSubmit={(part) => {
                props.dispatch(addPart(part))
                props.history.push('/')
            }} 
        />
    </div>
)

export default connect()(AddPartPage)