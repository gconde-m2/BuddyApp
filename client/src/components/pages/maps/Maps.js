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
      zoom: 17
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
      
    }
  }
  
  render() {
    
    return (
     
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyC5xEJjYqtgcgXboLnDMqtXa8QM8jT_eOY"}}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          
        </GoogleMapReact>
      </div>
    );
  }
}
export default Map