import React, { Component } from 'react';
import PropTypes from 'prop-types'
class Nota extends Component {
    render() {
        return (
            <div>
               <h2 style={this.props.estilo.h2}>{this.props.titulo}</h2>
               <p style={this.props.estilo.p}>{this.props.texto}</p> 
            </div>
        );
    }
}
Nota.propTypes = {
    titulo: PropTypes.string.isRequired,
    texto: PropTypes.string,
    estilo: PropTypes.object
}
export default Nota;
