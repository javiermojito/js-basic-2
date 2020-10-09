//Los DevsAwwwards 2020
//               0               1              2
var invitados = ["Danny DeVito", "Ned Bigby", "Michael Jackson"];
invitados.unshift("Keanu Reeves");

function saludar(invitado){
    console.log(`Bienvenido ${invitado}`);
}

//for
//El iterador, la condición y el incremento
for(var i = 0; i < 20; i++){
    //Bloque de codigo que se ejecuta 
    //saludar(invitados[i]);
    darPaso();
}

//for of
//      iterador (var)    lista
for(var invitadoActual of invitados){
    saludar(invitadoActual);
}

invitados.forEach(function(invitado){
    saludar(invitado);
})

invitados.forEach(invitado => saludar(invitado));

//While 
var numPasos = 5;
var pasoActual = 6;

//1ro la condicion, luego el código
while(pasoActual < numPasos){
    console.log("Di un paso");
    pasoActual++;
}

//Do-While
var numPasos = 5;
var pasoActual = 6;

//1ro el código, luego la condición
do{
    console.log("Di un paso");
    pasoActual++;
}
while(pasoActual < numPasos);