/*Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, 
en caso que existan los elimina 
para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:*/

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

  const unique = [];

  function removeDuplicates(array) {
    for (let i = 0; i < array.length; i++){
        let element = array[i];
      if( !unique.includes(element)){
        unique.push(element);
      }
    }
    return unique;
  }



console.log(removeDuplicates(duplicates));
