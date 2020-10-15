import React from 'react'
import { Link } from 'react-router-dom'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
// import Button from 'react-bootstrap/Button'

import './dogcard.css'


const DogCard = ({ _id, name, imageUrl }) => {

    return (

        <Col md={4} className='dog-card'>
            
            <img className='dogPhoto' src={imageUrl} alt="doggy"/>
            
            <Row className='justify-content-start'>

                <Col sm={9} md={8} >
                    
                    <div className="dogCard-div">

                    <h3>{name}</h3>
                    
                    <Link  to={`/dogList/${_id}`} className='link' style={{textDecoration: 'none', color: 'black'}}>Ver detalles</Link>

                    </div>
                    
                </Col>

            </Row>

       </Col>

    )
}

export default DogCard
