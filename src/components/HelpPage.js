import React from 'react'
import { connect } from 'react-redux'
import { startAddSampleParts } from './../actions/parts'


export class  HelpPage extends React.Component {
    onClick = () => {
        this.props.startAddSampleParts()
        this.props.history.push('/')

    }

    render() {
        return (
            <div >
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Help page</h1>
                    </div>
                </div>
                <div className="content-container">
                    <p>Invy is an application that helps you organize and locate small things like spare parts. Your data is stored in
                        a cloud database called <a href='https://firebase.google.com/'>Firebase</a>.</p>
                        <p></p>
                        <p>You can define types for things that you are tracking, so you can quickly filter what you are looking for.
                        You can also define units, and keep record of quantity. Also, tracked parts can be stored in multiple containers, 
                        that you can name approprietly.</p>
                    <p></p>
                    <p>Use button bellow to add sample data</p>
                    <button className="button" onClick={this.onClick}>Add sample data</button>
                </div>
            </div>         
        )
    }

}
   
const mapDispatchToProps = (dispatch) => ({
    startAddSampleParts: () => dispatch(startAddSampleParts()),
})

export default connect(undefined, mapDispatchToProps)(HelpPage)

