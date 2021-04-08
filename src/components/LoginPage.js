import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from './../actions/auth'
export const LoginPage = ({startLogin}) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Invy app</h1>
            <p>Got spare parts in boxes? Can't remember what's where?</p>
            <p>Use Invy!</p>
            <button className="button" onClick={startLogin}>Login with Google</button>
        </div>
        
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)