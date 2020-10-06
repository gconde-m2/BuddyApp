import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './login.css'
import logo from '../../layout/navbar/logoTitulo.png'
import authService from '../../../service/auth.service'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            message:undefined
        }
        this.authService = new authService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {

        e.preventDefault()
        
        if(this.state.username.length > 0 && this.state.password.length > 0)
        {
            this.authService
                .login(this.state)
                .then(response => {

                        this.setState({ message: response })
                        this.props.setTheUser(response.data)
                        
                        //this.props.history.push('/')
                        this.props.closeModal()
                    })
                    .catch(err => console.log('Erroooooor:', { err }))
            }
            else{
                if(this.state.username.length < 1 && this.state.password.length < 1)
                {
                    let value = 'campos vacios'
                    this.setState({ message: value }) 
                }
                else if(this.state.username.length < 1)
                {
                    let value = 'introduce el username'
                    this.setState({ message: value }) 

                }else
                {
                    let value = 'introduce la contraseña'
                    this.setState({ message: value }) 
                }
            }
        }


    render() {

        return (
           
            <Container>
                <main>
                    
                        <img className="logo" src={logo}></img>

                    <Row className=" pepe justify-content-center">
                        <Col md={{ span: 5 }}>
                            <h1 className="ptitle">Login</h1>
                            <Form className="formu" onSubmit={this.handleFormSubmit}>
                                <Form.Group>
                                    <Form.Label>Nombre de usuario</Form.Label>
                                    <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                                </Form.Group>
                                <div className="alfonso justify-content-center">
                                <Button className="alfonso" variant="dark" type="submit">Acceder</Button>
                                </div>
                        {/* <div className="alert alert-danger" role="alert">
  
                        {this.state.message}
                        </div> */}
                            </Form>
                        </Col>
                    </Row>
                </main>
                        
            </Container>
            
        )
    }
}
export default Login