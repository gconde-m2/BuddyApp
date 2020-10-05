import React, { Component } from 'react'

import DogCard from './DogCard'
import './DogList.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import dogsService from '../../../service/dogs.service'

import { Link } from 'react-router-dom'

class DogList extends Component {

    constructor() {
        super()
        this.state = {
            dogs: []
        }
        this.dogsService = new dogsService()
    }

    componentDidMount = () => this.loadDogs()

    loadDogs() {
        this.dogsService
            .getDogs()
            .then(response => this.setState({dogs: response.data}))
            .catch(error => console.log('Error!', error))
    }



    render() {

        return (

            <Container fluid style={{width: '85%', paddingLeft: '7%'}}>
            
                <h1>Lista de perretes en adopción</h1> 
                
                <Row className='justify-content-around'>

                    {this.state.dogs.map(elm => <DogCard key={elm._id} {...elm} />)}

                </Row>

                <Row>

                    <Link to={'/'} style={{textDecoration: 'none', color: 'black'}} className='button'>Volver</Link>

                </Row>
                    
            </Container>                
           
        )

    }
}

export default DogList