import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'

import { Link } from 'react-router-dom'

import dogService from '../../../service/dogs.service'
import NodemailerForm from './nodemailer/NodemailerForm'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'

import './DogDetails.css'
import dcha from './dcha.png'
import izqda from './izqda.png'

class DogDetails extends Component{
    
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            dog: ''
        }
        this.dogService = new dogService()
    }

    componentDidMount = () => {

        this.dogService
            .getOneDog(this.props.match.params.dog_id)
            .then(response => this.setState({ dog: response.data }))
            .catch(error => console.log('Error!', error))
    }

    handleModal = showModal => this.setState({ showModal })

    

    render() {

        return (
                
            <Container fluid>
                    
                <Fade clear duration={2000}>

                    <h1 style={{ marginLeft: '5%' }}>{this.state.dog.name}</h1>
                    
                </Fade>

                <Row className='align-items-center justify-content-center' style={{marginBottom: '50px'}}>

                    <Col md={3}>
                        
                        <Fade clear duration={2000}>
                        
                            <img className='dogPhoto' src={this.state.dog.imageUrl} alt='Doggy image' />
                            
                        </Fade>

                    </Col>

                    <Col md={7}>
                        
                        <Fade clear duration={2000}>

                        <article >

                            <p>Edad: {this.state.dog.age} </p>

                            <p>Sexo: {this.state.dog.gender}</p>

                            <p>Raza: {this.state.dog.race}</p>

                            <p style={{marginBottom: '40px', width: '60%'}}>Cómo soy: {this.state.dog.description}</p>

                            <button  onClick={() => this.handleModal(true)} className='details-link'>¡Adóptame!</button>
                            
                            </article>
                            
                        </Fade>

                         <Modal size='lg'  show={this.state.showModal} onHide={() => this.handleModal(false)}>
                            
                            <Modal.Header closeButton></Modal.Header>

                            <Modal.Body >
                                
                                <NodemailerForm setTheUser={this.props.setTheUser} loggedInUser={this.props.loggedInUser} {...this.props} closeModal={() => this.handleModal(false)} />

                            </Modal.Body>

                            </Modal>

                    </Col>

                    <Fade clear delay = {1300}>

                        <img src={izqda} alt='patita de perro' id='footprint1' />

                    </Fade>

                    <Fade Fade clear delay = {1000} >

                        <img src={dcha} alt='patita de perro' id='footprint2' />

                    </Fade>

                     <Fade Fade clear delay = {700} >

                        <img src={izqda} alt='patita de perro' id='footprint3' />

                    </Fade>

                     <Fade Fade clear delay = {400} >

                        <img src={dcha} alt='patita de perro' id='footprint4' />

                    </Fade>

                </Row>

                <Row>

                    <Link to={'/dogList'} style={{textDecoration: 'none', color: 'black', fontSize: '2em', marginLeft: '5%'}} className='button'>Volver</Link>

                </Row>
                 
            </Container>
        )
    }

}

export default DogDetails