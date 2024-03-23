/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

for(i =0; i<arr.length; i++){
    let uper = arr[i];
    let con = uper[0].toUpperCase() + uper.slice(1);
    result.push(con)
}


console.log("resltado: ", result);
//export result
module.exports = result;