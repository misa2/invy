import React from 'react'
import { connect } from 'react-redux'
import PartForm from './PartForm'
import { startAddPart } from './../actions/parts'

export class  AddPartPage extends React.Component {
    onSubmit = (part) => {
        this.props.startAddPart(part)
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <h1>Add Part</h1>
                <PartForm onSubmit={this.onSubmit}/>
            </div>         
        )
    }

}
   
const mapDispatchToProps = (dispatch) => ({
    startAddPart: (part) => dispatch(startAddPart(part))
})

export default connect(undefined, mapDispatchToProps)(AddPartPage)