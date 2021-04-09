import React from 'react'
import { Link } from 'react-router-dom'


const PartsListItem = ({ dispatch, id, type, value, unit, quantity, container }) => (

    <Link className="list-item" to={`/edit_part/${id}`}>
        <div>
            <h3 className="list-item__title" >{value}{unit !== '' ? ' ' + unit : ''}</h3>
            <span className="list-item__sub-title">{type} - Stored in:  {container}</span>
        </div>
        <h3 className="list-item__data">{quantity}</h3>
        
    </Link>

)

export default PartsListItem