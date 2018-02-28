import React, { Component } from 'react';
import Grid from 'styled-components-grid'
import Image from './Image';
import { Card, CardText, CardMedia, CardActions} from 'material-ui/Card'
import { ThemeProvider } from 'styled-components'
import { Margin, Padding } from 'styled-components-spacing';
import { RaisedButton } from 'material-ui'
import styled from 'styled-components'
const theme = {
    breakpoints: {
        xs: 0,
        sm: 630,
        md: 900,
        lg: 1030,
    },
    spacing: {
        0: '0',
        1: '1rem',
        2: '2rem',
        3: '4rem',
        4: '7rem'
      }
}
const Actions = styled.div`
                position: absolute;
                bottom: 5px;
                left: 5px;

                `
class ItemList extends Component {
    
    render() {
        return (
            <ThemeProvider theme={theme}>
            <Margin top={1} left={{xs: 0, sm: 3, md: 4, lg: 2}} right={{xs: 0, sm: 3, md: 4, lg: 2}} bottom={2}>
            <Padding all={0}>
            <Card>
                <Grid wrap={false}>
                    <Margin all={0}>
                    <Padding all={0}>
                        <Grid.Unit size={1/3} left={'0'} bottom={0}>
                            <CardMedia> 
                                <Image url={"https://image.tmdb.org/t/p/w185_and_h278_bestv2/rOYDjzWtgMa89xsHMjOcMYrd8hy.jpg"} alt={"zootopia"} />
                            </CardMedia>
                        </Grid.Unit>
                    </Padding>
                    </Margin>
                    <Grid.Unit size={2/3} style={{position:'relative'}}>
                    <CardText>
                        <span stlye={{overflow: 'hidden'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur magna quam, quis mattis nulla aliquet quis. Nulla risus nisl, dictum vel elit vitae, dictum pharetra est. Proin eu venenatis dui. Sed suscipit, lorem ut mattis auctor, erat urna sollicitudin sapien, et faucibus nisi ligula vel ex.
                        </span>
                    </CardText>
                    <Actions>
                        <CardActions>
                            <RaisedButton primary label="Agregar a favoritos"/>
                        </CardActions>
                    </Actions>
                    </Grid.Unit>
                </Grid>
            
            </Card>
            </Padding>
            </Margin>
            </ThemeProvider>
        );
    }
}

export default ItemList;
