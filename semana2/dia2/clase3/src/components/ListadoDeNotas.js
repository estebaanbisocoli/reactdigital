import React, { Component } from 'react';
import Nota from './Nota'
import PropTypes from 'prop-types'

class ListadoDeNotas extends Component {

    render() {
        const notas = this.props.lista


        return (
            <div className="grid">
                {notas.map((elemento) => {
                return <Nota estilo={} titulo={elemento.titulo} texto={elemento.texto}/>
            })} 
            </div>
        );
    }
}

ListadoDeNotas.propTypes = {
    lista: PropTypes.array
}
export default ListadoDeNotas;
