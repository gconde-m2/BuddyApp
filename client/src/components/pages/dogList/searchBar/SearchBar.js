import React, { Component } from 'react'

import './SearchBar.css'

class SearchBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sex: '',
            age: '',
        }
    }
    

    handleChangeSex = e => {
            
        const newState = { sex: e.target.value }

        this.setState(newState, () => this.props.filterMethod(this.state.sex))
            
        // this.setState(newState, () => this.props.filterMethod(this.state.age))
        // this.setState(newState2, () => this.props.filterMethod(this.state.sex))

        // let newState = e.target.name === 'sex' ? { sex: e.target.value } : { age: e.target.value }

    }
    
    handleChangeAge = e => { 

        const newState = { age: e.target.value }
        
        this.setState(newState, () => this.props.filterMethodAge(this.state.age))
 
    }


    // handleInputChange = e => {
    //     let { name, value } = e.target
    //     this.setState({ [name]: value })
    //     this.setState(this.state, () => this.props.filterMethod(this.searchDogs))
    // }
    

    render() {
        return (
            
            <div className = 'searchForm'>

                <h4>Filtra los resultados</h4>

                <form>

                    <select name='sex' onChange={this.handleChangeSex} >
                        
                        {/* <select name = 'sex' onChange = { this.handleInputChange } > */}
                        
                        <option value=''>Sexo</option>

                        <option value='Macho'>Macho</option>

                        <option value='Hembra'>Hembra</option>

                    </select>

                    <label>Años</label>
                    
                    <input type='text' onChange={this.handleChangeAge} />

                    {/* <input type='text'  onChange={this.handleInputChange} /> */}

                </form>

            </div>
        )
    }
}

export default SearchBar