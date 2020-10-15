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

            showModal: false,
            
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


        return (
            <>
                <Navbar collapseOnSelect expand="lg" variant="dark">
                    <Nav.Link href="#" ><Link to='/'> <img alt="Logotipo" src={logoTitulo} className='logoNav' /> </Link></Nav.Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
                    <Navbar.Collapse className=" right-menu" id="responsive-navbar-nav ">

                        <Nav >
                        <Nav.Link href="#"> <Link className='navlink' style={{ textDecoration: 'none', color: 'black' }}  to="/dogList" >Adopta</Link></Nav.Link>
                  <Nav.Link href="#"><Link className='navlink' style={{ textDecoration: 'none', color: 'black' }} to="/donation">Ayuda</Link></Nav.Link>
                  <Nav.Link href="#"> <Link className='navlink' style={{ textDecoration: 'none', color: 'black' }} to="/map">Mapa</Link></Nav.Link>
                  <Nav.Link href="#"><Link className='navlink' style={{ textDecoration: 'none', color: 'black' }} to="/stadistics">Datos</Link></Nav.Link>
                  {!this.props.loggedInUser && <Nav.Link href="#"><div className="navlink" onClick={() => this.handleModal(true)}  variant="dark" size="sm">Login</div></Nav.Link>}
                  {!this.props.loggedInUser && <Nav.Link href="#"><Link className='navlink' style={{ textDecoration: 'none', color: 'black' }} to="/signup">Registro</Link></Nav.Link>}
                  {this.props.loggedInUser && <Nav.Link href="#"><Link to="/profile" className="navlink" style={{ textDecoration: 'none', color: 'black' }}>Perfil</Link></Nav.Link>}          
                  {this.props.loggedInUser && <Nav.Link href="#"><div className="navlink" onClick={this.logoutUser}>Cerrar sesión</div></Nav.Link>}         

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>


                <Modal className="modal-login" show={this.state.showModal} onHide={() => this.handleModal(false)}>

                    <Modal.Header closeButton>

                        <Modal.Title >Login</Modal.Title>

                    </Modal.Header>

                    <Modal.Body >

                        <Login show={this.state.showModal} setTheUser={this.props.setTheUser} loggedInUser={this.props.loggedInUser} closeModal={() => this.handleModal(false)} />

                    </Modal.Body>

                </Modal>

            </>

        )
    }
}