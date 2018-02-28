import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
class Button extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <RaisedButton label='Incrementar' primary={true} onClick={this.increment} />
                
                <p>{this.state.count}</p>
            </div>
        );
    }
}

export default Button;
