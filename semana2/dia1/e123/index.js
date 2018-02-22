var productos = [
  {nombre: 'mouse', categoria: 'computadora', cantidad: 2},
  {nombre: 'teclado', categoria: 'computadora', cantidad: 0},
  {nombre: 'almohadon', categoria: 'deco', cantidad: 0},
  {nombre: 'cartera', categoria: 'moda', cantidad: 0},
  {nombre: 'iphone 8', categoria: 'celulares', cantidad: 5}
];
function imprimir (value) {
  if (value.nombre) {
    console.log(value.nombre)
  }
}
function logEj(numero, inciso) {
  console.log('ej', numero, 'inciso', inciso)
}

function logIphone(iphoneObj) {
  if (iphoneObj) {
    console.log('Hay', iphoneObj.cantidad, 'unidades de iphone 8')
  }
}
function aumentarCantidad(aumento, productos) {
  return productos.map(obj => {
    let newObj = Object.create(obj)
    newObj.cantidad = newObj.cantidad + aumento
    return newObj
  })
}

function filtrarCategoria(categoria, productos) {
  return productos.filter(obj => {
    return obj.categoria === categoria
  })
}

function totalCantidad(productos) {
  let suma = 0
  productos.forEach(obj => {
    suma = suma + obj.cantidad
  })
  return suma
}
logEj(1, 'a')
productos.forEach(imprimir);

console.log(' ')
logEj(1, 'b')
logIphone(iphoneObj = productos.find(obj => {
    return obj.nombre === 'iphone 8'
  })
)

console.log(' ')
logEj(1, 'c')
console.log(aumentarCantidad(2, productos))
console.log(productos)

console.log(' ')
logEj(1, 'd')
console.log(filtrarCategoria('computadora', productos))

console.log(' ')
logEj(1, 'e')
console.log('En total hay', totalCantidad(productos), 'de productos')