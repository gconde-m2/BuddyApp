import React, { Component } from 'react'
import axios from 'axios'

import DogService from '../../../../service/dogs.service'
import UserService from '../../../../service/users.service'

import './contactform.css'

class ContactForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            
            user: this.props.loggedInUser ? this.props.loggedInUser._id : '',
            dog: {},
            owner: {},
        }
            
        this.dogService = new DogService()
            
        this.userService = new UserService()
    }

    componentDidMount = () => {
         
         this.dogService
             .getOneDog(this.props.match.params.dog_id)
             .then(response => {
                 
                 this.setState({ dog: response.data })
                
                 this.getOwner(response.data)
                })
             .catch(error => console.log('Error!', error))
         
        
     }
    
    getOwner = (dog) => {
        console.log(dog)
        this.userService
             .getOneUser(dog.owner)
             .then(response => this.setState({ owner: response.data }))
             .catch(error => console.log('Error!', error))
        console.log()
    }

    handleFormSubmit = async(e) => {

        e.preventDefault()

        const name = document.getElementById('name').value
        const emailUser = document.getElementById('emailUser').value
        const emailOwner = document.getElementById('emailOwner').value
        const subject = document.getElementById('subject').value
        const message = document.getElementById('message').value

        const form = await axios.post('http://localhost:5000/api/sendEmail', {
            name,
            emailUser,
            emailOwner,
            subject,
            message
        })

        this.endFormSubmit()
    }

    endFormSubmit() {

        this.props.closeModal()
    }


    resetForm() {
        
        document.getElementById('contact-form').reset();
        
    }


    render() {
        console.log(this.props)
        return (

            <>

            <form onSubmit={this.handleFormSubmit} id='contact-form' method='POST'>

                <label for='name'>Nombre</label>
                <input type='text' id='name' placeholder='Tu nombre'/> 

                <label for='emailUser'>De</label>
                <input type='email' id='emailUser' value={this.props.loggedInUser && this.props.loggedInUser.email} /> <br></br>

                <label for='emailOwner'>Para</label>
                <input type='email' id='emailOwner' value={this.state.owner.email} />

                <label for='subject'>Asunto</label>
                <input type='text' id='subject' value={this.state.dog.name} /> <br></br>

                <label for='message'>Mensaje</label>
                <textarea id='message' placeholder='Cuéntale a la protectora que estás interesad@ en adoptar y ellos se pondrán en contacto contigo. Mandando este email no te comprometes a nada, ¡en cualquier momento puedes cambiar de opinión!'></textarea> <br></br>
                    
                <button type='submit'>Enviar email</button>
        
            </form>
                
            </>
        )
    }
}

export default ContactForm