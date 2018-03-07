import React, { Component } from 'react';
import Alert from './Alert'
class AlertList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            alerts: [
                {type: 'danger', content: 'Este es un alert de tipo danger'},
                {type: 'secondary', content: 'Este es un alert de tipo secondary'},
                {type: 'success', content: 'Este es un alert de tipo success'},
            ]
        }

    }
    deleteAlert = (index) => {
        const { alerts } = this.state
        alerts.splice(index, 1)
        this.setState({
            alerts
        })

    }
    render() {
        return (<div className="container">
                    {this.state.alerts.map((ele, index) => (<Alert key={index} type={ele.type} onClick={() => {this.deleteAlert(index)}}>{ele.content}</Alert>))}
                    {!this.state.alerts.length && <div>No hay mensajes que mostrar</div>}
                </div>)
    }
}

export default AlertList;