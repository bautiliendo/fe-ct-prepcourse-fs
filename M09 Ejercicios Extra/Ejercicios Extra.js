/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let array = [];
   Object.entries(objeto).forEach(([key, value]) => {
      array.push([key, value])
    })
  return array;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let objeto = {};

   // Recorremos el string
   for (let i = 0; i < string.length; i++) {
     const letra = string[i];
// Verificamos si la letra ya existe en el objeto
     if (objeto.hasOwnProperty(letra)) {
       objeto[letra]++; // Si existe, incrementamos su contador
     } else {
       objeto[letra] = 1; // Si no existe, la inicializamos en 1
     }
   }
   const keysSorted = Object.keys(objeto).sort();
   const objetoOrdenado = {};
   for (const key of keysSorted) {
     objetoOrdenado[key] = objeto[key];
   }
   return objetoOrdenado;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código: 

   let mayusc = [];
   let minusc = [];

   for (let i = 0 ; i < string.length ; i++){
      if(string[i].toUpperCase() === string[i]){
         mayusc.push(string[i]);
      } else {
         minusc.push(string[i]);
      }
   }
   return mayusc.join("") + minusc.join("");
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let str = frase.split(" ");
   for ( let i = 0 ; i < str.length ; i++){
      str[i] = str[i].split("").reverse().join("");
   }
   return str.join(" ");
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let str = numero.toString()
   /*if(str.length === 1){
      return "Es capicua";  
   }else*/ if(str[0] === str[str.length - 1]){
      return "Es capicua";
   } else return "No es capicua";
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let str = string.split("")
   for(let i = 0; i < str.length ; i++){
      if(str[i] === "a" ||str[i] === "b" ||str[i] === "c" ){
         delete str[i]
      }
   }
   return str.join("");
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return arrayOfStrings.sort((a, b) => a.length - b.length);
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let array3 = [];
   for ( let i = 0 ; i < array1.length ; i++){
      if(array2.includes(array1[i])){
         array3.push(array1[i])
      }
   }
   return array3;
   
 
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
