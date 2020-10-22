import React from 'react'
import { connect } from 'react-redux'
import {setValueFilter,  sortByLocation, sortByType, sortByValue} from './../actions/filters'

const PartsListFilters = (props) => (
    <div>
        <input 
            type="text" 
            value={props.filters.value} 
            onChange={(e) => {
                props.dispatch(setValueFilter(e.target.value))                
            }} 
        />
        <select onChange={(e) => {
                switch (e.target.value) {
                    case 'type':
                        props.dispatch(sortByType())
                        break
                    case 'value':
                        props.dispatch(sortByValue())
                        break
                    case 'location':
                        props.dispatch(sortByLocation())
                        break
                    default:
                        break
                }
            }}>
            <option value='type'>Type</option>
            <option value='value'>Value</option>
            <option value='location'>Location</option>
        </select>
    </div>
)

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(PartsListFilters)