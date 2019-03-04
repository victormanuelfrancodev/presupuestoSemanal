import React,{Component} from 'react';
import {revisarPresupuesto} from '../helper';

class Restante extends Component{
  render(){
    const presupuesto = this.props.presupuesto;
    const restante = this.props.restante;
    return(
      <div className = {revisarPresupuesto(presupuesto,restante)}>
        <p>Restante: $ {restante}</p>
      </div>
    )
  }
}

export default Restante;
