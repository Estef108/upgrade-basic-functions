//Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne , numberTwo) {
  return numberOne < numberTwo ? numberTwo: numberOne;
}

let resultado = sum(7 , 12);
console.log(resultado);
