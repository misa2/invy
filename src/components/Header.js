import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from './../actions/auth'

export const Header = ({ startLogout }) => (
    <header>
        <h1>Invy</h1>
        <h3>Inventory application</h3>
        <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
        <NavLink to="/inventory" activeClassName="is-active">Inventory</NavLink>
        <NavLink to="/add_part" activeClassName="is-active">Add Part</NavLink>
        <NavLink to="/create_location" activeClassName="is-active">Create Location</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        <button onClick={startLogout}>Logout</button>
    </header>
)
const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)