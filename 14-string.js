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
var primeraLetra = miNombre.charAt(0);
console.log(primeraLetra);

//
var miNombre = "Javier";
//var parte = miNombre.charAt(1) +  miNombre.charAt(2) +  miNombre.charAt(3);

//Primera forma -> substr
//var parte = miNombre.substr(1,4);
var parte = miNombre.substr(1);
console.log(parte);

//Segunda forma -> 
var parte = miNombre.slice(1,4);
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


/////////////////////////////////////////
//Ashley 
var miNombre = "santiago"; 
var ultimaPosicion = miNombre.length-1;
var ja = miNombre.substr(0,ultimaPosicion) + miNombre.charAt(ultimaPosicion).toUpperCase();
console.log(ja)

//////////
//Daniel 

let miNombre = "santiago";
//santiagO
let nuevoNombre = "";//santiagO
for(i = 0; i < miNombre.length; i++){
    if(i == miNombre.length-1){
        nuevoNombre += miNombre.charAt(i).toUpperCase();
    }else{
        nuevoNombre += miNombre.charAt(i);
    }
}

console.log(nuevoNombre);


//exercise 2
let nombreNumero2 = "javier andres collazos gomez robledo montero tomate";
//Javier Andres Collazos Gomez

let resultadoFinal = " "; //J
let mayuscula = true;

for(i = 0; i <= nombreNumero2.length; i++){

    let letraActual = nombreNumero2.charAt(i);

    if(mayuscula){
        resultadoFinal += letraActual.toUpperCase();
        mayuscula = false;
    }else{
        resultadoFinal += letraActual;
    }

    if(letraActual === " "){
        mayuscula = true;
    }
}

console.log(resultadoFinal);

///

////////
//Brainer
var name ="brainer steven martinez liscano";

console.log(name.replace(/\b[a-z]/g,c=>c+"-"));
//HIGH LEVEL LOCO

/////
var nombre = "javier andres collazos gomez brainer steven martinez liscano";
var nombreMachacado = nombre.split(' ');
console.log(nombreMachacado);

function primeraLetraAMayus(palabra){
    return palabra.charAt(0).toUpperCase() + palabra.substr(1);
}

var mensajeFinal = "";

for(var parte of nombreMachacado){
    var palabraModificada = primeraLetraAMayus(parte);
    mensajeFinal += palabraModificada + " ";
}

console.log(mensajeFinal.trim());