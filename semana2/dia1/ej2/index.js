function fibonacci (cant) {
  let primero = 0;
  let segundo = 1;
  let fibArr = [0, 1]
  for (let i = 0; i < cant; i++) {
    let temp = primero + segundo;
    fibArr.push(temp);
    primero = segundo
    segundo = temp
  }
  console.log(fibArr)
}

console.log('ej',2, 'a');
fibonacci(10);

console.log('ej', 2, 'b')
var frutas = ["Cereza", "Manzana", "Melón", "Frutilla"];
function logFrutas (frutas) {
  function logAsync (index) {
    setTimeout(() =>{
      console.log(index, frutas)
      console.log(frutas[index]);
    }, 2000);
  }
  for(var i = 0; i < frutas.length; i++){
    logAsync(i, frutas)
  }
}
logFrutas(frutas);
