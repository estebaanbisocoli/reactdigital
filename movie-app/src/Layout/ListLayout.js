import React, { Component } from 'react';
import Grid from 'styled-components-grid'
import ItemList from '../components/ItemList';
import { ThemeProvider } from 'styled-components'
class  ListLayout extends Component {
    render() {
        const theme = {
            breakpoints: {
                xs: 0,
                sm: 1025
            }
        }
        const breakpoints = {
            xs: 1,
            sm: 1/2
        }
        return (
            <ThemeProvider theme={theme}>
            <Grid>
                <Grid.Unit size={breakpoints}>
                    <ItemList />
                </Grid.Unit>
                <Grid.Unit size={breakpoints}>
                    <ItemList />
                </Grid.Unit>
            </Grid>
            </ThemeProvider>
        );
    }
}

export default ListLayout;