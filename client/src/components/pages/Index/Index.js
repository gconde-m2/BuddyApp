import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-router-dom'

import Vivus from 'vivus'
import ReactVivus from 'react-vivus'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'

import './Index.css'
import buddy from './Buddy.png'
import footprint from './footprint.svg'
import animatedFootprint from './footprint_animated.svg'
class Index extends Component {

    constructor() {
        super()
    }

    // componentDidMount() {
        
    //     new Vivus('animatedFootprint', { duration: 200, file: animatedFootprint, animTimingFunction: Vivus.EASE }, null)

    // }

    render() {
        return (
            <>
                <Container className='section1'>
                    
                    <Fade clear>
                
                    <Row>
                    
                        <Col>
                        
                            <Carousel className="carrous">
                            
                                <Carousel.Item >
                                
                                    <img
                                        className="d-block w-100 img-dog carousel-img"
                                        src = "https://scx2.b-cdn.net/gfx/news/hires/2020/dog.jpg"
                                        alt="First slide"
                                    />

                                </Carousel.Item>
                                    
                                <Carousel.Item >
                                
                                    <img
                                        className="d-block w-100 img-dog carousel-img"
                                        src = "https://i.pinimg.com/originals/2f/fc/61/2ffc61b482dc43ed094272921e64ca22.jpg"
                                        alt="Second slide"
                                    />

                                </Carousel.Item>

                                <Carousel.Item >
                                
                                    <img
                                        className="d-block w-100 img-dog"
                                        src="https://www.redaccionmedica.com/images/destacados/coronavirus-perros-no-necesitan-mascarillas-porque-no-se-contagian--5615.jpg"
                                        alt="Third slide"
                                    />
                                
                                </Carousel.Item>

                            </Carousel>

                        </Col>
                        

                    </Row>

                    <p style={{ marginBottom: '60px', fontWeight: '200' }}>No todas las personas saben cómo amar a un perro, pero todos los perros saben cómo amar a una persona</p>

                        <Link to={'/dogList'} style={{ textDecoration: 'none', color: 'black' }} className='button-adopta'>¡Adopta!</Link>
                        
                    </Fade>

                </Container>

                <Container fluid className='section2'>
                
                    <Fade cascade>
                
                        <Row className='justify-content-center align-items-center'>
                    
                            <Col md={5}>
                        
                                <p style={{ width: '80%' }}>"Podemos juzgar el corazón de un hombre por cómo trata a los animales"<span style={{ marginTop: '20px', display: 'block' }}>Immanuel Kant</span></p>
                        
                            </Col>

                            <Col md={2}>
                                
                                {/* <svg id='footprint'></svg> */}

                                <img src={animatedFootprint} alt='Dog footprint' style={{height: '300px', width:'300px'}}/>
           
                                {/* <ReactVivus id='footprint' option={{animTimingFunction: 'EASE', type: 'oneByOne', file: footprint, onReady: console.log, }} style={{ height: '400px', width: '400px' }} callback={console.log}/> */}

                            </Col>

                        </Row>
                    
                    </Fade>

                </Container>

                <Container fluid>
                
                    <Row className='justify-content-center'>
                    
                        <Col md={7} style={{marginRight: '8%'}}>

                            <Fade left>

                                <img alt="Dog background" src={buddy} className='background' />
                            
                            </Fade>
                        
                        </Col>
                    
                    </Row>

                </Container>

            </>
        )
    }
}

export default Index