import React from 'react'
import { connect } from 'react-redux'
import PartsListItem from './PartsListItem'
import selectParts from './../selectors/parts'
 
const PartsList = (props) => (
    <div>
        <h1>Parts List</h1>
        {props.parts.map((el)=> {
            return <PartsListItem {...el} key={el.id}/>
        })}
    </div>
)

const mapStateToProps = (state) => {
    return {
        parts: selectParts(state.parts, state.filters)
    }
}
export default connect(mapStateToProps)(PartsList)
