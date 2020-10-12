import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'

import { Link } from 'react-router-dom'

import dogService from '../../../service/dogs.service'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import '../dogDetails/DogDetails.css'
import dcha from '../dogDetails/dcha.png'
import izqda from '../dogDetails/izqda.png'
import DogService from '../../../service/dogs.service'
import FileService from '../../../service/files.service'
class ProDogDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dog: {
                name: '',
                age: '',
                race: '',
                gender: '',
                description: '',
                imageUrl: '',
                owner: this.props.loggedInUser ? this.props.loggedInUser._id : ''
            },
            uploadingImg: false
        }

        this.dogService = new DogService()

        this.fileService = new FileService()
    }
    
    handleInputChange = e => {

        const { name, value } = e.target

        this.setState({ dog: { ...this.state.dog, [name]: value } })
    }

    handleFormSubmit = e => {

        e.preventDefault()
        
        this.dogService
            .editDog(this.props.match.params.dog_id,this.state.dog)
            .then(() => this.props.history.push('/profile'))
            .catch(error => console.log('Error!', error))
    }
    handleDelete = e => {

        e.preventDefault()
       
        this.dogService
            .deleteDog(this.props.match.params.dog_id)
            .then(() => this.props.history.push('/profile'))
            .catch(error => console.log('Error!', error))
    }


    handleImageUpload = e => {

        this.setState({ uploadingImg: true })

        const uploadData = new FormData()

        uploadData.append('imageUrl', e.target.files[0])

        this.filesService
            .uploadImage(uploadData)
            .then(response => this.setState({
                dog: { ...this.state.dog, imageUrl: response.data.secure_url },
                uploadingImage: null
            }))
            .catch(error => console.log('Error!', error))

    }
    componentDidMount = () => {
        this.dogService
            .getOneDog(this.props.match.params.dog_id)
            .then(response => this.setState(response.data))
            .catch(error => console.log('Error!', error))
    }



    render() {

        return (

            <Container fluid>

                <Fade clear duration={2000}>

                    <h1 style={{ marginLeft: '5%' }}>{this.state.name}</h1>

                </Fade>

                <Row className='align-items-center justify-content-center' style={{ marginBottom: '50px' }}>

                    <Col md={3}>

                        <Fade clear duration={2000}>

                            <img className='dogPhoto' src={this.state.imageUrl} alt='Doggy image' />

                        </Fade>

                    </Col>

                    <Col md={7}>

                        <Fade clear duration={2000}>

                            <form onSubmit={this.handleFormSubmit}>

                                <label>Nombre</label>

                                <input type='text' placeholder={this.state.name} name='name' onChange={this.handleInputChange} /> <br></br>


                                <label>AÃ±os</label>

                                <input type='number' placeholder={this.state.age}  name='age' onChange={this.handleInputChange} /> <br></br>


                                <label>Raza</label>

                                <input type='text' placeholder={this.state.race}  name='race' onChange={this.handleInputChange} /> <br></br>


                                <label>DescripciÃ³n</label>

                                <input type='text' name="description" placeholder={this.state.description}  onChange={this.handleInputChange} /> <br></br>


                                <select select name='gender' onChange={this.handleInputChange} >

                                    <option value=''>Sexo</option>

                                    <option value='Macho'>Macho</option>

                                    <option value='Hembra'>Hembra</option>

                                </select>


                                <label>Seleccionar imagen</label>

                                <input type="file" name="imageUrl" onChange={this.handleImageUpload} />


                                <button className='button' type='submit' disabled={this.state.uploadingImage}>{this.state.uploadingImage ? 'modificando...' : 'Modificar'}</button>

                            </form>
                                <button   onClick={ this.handleDelete}className='button' >Borrar</button>

                        </Fade>

                    </Col>

                    <Fade clear delay={1300}>

                        <img src={izqda} alt='patita de perro' id='footprint1' />

                    </Fade>

                    <Fade Fade clear delay={1000} >

                        <img src={dcha} alt='patita de perro' id='footprint2' />

                    </Fade>

                    <Fade Fade clear delay={700} >

                        <img src={izqda} alt='patita de perro' id='footprint3' />

                    </Fade>

                    <Fade Fade clear delay={400} >

                        <img src={dcha} alt='patita de perro' id='footprint4' />

                    </Fade>

                </Row>

                <Row>

                    <Link to={'/profile'} style={{ textDecoration: 'none', color: 'black', fontSize: '2em', marginLeft: '5%' }} className='button'>Volver</Link>

                </Row>

            </Container>
        )
    }

}

export default ProDogDetails