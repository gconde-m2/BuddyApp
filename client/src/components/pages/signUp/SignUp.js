import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import AuthService from '../../../service/auth.service'
import FileService from '../../../service/files.service'

import './SignUp.css'

import logo from '../../layout/navbar/logoTitulo.png'

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
            username: '',
            password: '',
            email: '',
            cif: '',
            associationName: '',
            imageUrl:'',
            showUserForm: false,
            showAsocForm: false
            },
        message: undefined,
        uploadingImg: false,

        }  
        this.authService = new AuthService()
        this.fileService = new FileService()
    }
       

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ user: { ...this.state.user, [name]: value }})
    }

    handleFormSubmit = e => {

        e.preventDefault()

        this.authService
            .signup(this.state.user)
            .then(response => {
                
                this.props.setTheUser(response.data)
                this.props.history.push('/')
            })
            .catch(err => {
              
                this.setState({  message: err.response.data.message })
                
                console.log('Error:',  err )})
    }

    handleFormUser = e => {
        if (this.state.user.showAsocForm === false) {
            this.state.user.showUserForm === false ? e = true : e = false
            this.setState({ user: { ...this.state.user, showUserForm: e } })
        }
    }
    handleFormAsoc = e => {
        if (this.state.user.showUserForm === false) {
            this.state.user.showAsocForm === false ? e = true : e = false
            this.setState({ user: { ...this.state.user, showAsocForm: e }})
        }
    }

    handleImageUpload = e => {

        this.setState({ uploadingImg: true })

        const uploadData = new FormData()
         
        uploadData.append('imageUrl', e.target.files[0])

        this.fileService
            .uploadImage(uploadData)
            .then(response => this.setState({ user: { ...this.state.user, imageUrl: response.data.secure_url }, uploadingImg: null}))
            .catch(error => console.log('Error!', error))
         
    }


    render() {
       
        return (

            <>
                
            <Container className="buttons-sign">
                
                <Row className="justify-content-center">
                
                    <img className="logosign" src={logo} alt="Logo"></img>

                </Row>
                    
                <Row className="justify-content-center">
                        
                    <Col md={{ span: 6 }} style={{paddingLeft: '8%'}}>
                            
                        <Button onClick={() => this.handleFormUser(true)} className='firstBtn'>Crear cuenta como usuario</Button>
                        
                    </Col>
                        
                    <Col md={{ span: 6 }} style={{paddingLeft: '8%'}}>
                            
                        <Button onClick={() => this.handleFormAsoc(true)} className='firstBtn'>Crear cuenta como asociación</Button>
                        
                    
                    </Col>
                </Row>
                
            </Container>

                {this.state.user.showUserForm && <Container className="block">
                    
                    <main>
                        
                        <Row className="justify-content-center">
                            
                            <Col md={{ span: 5 }}>
                                
                                <h1 className="register-h1">Registro de usuario</h1>
                                
                                <Form onSubmit={this.handleFormSubmit} className="formu">
                                    
                                    <Form.Group>
                                        <Form.Label>Nombre de usuario</Form.Label>
                                        <Form.Control type="text" name="username" onChange={this.handleInputChange} />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="text" name="email" onChange={this.handleInputChange} />
                                    </Form.Group>
                                    
                                    <Form.Group>
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control type="password" name="password" onChange={this.handleInputChange} />
                                    </Form.Group>
                                    
                                    <div className="text-center">
                                    
                                        <Button variant="dark" type="submit" className="firstBtn">Registrarme</Button>
                                    
                                    </div>
                                    <p className="alert">{this.state.message}</p>
                                </Form>
                            
                            </Col>
                        
                        </Row>
                    
                    </main>
                
                </Container>}
                
                {this.state.user.showAsocForm && <Container className="block">
                    
                    <main>
                        
                        <Row className="justify-content-center">
                            
                            <Col md={{ span: 5 }}>
                               
                                <h1 className="register-h1">Registro de Asociación</h1>
                                
                                <Form onSubmit={this.handleFormSubmit} className="formu">
                                    
                                    <Form.Group>
                                        <Form.Label>Nombre de usuario</Form.Label>
                                        <Form.Control type="text" name="username" onChange={this.handleInputChange} />
                                    </Form.Group>
                                    
                                    <Form.Group>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="text" name="email"  onChange={this.handleInputChange} />
                                    </Form.Group>
                                    
                                    <Form.Group>
                                        <Form.Label>Asociación</Form.Label>
                                        <Form.Control type="text" name="associationName" onChange={this.handleInputChange} />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>CIF</Form.Label>
                                        <Form.Control type="text" name="cif"  onChange={this.handleInputChange} />
                                    </Form.Group>
                                    
                                    <Form.Group>
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control type="password" name="password" onChange={this.handleInputChange} />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Seleccionar imagen </Form.Label>
                                        <Form.Control type="file" name="imageUrl"  onChange={this.handleImageUpload}/>
                                    </Form.Group>
                                    
                                    <div className="text-center">
                                    
                                        <Button variant="dark" type="submit" className="firstBtn">Registrarme</Button>
                                    
                                    </div>
                                    <p className="alert">{this.state.message}</p>
                                </Form>
                            
                            </Col>
                        
                        </Row>
                    
                    </main>
                
                </Container>}

            </>
        )
    }
}

export default SignUp