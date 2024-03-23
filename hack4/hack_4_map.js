/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];
let ar = [1, 2, 3, 4, 5, 6, 7];

i = ar.map(function(numero){
    if (numero % 2 == 1) {
        return numero;
    }
});

result = i.filter(item => item != null);


console.log("resltado: ", result);
//export result
module.exports = result;