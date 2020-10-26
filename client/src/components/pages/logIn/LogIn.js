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
            message :  undefined,
        }
        this.authService = new authService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {

        e.preventDefault()

        if (this.state.username.length > 0 && this.state.password.length > 0) {

            this.authService
                .login(this.state)
                .then(response => {

                    this.setState({ message: response })
                    this.props.setTheUser(response.data)

                    this.props.closeModal()
                })
                .catch(err => {
                    console.log('Error:', { err }) 
                    this.setState({ message:'Contraseña o usuario incorrecto'})})
                    .catch(err => console.log('Erroooooor:', { err }))
        }
        else {

                if (this.state.username.length < 1 && this.state.password.length < 1) {
                    let value = 'campos vacios'
                    this.setState({ message: value })
                }
                else if (this.state.username.length < 1) {
                    let value = 'Introduce el usuario'
                    this.setState({ message: value })
    
                } 
                else if (this.state.password.length < 1){
                    let value = 'Introduce la contraseña'
                    this.setState({ message: value }) 
            }
            
        }
    }
    
    
    render() {
      
        return (

            <Container>
                
                <main >

                    <img alt="logo" className="logo" src={logo}></img>

                    <Row className="justify-content-center">

                        <Col md={{ span: 5 }}>

                         
                            
                            <Form className="formu" onSubmit={this.handleFormSubmit}>

                                <Form.Group>
                                    
                                    <Form.Label>Usuario</Form.Label>
                                    <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
                                
                                </Form.Group>

                                <Form.Group>
                                   
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                                
                                </Form.Group>

                                <div className=" justify-content-center">
                                   
                                    <Button variant="dark" type="submit">Acceder</Button>
                                </div>  

                            </Form>
                                    <>
                                   <div className="alert">{this.state.message?this.state.message.toString():null}</div>
                                   </>

                        </Col>

                    </Row> 

                </main>

            </Container>

        )
    }
}
export default Login