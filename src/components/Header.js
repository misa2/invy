import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Invy</h1>
        <h3>Inventory application</h3>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/inventory" activeClassName="is-active">Inventory</NavLink>
        <NavLink to="/add_part" activeClassName="is-active">Add Part</NavLink>
        <NavLink to="/create_location" activeClassName="is-active">Create Location</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
)

export default Header