import React from 'react';
import styled from 'styled-components'
import Grid from 'styled-components-grid'
import Image from '../components/Image'
const ImageComponent = (props) => (
    <Grid.Unit size={props.breakpoints}>
        <Image url={props.ele} alt="Zootopia" />
    </Grid.Unit>
);

export default ImageComponent;