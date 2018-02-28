import React, { Component } from 'react';
import styled from 'styled-components';


const Im = styled.img`
height: ${props => props.height ? props.height : '250px'};`
class Image extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        const { url, alt } = this.props
        return (
            <Im  src={url} alt={alt}></Im>
        );
    }
}

export default Image ;