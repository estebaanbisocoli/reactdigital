import React, { Component } from 'react';

class Pokemon extends Component {
    render() {
        return (
            <div className="box">
                <div className="nombre">
                    <h2>{this.props.name}</h2>
                </div>
                <div className="image">
                    <img src={this.props.url}></img>
                </div>
                <div className="stats">
                </div>
            </div>
        );
    }
}

export default Pokemon;