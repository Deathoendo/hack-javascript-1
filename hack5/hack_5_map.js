/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];
let ar = [7, 6, 5, 4, 3, 2, 1];

i = ar.map(function(numero){
    if (numero % 2 == 1) {
        return numero;
    }
});

result = i.filter(item => item != null);

console.log("resltado: ", result);
module.exports = result;