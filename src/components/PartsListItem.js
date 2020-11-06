import React from 'react'
import { Link } from 'react-router-dom'


const PartsListItem = ({dispatch, id, type,  value, unit, quantity, container }) => (
    <div>
        <p>
            {type} - 
            <Link to={`/edit_part/${id}`}>
                {value}{unit !=='' ?  ' '+unit : ''}
            </Link>
            - {quantity} - {container} 
            
        </p> 
    </div>
)

export default PartsListItem