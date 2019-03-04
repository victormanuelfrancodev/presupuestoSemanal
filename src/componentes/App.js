import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';
import {validarPresupuesto} from '../helper';
import ControlPresupuesto from './ControlPresupuesto';

class App extends Component {

 state = {
   presupuesto : '',
   restante: '',
   gastos: {}
 }

 componentDidMount(){
   this.obtenerPresupuesto();
 }

obtenerPresupuesto = () => {
  let presupuesto = prompt('Cual es el presupuesto');
  let resultado = validarPresupuesto(presupuesto);

  if (resultado){
    this.setState({
      presupuesto: presupuesto,
      restante: presupuesto
    })
  }else{
    this.obtenerPresupuesto();
  }
}

restarPresupuesto = cantidad =>{
  let restar = Number(cantidad);

  //Tomar copia de state
  let restante = this.state.restante;
  //restamos
  restante -= restar;
  //agregamos nuevo state
   this.setState(
     {
       restante
     }
   )
}

agregarGasto = gasto =>{

   const gastos = {...this.state.gastos};
   gastos[`gasto${Date.now()}`] = gasto;

   this.restarPresupuesto(gasto.cantidadGasto);

   this.setState({
     gastos
   })

 }

  render() {
    return (
      <div className="App container">
        <Header
        titulo = 'Gasto semanal'
        />
        <div className="contenido-principal contenido">
          <div className= "row">
            <div className= "one-half column">
            <Formulario
                agregarGasto = { this.agregarGasto}
            />
            </div>
            <div className= "one-half column">
              <Listado
                gastos = {this.state.gastos}
              />
              <ControlPresupuesto
                  presupuesto = {this.state.presupuesto}
                  restante = {this.state.restante}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
