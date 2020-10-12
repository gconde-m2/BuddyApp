import React, { Component } from 'react'
import axios from 'axios'

import DogService from '../../../../service/dogs.service'
import UserService from '../../../../service/users.service'

class NodemailerForm extends Component {

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
             .then(response => this.setState({ dog: response.data }))
             .catch(error => console.log('Error!', error))
         
        //   this.getOwner()
        
     }
    
    getOwner = () => {
        
        this.userService
             .getOneUser(this.state.dog.owner)
             .then(response => this.setState({ owner: response.data }))
             .catch(error => console.log('Error!', error))
        
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

        return (

            <>

            <form onSubmit={this.handleFormSubmit} id='contact-form' method='POST'>

                    <label for='name'>Nombre</label>
                    <input type='text' id='name' placeholder='Tu nombre'/>

                    <label for='emailUser'>De</label>
                    <input type='email' id='emailUser' placeholder={this.state.user.email} />

                    <label for='emailOwner'>Para</label>
                    <input type='email' id='emailOwner' placeholder={this.state.owner.email} />

                    <label for='subject'>Asunto</label>
                    <input type='text' id='subject' placeholder={this.state.dog.name} />

                    <label for='message'>Mensaje</label>
                    <textarea id='message' placeholder='Cuéntale a la protectora que estás interesad@ en adoptar y ellos se pondrán en contacto contigo. Mandando este email no te comprometes a nada, ¡en cualquier momento puedes cambiar de opinión!'></textarea>
                    
                    <button type='submit'>Enviar email</button>

            </form>
                
            </>
        )
    }
}

export default NodemailerForm