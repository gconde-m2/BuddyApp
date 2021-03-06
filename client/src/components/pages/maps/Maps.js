import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import Fade from 'react-reveal/Fade'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import './maps.css'
import UserIcon from './img/marcador.png'
import ASIcon from './img/asociaciones.png'


export default class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapIsReady: false,
      center: {
        lat: undefined,
        lng: undefined
      }
    };
  }

  componentDidMount() {
    
    const script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCrGy_pMf19tWr0zv-epIEy_0b6ejOVa58&libraries=places";
    script.async = true;
    script.defer = true;
    script.addEventListener('load', () => {
      this.setState({
        mapIsReady: true
      });
    });

    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(position => {
        console.log(position.coords.latitude, position.coords.longitude)
        this.setState({
          center: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        })
      })

    }
    document.body.appendChild(script);
  }

  componentDidUpdate() {
    var map;
    var infowindow;
    if (this.state.mapIsReady) {

      map = new window.google.maps.Map(document.getElementById('map'), {
        center: this.state.center,
        zoom: 12,
        mapTypeId: 'roadmap',
      });
      console.log(map)
      infowindow = new window.google.maps.InfoWindow();
      var request = {
        location: this.state.center,
        radius: 15000,
        name: ['protectora de animales']
      };
      var service = new window.google.maps.places.PlacesService(map);

      service.nearbySearch(request, function (results, status) {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {

            crearMarcador(results[i]);
          }
        }
      });
      var pinIcon = new window.google.maps.MarkerImage(
        UserIcon,
        null, 
        null, 
        null, 
        new window.google.maps.Size(42, 42)
      );
      const cityCircle = new window.google.maps.Circle({
        strokeColor: "rgba(239, 123, 69, 0.6)",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "rgba(239, 123, 69, 0.6)",
        fillOpacity: 0.35,
        map,
        center: this.state.center,
        radius: 16000,
      });
      new window.google.maps.Marker({
        map: map,
        position: this.state.center,
        icon: pinIcon,

      });

    }

    function crearMarcador(place) {
      console.log(place)
      var Icon = new window.google.maps.MarkerImage(
        ASIcon,
        null,
        null,
        null,
        new window.google.maps.Size(42, 42)
      );
      var marker = new window.google.maps.Marker({
        map: map,
        position: place.geometry.location,
        icon: Icon,
        animation: window.google.maps.Animation.DROP
      });


      window.google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent("<div><strong>" +
          place.name +
          "</strong><br>" +

          "<br>" +
          place.vicinity +
          "</div>");
        infowindow.open(map, this);

      });
    }
  }
  render() {
    return (

      <>
        
        <Fade clear delay={600}>
        
        <h1>Encuentra tu protectora más cercana</h1>

        <Container fluid>

          <Row>
            
            <div id="map" />
 
          </Row>

          <Row>

            <Link to={'/'} style={{ textDecoration: 'none', color: 'black', marginLeft: '5%', marginBottom: '200px', display: 'inline'}} className='button'>Volver</Link>

          </Row>

        </Container>
          
        </Fade>
        
      </>
    );
  }
}