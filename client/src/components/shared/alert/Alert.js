import React, { Component } from 'react'

import Toast from 'react-bootstrap/Toast'

import './alert.css'

class Alert extends Component {

    constructor() {
        super()
        this.state = {
            visible: true
        }
    }

    render() {
        return (

            <Toast onClose={() => this.setState({ visible: false })} show={this.state.visible} autohide delay={3000} className='toast' >
                
                <Toast.Header>

                    <p style={{width: '100%'}}>{this.props.title}</p>

                </Toast.Header>
                
                <Toast.Body>{this.props.text}</Toast.Body>

            </Toast>
        )
    }
}

export default Alert 