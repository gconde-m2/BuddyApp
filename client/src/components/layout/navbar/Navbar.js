import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import logoTitulo from './logoTitulo.png'

import './Navbar.css'

import authService from './../../../service/auth.service'
import Login from '../../pages/logIn/LogIn'


import Modal from 'react-bootstrap/Modal'

export default class extends Component {

    constructor(props) {
        super(props)
        this.state = {
        
            showModal: false
        }
        this.authService = new authService()
    }
    logoutUser = () => {
        this.authService
            .logout()
            .then(() => this.props.setTheUser(null))
            .catch(err => console.log('ERRORR!!:', err))
    }

    handleModal = showModal => this.setState({ showModal })
    render() {
        //console.log(this.props)
        return (

            <>
                
            <Navbar className='navbar'>
                
              <Link to='/'> <img alt="Logotipo" src={logoTitulo} className='logoNav'/> </Link>
            
              <Nav className='navigation'>

                    <Link className='navlink' style={{textDecoration: 'none', color: 'black'}} to="/dogList">Adopta</Link>
                    <Link className='navlink' style={{textDecoration: 'none', color: 'black'}} to="/donation">Ayuda</Link>
                    <Link className='navlink' style={{textDecoration: 'none', color: 'black'}} to="/map">Mapa</Link>
                    <Link className='navlink' style={{textDecoration: 'none', color: 'black'}} to="/stadistics">Datos</Link>
                    {!this.props.loggedInUser && <Link className='navlink' style={{textDecoration: 'none', color: 'black'}} to="/signup">Registro</Link>}
                    {!this.props.loggedInUser && <div className="navlink" onClick={() => this.handleModal(true)} style={{ marginBottom: '20px' }} variant="dark" size="sm">Login</div>}
                    {this.props.loggedInUser && <Link to = "/profile" className="navlink"  style={{textDecoration: 'none', color: 'black'}}>Perfil</Link>}
                    {this.props.loggedInUser && <div className="navlink" onClick={this.logoutUser}>Cerrar sesión</div>}
  
                </Nav>
                    
            </Navbar>
                
            <Modal show={this.state.showModal} onHide={() => this.handleModal(false)}>
                    
                <Modal.Header closeButton>
                        
                    <Modal.Title >Login</Modal.Title>

                </Modal.Header>

                <Modal.Body >
                        
                    <Login setTheUser={this.props.setTheUser} loggedInUser={this.props.loggedInUser} closeModal={() => this.handleModal(false)} />
                        
                </Modal.Body>

            </Modal>
                
            </>
                   
        )
    }
}