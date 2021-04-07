import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => (
    <div>
        <h1>404 - Page not found</h1>
        <p></p>
        <p>
        Ooops! We can't find that page your browser requested. - <Link to="/">Go home</Link>
        </p>
    </div>
)

export default NotFoundPage