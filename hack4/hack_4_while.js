/**
 * mediante el while for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];
let i = 0;

while (i<= 7){
    if(i % 2 == 1){
        result.push(i);
    }
    i++;
}

console.log("resltado: ", result);

//export result
module.exports = result;