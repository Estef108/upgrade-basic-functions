//Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++){
      total += numbers[i];
  }
  return total/numbers.length;
}
console.log(average(numbers));