import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import authService from '../../../service/auth.service'
import './signup.css'

import logo from '../../layout/navbar/logoTitulo.png'

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            email: '',
            cif: '',
            associationName: '',
            image:'',
            showUserForm: false,
            showAsocForm: false
        }
        this.authService = new authService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {

        e.preventDefault()

        this.authService
            .signup(this.state)
            .then(response => {
                this.props.setTheUser(response.data)
                this.props.history.push('/')
            })
            .catch(err => console.log('Error:', { err }))
    }

    handleFormUser = e => {
        if (this.state.showAsocForm == false) {
            this.state.showUserForm == false ? e = true : e = false
            this.setState({ showUserForm: e })
        }
    }
    handleFormAsoc = e => {
        if (this.state.showUserForm == false) {
            this.state.showAsocForm == false ? e = true : e = false
            this.setState({ showAsocForm: e })
        }
    }

    render() {
        console.log(this.showUserForm)
        return (

            <>
            <div className="logosign">
                <img  src={logo}></img>

            </div>
                <Container className=" container-fluid  buttons-sign">
                    <Row className="justify-content-center">
                        <Col md={{ span: 6 }}className="col text-center col-8">
                            <Button onClick={() => this.handleFormUser(true)} >crear cuenta como usuario</Button>
                        </Col >
                        <Col md={{ span: 6 }} className="col text-center col-6">
                            <Button onClick={() => this.handleFormAsoc(true)} >crear cuenta como asociación</Button>
                        </Col>
                    </Row>
                </Container >
                {this.state.showUserForm && <Container className="block">
                    <main>
                        <Row className="justify-content-center formu">
                            <Col md={{ span: 5 }}>
                                <h1 className="register-h1">Registro de usuario</h1>
                                <Form onSubmit={this.handleFormSubmit}>
                                    <Form.Group>
                                        <Form.Label>Nombre de usuario</Form.Label>
                                        <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="text" name="email" value={this.state.email} onChange={this.handleInputChange} />
                                    </Form.Group>
                                    <Form.Group>
                                    
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                                    </Form.Group>
                                    <div className="col text-center">
                                    <Button variant="dark" type="submit">Registrarme</Button>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </main>
                </Container>}
                {this.state.showAsocForm && <Container className="block">
                    <main>
                        <Row className="justify-content-center formu">
                            <Col md={{ span: 5 }}>
                                <h1 className="register-h1">Registro de Asociación</h1>
                                <Form onSubmit={this.handleFormSubmit}>
                                    <Form.Group>
                                        <Form.Label>Nombre de usuario</Form.Label>
                                        <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="text" name="email" value={this.state.email} onChange={this.handleInputChange} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Asociación</Form.Label>
                                        <Form.Control type="text" name="associationName" value={this.state.associationName} onChange={this.handleInputChange} />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>CIF</Form.Label>
                                        <Form.Control type="text" name="cif" value={this.state.cif} onChange={this.handleInputChange} />
                                    </Form.Group>
                                    
                                    <Form.Group>
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                                    </Form.Group>
                                    <div className="col text-center">
                                    <Button variant="dark" type="submit">Registrarme</Button>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </main>
                </Container>}

            </>
        )
    }
}

export default Signup