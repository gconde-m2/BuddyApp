import React, { Component } from 'react'

import Fade from 'react-reveal'

import { Link } from 'react-router-dom'

import DogService from '../../../../service/dogs.service'
import FileService from '../../../../service/files.service'
import Alert from '../../../shared/alert/Alert'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import './NewDog.css'


class NewDog extends Component {

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
            uploadingImg: false,
            showToast: false,
            showModal: false
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
            .newDog(this.state.dog)
            .then(() => {
                this.props.closeModal()
                this.props.history.push('/profile')
            })
            .catch(error => console.log('Error!', error))
        
        this.setState({ showToast: true })
    }


     handleImageUpload = e => {

        this.setState({ uploadingImg: true })

        const uploadData = new FormData()
         
        uploadData.append('imageUrl', e.target.files[0])

        this.fileService
            .uploadImage(uploadData)
            .then(response => this.setState({
                dog: { ...this.state.dog, imageUrl: response.data.secure_url },
                uploadingImg: null
            }))
            .catch(error => console.log('Error!', error))
         
    }

    render() {

        return (
            
            <>
                
            <Fade clear duration={800} >
                    
                <Container>

                    <Row>

                        <h1 style={{textAlign: 'center', marginTop: 0}}>Añade un nuevo perrito a la lista de adopciones</h1>
                            
                    </Row>

                    <Row className='formulary'>

                        <form onSubmit={this.handleFormSubmit}>
                                

                        <label >Nombre</label>
                    
                        <input type='text' placeholder='Nombre' name='name'  onChange={this.handleInputChange}/> <br></br>


                        <label >Años</label>
                    
                        <input type='number' placeholder='Años' name='age'  onChange={this.handleInputChange}/> <br></br>


                        <label >Raza</label>
                    
                        <input type='text' placeholder='Raza' name='race'  onChange={this.handleInputChange}/> <br></br>
                    

                        <label >Descripción</label>
                    
                        <input type='text' name='description' placeholder='Descripción' value={this.state.dog.description} onChange={this.handleInputChange}/> <br></br>


                        <select select name = 'gender'  onChange = { this.handleInputChange } >
                        
                            <option value=''>Sexo</option>

                            <option value='Macho'>Macho</option>

                            <option value='Hembra'>Hembra</option>

                        </select> 
                                
                        <br></br>
                                

                        <label style={{paddingBottom: '15px'}}>Seleccionar imagen</label>

                        <input type="file" name="imageUrl"  onChange={this.handleImageUpload} />
                                
                         <br></br>

                                <button type='submit' disabled={this.state.uploadingImg}>{this.state.uploadingImg ? 'Añadiendo...' : 'Añadir perro'}</button>

                                
                        </form>

                    </Row>

                    <Row>

                        <Link to={'/profile'} style={{textDecoration: 'none', color: 'black'}} className='button'>Volver</Link>

                    </Row>

                    
                    {this.state.showToast && <Alert title='' text='¡Has añadido un perro a la lista de adopciones!' />}
                        

                </Container>
                    
            </Fade>
                
            </>

        )
    }
}

export default NewDog