import React from 'react'
import { connect } from 'react-redux'
import { startAddSampleParts } from './../actions/parts'


export class  HelpPage extends React.Component {
    onClick = () => {
        this.props.startAddSampleParts()
        this.props.history.push('/')

    }

    render() {
        return (
            <div>
                <h1>Use button bellow to add sample data</h1>
                <button onClick={this.onClick}>Add sample data</button>
            </div>         
        )
    }

}
   
const mapDispatchToProps = (dispatch) => ({
    startAddSampleParts: () => dispatch(startAddSampleParts()),
})

export default connect(undefined, mapDispatchToProps)(HelpPage)

