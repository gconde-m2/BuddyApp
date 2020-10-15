import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import Fade from 'react-reveal'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import UserService from '../../../service/users.service'

import './donationform.css'

class DonationForm extends Component {
    
    constructor() {
        super()
        this.state = {
            users: []
        }
        this.UserService = new UserService()

    }

    componentDidMount = () => this.loadUsers()

    loadUsers() {
        
        this.UserService
            .getUsers()
            .then(response => this.setState({ users: response.data }))
            .catch(error => console.log('Error!', error))
    
    }


    render() {

        return (

            <>
                
            <Fade clear>
            
                <Container fluid className='donate'>
                
                    <Row>
                    
                        <Col md={12}>
                        
                            <h1 style={{paddingLeft: '14%'}}>Haz tu donativo</h1>

                        </Col>

                    </Row>

                    <Row className='justify-content-center align-items-center'>
                    
                        <Col md={4}>

                            <form className='donation-form'>

                                <label style={{paddingRight: '30px'}}>Nombre</label>
                    
                                <input type='text' placeholder='Tu nombre' name='name'/> <br></br>

                        
                                <label>Apellidos</label>
                        
                                <input type='text' placeholder='Tus apellidos' name='surname'/> <br></br>


                                <label>Cantidad</label>

                                <input type='text' placeholder='Cantidad' name='quantity'/> <br></br>


                                <select name='associationName' style={{marginLeft: '15px', marginBottom: '80px'}}>
                    
                                    <option>Asociación</option>
                            
                                    <option value={this.state.users.map(elm => elm.associationName)}></option> <br></br>

                                </select> <br></br>


                                <Link to='/' style={{textDecoration: 'none', color: 'black', fontSize: '1.3em'}} className='link'>¡Haz tu donativo!</Link>

                            </form>
                        
                        </Col>

                        <Col md={5}>

                            <img src='https://cff2.earth.com/uploads/2018/02/09142100/The-bond-between-humans-and-dogs-dates-back-20000-years-1024x663.jpg' alt='dog and human' />

                        </Col>

                    </Row>

                    <Row>

                        <Link to={'/donation'} style={{textDecoration: 'none', color: 'black', marginLeft: '5%'}} className='button'>Volver</Link>

                    </Row>

                </Container>
                    
            </Fade>

            </>

        )
    }
}

export default DonationForm