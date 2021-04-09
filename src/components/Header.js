import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from './../actions/auth'

export const Header = ({ startLogout }) => (
    <header className="header">
        
            <div className="header__content__left">
                <Link className="header__title" to="/dashboard">
                    <h1>Invy</h1>
                </Link>
            </div>
            <div className="header__content__right">    
                <Link className="button-header button--link header__content__right__item" to="/help">Help</Link>
                <button className="button-header button--link header__content__right__item" onClick={startLogout}>Logout</button>
            </div>    
            
        
    </header>
)
//<Link to="/add_part" activeClassName="is-active">Add Part</Link>
const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)