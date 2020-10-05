import React,  { Component } from 'react'

import { Link } from 'react-router-dom'

import dogService from '../../../service/dogs.service'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './DogDetails.css'

class DogDetails extends Component{
    
    constructor() {
        super()
        this.state = {}
        this.dogService = new dogService()
    }

    componentDidMount = () => {
        this.dogService
            .getOneDog(this.props.match.params.dog_id)
            .then(response => this.setState(response.data))
            .catch(error => console.log('Error!', error))
    }
    

    render() {

        return (
            
            <Container >

                <h1>{this.state.name}</h1>

                <Row className='align-items-center' style={{marginBottom: '50px'}}>

                    <Col md={7}>

                        <img className='dogPhoto' src={this.state.imageUrl} alt='Doggy image' />

                    </Col>

                    <Col md={5}>

                        <article >

                            <p>Edad: {this.state.age} years</p>

                            <p>Sexo: {this.state.gender}</p>

                            <p>Raza: {this.state.race}</p>

                            <p style={{marginBottom: '40px'}}>Cómo soy: {this.state.description}</p>

                            <Link to={`/dogList/${this.state.id}/adopt`} style={{ textDecoration: 'none', color: 'black' }} className='details-link'>¡Adóptame!</Link>
                            
                            {/* Link para añadir a favoritos */}

                            {/* Link para encontrar la ubicacion del perrito? */}

                        </article>

                    </Col>

                </Row>

                <Row>

                    <Link to={'/dogList'} style={{textDecoration: 'none', color: 'black', fontSize: '2em'}} className='button'>Volver</Link>

                </Row>

            </Container>
        )
    }

}

export default DogDetails