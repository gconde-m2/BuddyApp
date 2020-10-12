import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'

import dogsService from '../../../service/dogs.service'

import './Profile.css'
import perfilLogo from './perfil.png'
import Newdog from './newDog/NewDog'
import ProDogCard from './Pro-dog-card'

class Profile extends Component {

     constructor(props) {
         super(props)
         this.state = {
             dogs: [],
             user: undefined,
             showModal: false,
             showList: false
         }
         this.dogsService = new dogsService()

     }
     
        componentDidMount = () => this.loadDogs()
    
        loadDogs() {

          this.dogsService
            .getDogs()
            .then(response => { this.setState({ dogs: response.data }) })
            .catch(error => console.log('Error!', error))

        }
        handleformUser() {
        if (this.props.loggedInUser) {
            if (this.props.loggedInUser.associationName)
                return true
            else
                return false
        }
     }
    
        handleModal = showModal => this.setState({ showModal })
        dogfilter() {
            let aux = this.state.dogs.filter(elm => elm.owner === this.props.loggedInUser._id)
            if (this.state.showList === true)
                this.state.showList = false
            else
                this.state.showList = true
                this.setState({ dogs: aux })
           
        }

    render() {

        return (

            <Container fluid style={{marginLeft: '5%'}} className='main'>

                <h1 className="profile">Perfil</h1>



                {this.handleformUser() == true && <Container fluid>
                        
                    <Row style={{ textAlign: 'left' }} >
                        
                        <Col>
                                                            
                            <img className="logo-perfil" src={this.props.loggedInUser.imageUrl} />

                            <h2>¡Bienvenido {this.props.loggedInUser.username}!</h2>

                            <p>Eres el administrador de {this.props.loggedInUser.associationName}</p>

                            <p>Te uniste el {this.props.loggedInUser.createdAt.slice(0,10)}</p>

                            <p>Última actualización de tu perfil: {this.props.loggedInUser.updatedAt.slice(0,10)} </p>
                                
                        </Col>

                    </Row>

                    <Row style={{ textAlign: 'left' }} className='justify-content-start'>
                        
                        <Col>

                        <h3>Lista de perros añadidos por ti</h3>
                        
                        <button onClick={() => this.handleModal(true)} className='listBtn'>Nuevo perro</button>

                        <button onClick={() => { this.dogfilter() }} className='listBtn'>Lista de perros</button>
                        
                        <Row className='justify-content-around'>
                            
                            {this.state.showList && <>

                                {this.state.dogs.map(elm => <ProDogCard key={elm._id} {...elm} />)}

                            </>}

                        </Row>

                        <Modal size='lg'  show={this.state.showModal} onHide={() => this.handleModal(false)}>
                            
                            <Modal.Header closeButton></Modal.Header>

                            <Modal.Body >
                                
                                <Newdog setTheUser={this.props.setTheUser} loggedInUser={this.props.loggedInUser} {...this.props} closeModal={() => this.handleModal(false)} />

                            </Modal.Body>

                            </Modal>
                            
                        </Col>
                                                    
                    </Row>

                </Container>}

              

                {this.handleformUser() == false && <Container fluid>

                    <Row style={{ textAlign: 'left' }}>
                    
                        <Col>
                            
                            <img className="logo-perfil" src={perfilLogo} />

                            <h2>Bienvenido {this.props.loggedInUser.username}</h2>

                            <p>Te uniste el {this.props.loggedInUser.createdAt.slice(0,10)}</p>

                            <p>Última actualización de tu perfil: {this.props.loggedInUser.updatedAt.slice(0,10)} </p>

                        </Col>

                    </Row>
                
                </Container>}

                

                <Row>
                    
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }} className='button'>Volver</Link>
                
                </Row>


            </Container>

        )
    }
    
}

export default Profile