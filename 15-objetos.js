//No lo recomiendo
var nombre = "Javier", apellido = "Collazos", edad = 21;

var nombre2 = "Laura";
var apellido2 = "Robledo";

var estudiante = {
    nombre: "Javier",
    apellido: "Collazos",
    edad: 21
}

console.log(estudiante.nombre);

//
var estudiante = {
    nombre: "Javier",
    apellido: "Collazos",
    edad: 21,
    estaMatriculado: false,
    nombreMayus: "Javier".toUpperCase(),
    apellidoMayus: "Collazos".toUpperCase(),
    nombreCompleto: "Javier Collazos",
    ejemplo: 5+2
}

console.log(estudiante.nombreCompleto);

//

var nombre = "Tomate";

var estudiante = {
    nombre: "Javier",
    apellido: "Collazos",
    edad: 21,
    estaMatriculado: false,
    presentarse: function(){
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
    }
}

estudiante.presentarse();

//////
var estudiante = {
    nombre: "Javier",
    apellido: "Collazos",
    edad: 21,
    estaMatriculado: false,
    /*
    nombreMayus: this.nombre.toUpperCase() //NO FUNCIONA
    */
    nombreMayus: function(){
        return this.nombre.toUpperCase(); //Si funciona
    }
}

console.log(estudiante.nombreMayus());

var estudiante = {
    nombre: "Pepe",
    apellido: "Collazos",
    edad: 21,
    estaMatriculado: false,
    nombreMayus: function(){
        return this.nombre.toUpperCase();
    },
    apellidoMayus: function(){
        return this.apellido.toUpperCase();
    },
    nombreCompleto: function(){
        return `${this.nombre} ${this.apellido}`;
    }
}

console.log(estudiante.nombreMayus());

////////
var estudiante = {
    nombre: "Javier",
    apellido: "Collazos",
    edad: 21,
    estaMatriculado: false
}

var estudiante2 = {
    nombre: "Laura",
    apellido: "Robledo",
    edad: 35,
    estaMatriculado: true
}

//Método constructor
function estudiante(pNombre, pApellido, pEdad, pEstadoMatricula){
    this.nombre = pNombre;
    this.apellido = pApellido;
    this.edad = pEdad;
    this.estadoMatricula = pEstadoMatricula;
}

var miEstudiante = new estudiante("Javier", "Collazos", 21, false);
var miEstudiante2 = new estudiante("Laura", "Robledo", 23, true);
var miEstudiante3 = new estudiante("Pepe", "Tomate", 50, true);

console.log(miEstudiante.nombre);
console.log(miEstudiante2.apellido);
console.log(miEstudiante3.estadoMatricula);

//Top tip
var x = 34;
var y = new Number("34");
var z = new Number("34");

console.log(y == z); //false
console.log(y === z); //false

//NO SE PUEDE COMPARAR 2 OBJETOS EN JAVASCRIPT

//Stringify
var y = new Number("34");
var z = new Number("34");
var tempY = JSON.stringify(y);
var tempZ = JSON.stringify(z);

console.log(tempY == tempZ); 
console.log(tempY === tempZ); 


///////
var persona = {
    nombre: "Javier",
    edad: 21
}

function nombreEnMayuscula(nombre){
    return nombre.toUpperCase();
}

console.log(nombreEnMayuscula(persona.nombre));


///////


/*
function nombreEnMayuscula(personaObj){
    var nombre = personaObj.nombre;
    var edad = personaObj.edad;

    return nombre.toUpperCase();
}
*/
/*
function nombreEnMayuscula(personaObj){
    var { nombre } = personaObj;
    var { edad } = personaObj;
    
    return nombre.toUpperCase();
}
*/

var persona = {
    nombre: "Javier",
    edad: 21
}

function nombreEnMayuscula({ nombre }){    
    return nombre.toUpperCase();
}

console.log(nombreEnMayuscula({ edad: 21 }));

//
var persona = {
    nombre: "Javier",
    edad: 21
}

function cumpliranios(personaObj){
    personaObj.edad += 1
}

cumpliranios(persona);
console.log(persona);

//
var persona = {
    nombre: "Javier",
    edad: 21
}

function cumpliranios(personaObj){
    return {
        ...personaObj,
        edad: personaObj.edad + 1,
        otro: "ksdjfklsa"
    }
}

var otroObjeto = cumpliranios(persona);

console.log(persona);
console.log(otroObjeto);

//Podemos agregar objetos dentro de un objeto
var persona = {
    nombre: "Javier",
    edad: 21,
    hobbies: {
        artes: true,
        deportes: false,
        ciencias: true,
        literatura: false,
    }
}

console.log(persona.hobbies);