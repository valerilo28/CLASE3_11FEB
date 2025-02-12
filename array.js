
// Ejemplo 1: Crear un arreglo simple

let frutas = ["Uva", "Manzana", "Pera", "Mango", "Fresa", "Aguacate"];
console.log("Lista de frutas", frutas);

// Ejmeplo 2: Acceder a  elementos de un arreglo
console.log("Primer fruta: ", frutas[0]);
console.log("Segunda fruta: ", frutas[1]);
console.log("Fruta en la posicción 19: ", frutas[19]);// Me da como resultado indefinido porque no tengo ninguna fruta dentro de ese índice


console.log("Fruta en la posición -1: ", frutas[-1]);// Da como resultado indefinido
console.log("Última fruta: ", frutas[5]);
console.log("Última fruta: ", frutas[frutas.length - 1]); //frutas.length se refiere a la cantidad de elementos que se encuentran dentro del arreglo, es decir, su longitud

//Ejemplo 3: Modificar un elemento del arreglo

frutas[4] = "Guayaba";
console.log("Frutas actializadas: ", frutas);