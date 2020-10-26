import axios from 'axios'

export default class DogsService {

    constructor() {
        this.api = axios.create({
            baseURL: process.env.REACT_APP_API_URL,
            // withCredentials: true
        })
    }

    getDogs = () => this.api.get('/getDogs')
    getOneDog = id => this.api.get(`/getOneDog/${id}`)
    newDog = dog => this.api.post('newDog', dog)
    editDog = (id, dog) => this.api.put(`/editDog/${id}`, dog)
    deleteDog = (id) => this.api.post(`/${id}/delete`)
}