import React from 'react'
import { connect } from 'react-redux'
import { setValueFilter, sortByContainer, sortByType, sortByValue } from './../actions/filters'

const PartsListFilters = (props) => (
    <div className="content-container">
        <div className="input-group">
            <div className="input-group__item">
                <input
                    type="text"
                    className="text-input"
                    placeholder="Search inventory"                    
                    value={props.filters.value}
                    onChange={(e) => {
                        props.dispatch(setValueFilter(e.target.value))
                    }}
                />

            </div>
            <div>
                <select 
                    className="select"
                    onChange={(e) => {
                    switch (e.target.value) {
                        case 'type':
                            props.dispatch(sortByType())
                            break
                        case 'value':
                            props.dispatch(sortByValue())
                            break
                        case 'box':
                            props.dispatch(sortByContainer())
                            break
                        default:
                            break
                    }
                }}>
                    <option value='type'>Type</option>
                    <option value='value'>Value</option>
                    <option value='box'>Box</option>
                </select>
            </div>
        </div>

    </div>
)

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(PartsListFilters)