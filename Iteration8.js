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

  //console.log(counterWords.sort());
  const unicos = [];
  //const vecesRepetidas = [];
  let contador = 1;
  
  /*function repeatCounter(arr) {
    let arrayOrdenado = arr.sort();

    for (let i = 0; i < arrayOrdenado.length; i++){
      if (!unicos.includes(arrayOrdenado[i])){
        unicos.push(arrayOrdenado[i]);
      }else{
        contador +=1;
      }
      
    }
    //console.log(contador);
  }*/


  console.log(unicos);
  repeatCounter(counterWords);
 

  function repeatCounter(arr) {
    let arrayOrdenado = arr.sort();
    let repetidas = [];
    for (let element of arrayOrdenado){
      if (!unicos.includes(element)){
        unicos.push(element);
      }else{
        repetidas.push(element);
        contador +=1;
      }
    }
    console.log(repetidas, contador);
  }