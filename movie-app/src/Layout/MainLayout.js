import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components'
import Grid from 'styled-components-grid'
import Image from '../components/Image'
import ImageComponent from './ImageComponent'
const testJson = {
    movies: ["https://image.tmdb.org/t/p/w185_and_h278_bestv2/rOYDjzWtgMa89xsHMjOcMYrd8hy.jpg", "https://image.tmdb.org/t/p/w185_and_h278_bestv2/rOYDjzWtgMa89xsHMjOcMYrd8hy.jpg", "https://image.tmdb.org/t/p/w185_and_h278_bestv2/rOYDjzWtgMa89xsHMjOcMYrd8hy.jpg", "https://image.tmdb.org/t/p/w185_and_h278_bestv2/rOYDjzWtgMa89xsHMjOcMYrd8hy.jpg", "https://image.tmdb.org/t/p/w185_and_h278_bestv2/rOYDjzWtgMa89xsHMjOcMYrd8hy.jpg", "https://image.tmdb.org/t/p/w185_and_h278_bestv2/rOYDjzWtgMa89xsHMjOcMYrd8hy.jpg", "https://image.tmdb.org/t/p/w185_and_h278_bestv2/rOYDjzWtgMa89xsHMjOcMYrd8hy.jpg", "https://image.tmdb.org/t/p/w185_and_h278_bestv2/rOYDjzWtgMa89xsHMjOcMYrd8hy.jpg", "https://image.tmdb.org/t/p/w185_and_h278_bestv2/rOYDjzWtgMa89xsHMjOcMYrd8hy.jpg", "https://image.tmdb.org/t/p/w185_and_h278_bestv2/rOYDjzWtgMa89xsHMjOcMYrd8hy.jpg", "https://image.tmdb.org/t/p/w185_and_h278_bestv2/rOYDjzWtgMa89xsHMjOcMYrd8hy.jpg", "https://image.tmdb.org/t/p/w185_and_h278_bestv2/rOYDjzWtgMa89xsHMjOcMYrd8hy.jpg", "https://image.tmdb.org/t/p/w185_and_h278_bestv2/rOYDjzWtgMa89xsHMjOcMYrd8hy.jpg", "https://image.tmdb.org/t/p/w185_and_h278_bestv2/rOYDjzWtgMa89xsHMjOcMYrd8hy.jpg", "https://image.tmdb.org/t/p/w185_and_h278_bestv2/rOYDjzWtgMa89xsHMjOcMYrd8hy.jpg", "https://image.tmdb.org/t/p/w185_and_h278_bestv2/rOYDjzWtgMa89xsHMjOcMYrd8hy.jpg", "https://image.tmdb.org/t/p/w185_and_h278_bestv2/rOYDjzWtgMa89xsHMjOcMYrd8hy.jpg", "https://image.tmdb.org/t/p/w185_and_h278_bestv2/rOYDjzWtgMa89xsHMjOcMYrd8hy.jpg", "https://image.tmdb.org/t/p/w185_and_h278_bestv2/rOYDjzWtgMa89xsHMjOcMYrd8hy.jpg","https://image.tmdb.org/t/p/w185_and_h278_bestv2/rOYDjzWtgMa89xsHMjOcMYrd8hy.jpg",]
}
const theme = {
    breakpoints: {
        xs: 0,
        sm: 532,
        md: 820,
        lg: 1080,
        xl: 1366
    }
}
const breakpoints = {
    xs: 1,
    sm: 1/2,
    md: 1/3,
    lg: 1/4,
    xl: 1/5
}
class MainLayout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movieImages : []
        }
    }
    renderImages = (movieImages) => {
        return movieImages.map(ele => {
            return (
                <ImageComponent ele={ele} breakpoints={breakpoints} />
            )
        })
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                movieImages: testJson.movies
            }) 
        }, 500);

    }
    render() {
       let { movieImages } = this.state
        return (
            <ThemeProvider theme={theme}>
                <Grid>
                    {this.renderImages(movieImages)}
                </Grid>
            </ThemeProvider>

        );
    }
}

export default MainLayout;