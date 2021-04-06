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
            <div>
                <h1>Help page</h1>
                <p>Invy is an application that helps you organize and locate small things in multiple containers. Your data is stored in
                     a cloud database called <a href='https://firebase.google.com/'>Firebase</a>.</p>
                     <p></p>
                    <p>You can define types for things that you are tracking, so you can quickly filter what you are looking for.
                     You can also define units, and keep record of quantity. Also, things can be stored in multiple containers, 
                     that you can name approprietly.</p>
                <p></p>
                <p>Use button bellow to add sample data</p>
                <button onClick={this.onClick}>Add sample data</button>
            </div>         
        )
    }

}
   
const mapDispatchToProps = (dispatch) => ({
    startAddSampleParts: () => dispatch(startAddSampleParts()),
})

export default connect(undefined, mapDispatchToProps)(HelpPage)

