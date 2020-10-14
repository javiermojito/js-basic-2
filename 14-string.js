var miNombre = "Javier Collazos";

//Como pasarlo a mayus-minus
var miNombreMayus = miNombre.toUpperCase();
var miNombreMinus = miNombre.toLowerCase();

console.log(miNombreMayus)
console.log(miNombreMinus)

//
var miNombre = "Javier Collazos";
console.log(miNombre.length);

//Acceder
// 0    1    2    3    4    5
//["J", "a", "v", "i", "e", "r"]
var miNombre = "Javier";
var primeraLetra = miNombre.charAt(8);
console.log(primeraLetra);

//
var miNombre = "Javier";
//var parte = miNombre.charAt(1) +  miNombre.charAt(2) +  miNombre.charAt(3);

//Primera forma -> substr
//var parte = miNombre.substr(1,4);
var parte = miNombre.substr(1);
console.log(parte);

//Segunda forma -> 
var parte = miNombre.slice(1);
console.log(parte);


///////
var miNombre = "javier";

var temp = miNombre.charAt(0).toUpperCase() + miNombre.substr(1);
console.log(temp);

//Javier

//// 1er ejercicio
var miNombre = "santiago";
//santiagO

//// 2do ejercicio
var miNombre = "javier andres collazos gomez";

//Javier Andres Collazos Gomez
//split