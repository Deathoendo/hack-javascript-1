/**
 * mediante el loop for agregar los números 5,4,3,2,1
 * dentro del array result 
 * 
 * 
 * output => [5,4,3,2,1]
 */
let result = [];

for(i=5; i>=0; i--){
    result.push(i);
}

console.log("resltado: ", result);

//export result
module.exports = result;