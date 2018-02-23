import axios from 'axios'

export default {
    getPokemon(name) {
        return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    },
    getEvoution(idAnterior, name) {
        if (idAnterior) {
            return axios.get(`https://pokeapi.co/api/v2/pokemon/${idAnterior + 1}`)
        } else {
            return this.getPokemon(name).then(response => {
                return axios.get(`https://pokeapi.co/api/v2/pokemon/${response.data.id + 1}`)
            })
        }
    }
}
