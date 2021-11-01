/*Crea una función que reciba por parámetro un array y cuando es un valor number lo sume 
y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:*/

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];


function averageWord(param) {
    let sumaNumeros = 0;
    let sumaLetras = 0;
    let palabra;
    let numLetras;
    for (let i = 0; i < param.length; i++) {
        if (typeof param[i] === 'number') {
            sumaNumeros = sumaNumeros += param[i];
        } else if (typeof param[i] === 'string') {
            palabra = param[i];
            numLetras = palabra.length;
            sumaLetras = sumaLetras += numLetras;
        }
    }
    console.log(sumaNumeros);
    console.log(sumaLetras);
}


averageWord(mixedElements);

