import React from 'react'
import { connect } from 'react-redux'
import PartForm from './PartForm'
import { startAddPart } from './../actions/parts'

export class AddPartPage extends React.Component {
    onSubmit = (part) => {
        this.props.startAddPart(part)
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Part</h1>
                    </div>
                </div>
                <div className="content-container">
                    <PartForm onSubmit={this.onSubmit} options={this.props.options} />
                </div>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => ({
    startAddPart: (part) => dispatch(startAddPart(part))
})
const mapStateToProps = (state, props) => {
    return {
        options: state.options
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPartPage)