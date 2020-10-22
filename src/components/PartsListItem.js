import React from 'react'
import { Link } from 'react-router-dom'


const PartsListItem = ({dispatch, id, type,  value, unit, quantity, location }) => (
    <div>
        <p>
            {type} - 
            <Link to={`/edit_part/${id}`}>
                {value}{unit !=='' ?  ' '+unit : ''}
            </Link>
            - {quantity} - {location} 
            
        </p> 
    </div>
)

export default PartsListItem