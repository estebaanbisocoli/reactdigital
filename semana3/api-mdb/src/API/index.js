import axios from 'axios'
const API_KEY = 'bb3fa9e8630eb8881deec203879c4add';
class TheMovieDbApi {
    constructor() {
        this.axios = axios.create({
            baseURL: 'https://api.themoviedb.org/3',
            params: {
                api_key: API_KEY,
                language: 'es-AR',
            },
        })
    }
    getPopularMovies = (page = 1) => (
        this.axios.get(`/movie/popular`, {
            params: {page: page}
        })
    );
}
export default TheMovieDbApi;