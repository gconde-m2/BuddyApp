import React, {Component,useState} from 'react'

import GoogleMapReact from 'google-map-react';



class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      center: {
        lat: undefined,
        lng: undefined
      },
      zoom: 11
    }
    
  }
  async componentDidMount() {
 
    if (navigator.geolocation) {
      
        await navigator.geolocation.getCurrentPosition(position =>{

        console.log(position.coords.latitude)
        this.setState({
          center:{lat:position.coords.latitude,lng:position.coords.longitude}
        })
       })

       //console.log(position)
      //this.center.setState({ lat : lat,lng : lng})
      
      
    }
  }
  
  render() {
    
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "d"}}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          
        </GoogleMapReact>
      </div>
    );
  }
}
export default Map