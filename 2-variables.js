var miVariable = "Javier";
console.log("Mi nombre es " + miVariable);

//Declaración
var edad;

//Inicializar
edad = 30;

console.log(edad);

//Var se puede reinicializar, y reasignar (Global)
var otro = "Hola";
var otro = "Soy otro hola";

console.log(otro);

//Let no se puede reinicializar, pero si se puede asignar (local)
let x = 0;
x = 1;

console.log(x);

//Const no se puede reinicializar, tampoco se puede reasignar (Global)
const y = 1;

console.log(y);

//Arreglos
var vegetales = ["Tomate", "Lechuga"];

var persona = {
    nombre: "Javier",
    edad: 21
}

console.log(vegetales);
console.log(persona);