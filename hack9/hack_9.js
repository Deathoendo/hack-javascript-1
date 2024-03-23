/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * contar el total de items que inicien con el caracter "b"
 *  
 * 
 * output => 2   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = 0;

for(i =0; i<arr.length; i++){
    let cadena = arr[i];
    if(cadena[0] == 'b'){
        result++;
    }
}


console.log("resltado: ", result);

//export result
module.exports = result;