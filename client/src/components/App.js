import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Index from './pages/Index/Index'
import Navigation from './layout/navbar/Navbar'
import SignUp from './pages/signUp/SignUp'
import LogIn from './pages/logIn/LogIn'
import Maps from './pages/maps/Maps'
import Stadistics from './pages/stadistics/Stadistics'
import Donation from './pages/donation/Donation'
import Footer from './layout/footer/Footer'
import DogList from './pages/dogList/DogList'
import DogDetails from './pages/dogDetails/DogDetails'
import Profile from "./pages/profile/Profile"

import authService from './../service/auth.service'
console.log(authService)
class App extends Component {


  constructor() {
    super()
    this.state = {
      loggedInUser: undefined
    }
    this.authService = new authService()
  }
  componentDidMount = () => this.fetchUser()

  setTheUser = user => this.setState({ loggedInUser: user }, () => console.log('El usuario es', this.state.loggedInUser))

  fetchUser = () => {
    this.authService
      .isLoggedIn()
      .then(response => this.setState({ loggedInUser: response.data }))
      .catch(err => this.setState({ loggedInUser: null }))
  }
  render() {
    return (
      <>
        <Navigation setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser }   />
        <Switch>
          <Route path="/" exact render={() => <Index />} />
          <Route path ="/dogList" exact render={() => <DogList/>} />
          <Route path="/dogList/:dog_id"   render={props => <DogDetails {...props} />} />
          <Route path = "/signup"  exact render={props => <SignUp setTheUser={this.setTheUser} {...props}/>}></Route>
          <Route path = "/login"  render={props => <LogIn setTheUser={this.setTheUser} {...props} />} />
          <Route path = "/map"  render= {() => <Maps/>} />
          <Route path = "/stadistics"  render= {() => <Stadistics/>} />
          <Route path = "/donation"  render = {() => <Donation/>} />
          <Route path = "/profile"  render = {() => <Profile/>} />

        </Switch>
        <Footer/>
      </>
    );
  }
}

export default App;

