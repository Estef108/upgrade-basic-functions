/*  Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  
Puedes usar este array para probar tu función:*/

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];


  function repeatCounter(arr) {
    const repetitions = {};
    for( let i = 0; i < arr.length; i++){
      if (arr[i] in repetitions){
        repetitions[arr[i]]++;
      }else{
        repetitions[arr[i]]= 1;
      }
    }
    return console.log(repetitions);
  }
  
repeatCounter(counterWords);