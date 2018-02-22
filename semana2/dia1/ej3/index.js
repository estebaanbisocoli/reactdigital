// //funciones

// function doAjax (url, callback) {
//   $.ajax(url, {
//     success: function(data) {
//       callback(data)
//     },
//     error: function(err) {
//       callback(null, err.statusText)
//     }
//   })
// }
// console.log('ej3', 'a')
// doAjax('https://pokeapi.co/api/v2/pokemon/pidgey', (data, err) => {
//   if (err) {
//     console.log('ocurrio algun error')
//   } else if (data) {
//     console.log('El pokemon', data.name, 'pesa', data.weight, 'kilogramos')
//   }
// })



// doAjax('https://pokeapi.co/api/v2/pokemon/pidgey', (data, err) => {
//   if (err) {
//     console.log('ocurrio algun error')
//   } else if (data) {

//     doAjax(`https://pokeapi.co/api/v2/pokemon/${data.id + 1}`, (data ,err) => {
//       console.log('ej3', 'b y c')
//       if (err) {
//         console.log('ocurrio algun error')
//       } else if (data) {
//         console.log('la proxima evolucion de pidgey es', data.name)
//         doAjax(`https://pokeapi.co/api/v2/pokemon/${data.id + 1}`, (data, err) => {
//           if(err) {
//             console.log(err)
//           } else if (data) {
//             console.log('la proxima evolucion de pidgeotto es', data.name)
//           }
//         })
//       }
//     })
//   }
// })

// function doAjax(url) {
//   return new Promise((resolve, reject) => {
//     $.ajax(url, {
//       success(data) {
//         resolve(data)
//       },
//       error(err) {
//         reject(new Error(err.statusText))
//       }
//     })
//   })
// }
// doAjax('https://pokeapi.co/api/v2/pokemon/pidgey').then(data => {
//   console.log('el pokemon', data.name, 'pesa', data.weight, 'kilogramos')
//   return doAjax(`https://pokeapi.co/api/v2/pokemon/${data.id + 1}`)
// }).then(data => {
//   console.log('la evolucion de pidgey es', data.name)
//   return doAjax(`https://pokeapi.co/api/v2/pokemon/${data.id + 1}`)
// }).then(data => {
//   console.log('la evolucion de pidgeotto es', data.name)
// }).catch(e => {
//   console.log(e)
// })

axios.get('https://pokeapi.co/api/v2/pokemon/pidgey')
.then(response => {
  console.log('el pokemon', response.data.name, 'pesa', response.data.weight, 'kilogramos')
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${response.data.id + 1}`)
})
.then(response => {
  console.log('la evolucion de pidgey es', response.data.name)
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${response.data.id + 1}`)
})
.then(response => {
  console.log('la evolucion de pidgey es', response.data.name)
}).catch(e => {
  console.log(e)
})