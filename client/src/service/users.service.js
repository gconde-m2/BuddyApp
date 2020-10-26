import axios from 'axios'

export default class UsersService {

    constructor() {
        this.api = axios.create({
            baseURL: process.env.REACT_APP_API_URL,
            // withCredentials: true
        })
    }

    getUsers = () => this.api.get('/getUsers')
    getOneUser = id => this.api.get(`/getOneUser/${id}`)
    editUser = (id, user) => this.api.put(`/editUser/${id}`, user)
    deleteUser = (id) => this.api.get(`/${id}/delete`)
}