/**
 * mediante el loop for agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];

for(i=7; i>=0; i--){
    if(i % 2 == 1){
        result.push(i);
    }
}

console.log("resltado: ", result);
//export result
module.exports = result;