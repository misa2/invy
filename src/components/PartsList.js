import React from 'react'
import { connect } from 'react-redux'
import PartsListItem from './PartsListItem'
import selectParts from './../selectors/parts'
 
const PartsList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Parts</div>
            <div className="show-for-desktop">Part</div>
            <div className="show-for-desktop">Quantity</div>
        </div>
        {props.parts.length === 0 ? (
            <div className="list-item list-item__message">
                <span>No parts to show</span>
            </div>
        ) : (
            props.parts.map((el)=> {
                return <PartsListItem {...el} key={el.id}/>
            }))
        }
        
    </div>
)

const mapStateToProps = (state) => {
    return {
        parts: selectParts(state.parts, state.filters)
    }
}
export default connect(mapStateToProps)(PartsList)
