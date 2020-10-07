import React, { Component } from 'react'
import Fade from 'react-reveal'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import donation from './donacion.png'
import volunteer from './voluntario.png'

import './Donation.css'

class Donation extends Component {

    constructor() {
        super()
    }

    render() {
        return (

            <>
            
            <Fade clear duration={800}>
         
            <Container fluid className='donation'>
                
                <h1>Te necesitamos</h1>   

                <Row className='justify-content-center'>
                    
                    <Col md={8}>
                    
                        <h3>España es uno de los primeros países europeos en la lista de abandonos de perros y gatos</h3>

                        <p>En el año 2018, las protectoras rescataron y acogieron a más de <strong>138.000 animales</strong> abandonados. Durante el confinamiento estas entidades han abordado sus necesidades con muchos menos recursos, por lo que ahora se encuentran al borde del colapso.</p>
                    
                        <p>Todos estos meses en los que las adopciones se han visto paralizadas han hecho que muchos perros y gatos no hayan podido encontrar un hogar, ni tampoco disfrutar de los paseos y compañía que tanto necesitan.</p>
                     
                        <p style={{fontWeight: '600'}}>Es hora de volver a ponernos en marcha y ayudar a nuestros compañeros de cuatro patas a tener una vida mejor.</p>

                        
                    </Col>

                </Row>

                <Row className='align-items-baseline justify-content-center text-align-center'>

                    <Col md={3} style={{paddingLeft: '10%'}}>
                            
                            <img src={volunteer} alt='Make a donation'/>

                            <Link to={'/map'} className='link' style={{ textDecoration: 'none', color: 'black', fontSize: '2em' }}>Hazte voluntario</Link>
                            
                    </Col>

                    <Col md={3} style={{paddingLeft: '5%'}}>
                            
                            <img src={donation} alt='Make a donation'/>

                            <Link  to={'/donation/donationForm'} className='link' style={{textDecoration: 'none', color: 'black', fontSize: '2em'}}>Haz una donación</Link>

                    </Col>

                </Row>

                 <Row>

                    <Link to={'/'} style={{textDecoration: 'none', color: 'black', marginLeft: '10%'}} className='button'>Volver</Link>

                </Row>

            </Container>
                    
            </Fade>
                
            </>
        )
        
    }
}

export default Donation