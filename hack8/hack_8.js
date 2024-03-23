/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

for(i =0; i<arr.length; i++){
    //se elimina el primer y el sexto elemento del arreglo
    if(i == 0 || i==arr.length -1){ 
        
    }else if(i == arr.length -2){
        //se coloca mayuscula al 5to elemento
        result.push(arr[i].toUpperCase())
    }else{
        cadena = arr[i];
        let arro = " ";
        //colocamos @
        for (a = 0; a < cadena.length; a++) {
                if (cadena[a] == "a") {
                arro = arro + "@"
            } else {
                arro = arro +cadena[a]
            }
        }
        result.push(arro);
    }
}


console.log("resltado: ", result);
//export result
module.exports = result;