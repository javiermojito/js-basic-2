var javier = {
    nombre: "Javier",
    edad: 21
}

var santiago = { 
    nombre: "Santiago",
    edad: 16
}

function personaEsMayorDeEdad(personaObj){
    if( personaObj.edad >= 18 ) {
        //XXXXX es mayor de edad
        console.log(`${personaObj.nombre} es mayor de edad`);

    }else{
        //XXXXX es menor de edad
        console.log(`${personaObj.nombre} es menor de edad`);
    }
}

personaEsMayorDeEdad(javier);
personaEsMayorDeEdad(santiago);

////////////



//
//ArrowFunction
// constante   nombre          parámetros  la flecha     el cuerpo 
//const          esMayorDeEdad = (persona)    =>      persona.edad >= MAYORIA_DE_EDAD;

//const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD;

/* function esMayorDeEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD;
} */

var javier = {
    nombre: "Javier",
    edad: 21
}

var santiago = { 
    nombre: "Santiago",
    edad: 18
}

const MAYORIA_DE_EDAD = 18;
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD;

function personaEsMayorDeEdad(personaObj){
    let mensajeFinal = esMayorDeEdad(personaObj) ? `${personaObj.nombre} es mayor de edad` : `${personaObj.nombre} es menor de edad`;
    console.log(mensajeFinal);
}

personaEsMayorDeEdad(javier);
personaEsMayorDeEdad(santiago);