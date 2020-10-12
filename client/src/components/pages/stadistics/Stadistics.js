import React, { Component } from 'react'
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2'
import Fade from 'react-reveal/Fade'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import destiny from '../../../data/destiny'
import evolution from '../../../data/evolution'
import main from '../../../data/main'
import tax from '../../../data/tax'

const state = {
  labels: [],

  datasets: [
    {
      label: 'nº de perros',
      backgroundColor: 'rgba(239, 123, 69, 0.4)',
      borderColor: 'rgba(0,0,0,9)',
      borderWidth: 1,
      data: []
    }
  ]
}
const state2 = {
  labels: [],
  datasets: [
    {
      label: 'destino',
      backgroundColor: [
        '#C2CFFF',
        '#CB99FF',
        '#FFC3BD',
        '#C7C8FF',
        '#FFAEEF',
        '#80A2FF',
        '#ADA8FF',
        '#FFC8B8',
        '#FFCCF3',

      ],
      hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        '#175000',
        '#003350',
        '#35014F'
      ],
      data: []
    }
  ]
}
const state3 = {
  labels: [],

  datasets: [
    {
      label: 'destino',

      backgroundColor:
        'rgba(239, 123, 69, 0.6)',

      hoverBackgroundColor:
        '#501800',

      data: []
    }
  ]
}

const state4 = {
  labels: [],

  datasets: [
    {
      label: 'destino',

      backgroundColor:
        'rgba(239, 123, 69, 0.6)',

      hoverBackgroundColor:
        '#501800',

      data: []
    }
  ]
}

destiny.Datos.Metricas[0].Datos.forEach(elm => {
  state2.labels.push(elm.Parametro)
  state2.datasets[0].data.push(elm.Valor)
})
evolution.Datos.Metricas[0].Datos.forEach(elm => {
  state.labels.push(elm.Parametro)
  state.datasets[0].data.push(elm.Valor)
})
main.Datos.Metricas[0].Datos.forEach(elm => {
  state3.labels.push(elm.Parametro)
  state3.datasets[0].data.push(elm.Valor)
})

tax.Datos.Metricas[0].Datos.forEach(elm => {
  state4.labels.push(elm.Parametro)
  state4.datasets[0].data.push(elm.Valor)
})
class Stadistics extends Component {

  render() {

    return (

      <Container style={{ padding: '0 18% 10%' }} fluid>
        
        <Fade left duration={1500}>

        <Row>

          <h1>Estadísticas</h1>

        </Row>
        
        <Row style={{paddingTop: '80px'}}>
          
          <Col md={{ span: 6 }}>
            
              <Line
                data={state}
                
                options={{
                  title: {
                    display: true,
                    text: 'Evolución del número de perros recogidos por refugios y protectoras en España',
                    fontSize: 25
                  },
                  legend: {
                    display: false,
                    position: 'right'
                  }
                }}
              />
            
          </Col>

          <Col md={{ span: 6 }}>
            
            <Doughnut
              
              data={state2}

              options={{
                title: {
                  display: true,
                  text: 'Destino de los perros',
                  fontSize: 30
                },

                legend: {
                  display: true,
                  position: 'right'
                }
              }}
            />
            
          </Col>

        </Row>

        <Row style={{paddingTop: '200px'}}>
          
          <Col>
            
            <Bar
              
              data={state4}

              options={{
                title: {
                  display: true,
                  text: "Tasa de animales recuperados que llegan a refugios en España",
                  fontSize: 30
                },
  
                legend: {
                  display: false,
                  position: 'right'
                }
              }}
            />

            <div style={{paddingBottom: '150px'}}></div>
    
            <Bar
              
              data={state3}
              options={{
                title: {
                  display: true,
                  text: "Principales motivos para el abandono de animales de compañía en 2018 en España",
                  fontSize: 30
                },
                legend: {
                  display: false,
                  position: 'right'
                }
              }}

              
            />

          </Col>

        </Row>
          
        </Fade>

      </Container>
    )
  }
}

export default Stadistics