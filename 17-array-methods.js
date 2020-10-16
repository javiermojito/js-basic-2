var estudiantes = [
    { nombre: "Javier", edad: 16 , nota: 4.5 },
    { nombre: "Laura", edad: 17 , nota: 4 },
    { nombre: "Kevin", edad: 23 , nota: 3.2 },
    { nombre: "Valentina", edad: 22, nota: 5 },
    { nombre: "José", edad: 17 , nota: 2.8 },
    { nombre: "Federico", edad: 18 , nota: 1.2 },
    { nombre: "Jorge", edad: 18 , nota: 5 },
    { nombre: "Andrés", edad: 20 , nota: 3 },
    { nombre: "Santiago", edad: 21 , nota: 2.3 },
    { nombre: "Edward", edad: 20 , nota: 4.8 },
    { nombre: "Tomate", edad: 19 , nota: 2.7 }
];

//filter
//Primera forma
var estudiantesQuePasaron = estudiantes.filter(pasoLaMateria);

function pasoLaMateria(estudiante){
    return estudiante.nota >= 3;
} 

//Segunda forma de hacerse
var estudiantesQuePasaron = estudiantes.filter(function(estudiante){
    return estudiante.nota >= 3;
});

console.log(estudiantesQuePasaron);

//Tarea
//Sacar la lista de estudiante que perdieron la materia


//////
var estudiantes = [
    { nombre: "Javier", edad: 16 , nota: 4.5 },
    { nombre: "Laura", edad: 17 , nota: 4 },
    { nombre: "Kevin", edad: 23 , nota: 3.2 },
    { nombre: "Valentina", edad: 22, nota: 5 },
    { nombre: "José", edad: 17 , nota: 2.8 },
    { nombre: "Federico", edad: 18 , nota: 1.2 },
    { nombre: "Jorge", edad: 18 , nota: 5 },
    { nombre: "Andrés", edad: 20 , nota: 3 },
    { nombre: "Santiago", edad: 21 , nota: 2.3 },
    { nombre: "Edward", edad: 20 , nota: 4.8 },
    { nombre: "Tomate", edad: 19 , nota: 2.7 }
];

//map
var nombresEnMayuscula = estudiantes.map(function(estudiante){
    //estudiante.nombre = estudiante.nombre.toUpperCase();
    return {
        ...estudiante,
        nombre: estudiante.nombre.toUpperCase()
    }
})

console.log(estudiantes);
console.log(nombresEnMayuscula);

///reduce
var estudiantes = [
    { nombre: "Javier", edad: 16 , nota: 4.5 },
    { nombre: "Laura", edad: 17 , nota: 4 },
    { nombre: "Kevin", edad: 23 , nota: 3.2 },
    { nombre: "Valentina", edad: 22, nota: 5 },
    { nombre: "José", edad: 17 , nota: 2.8 },
    { nombre: "Federico", edad: 18 , nota: 1.2 },
    { nombre: "Jorge", edad: 18 , nota: 5 },
    { nombre: "Andrés", edad: 20 , nota: 3 },
    { nombre: "Santiago", edad: 21 , nota: 2.3 },
    { nombre: "Edward", edad: 20 , nota: 4.8 },
    { nombre: "Tomate", edad: 19 , nota: 2.7 }
];

function sumarEdades(){

    let sumaTotal = 0; //<--- Acumulador

    for(var i = 0; i < estudiantes.length; i++)
    {
        sumaTotal += estudiantes[i].edad; //<---- la función
    }

    console.log(`El total de la suma fue de ${sumaTotal} años`);
}

sumarEdades();

var total = estudiantes.reduce(reducirEdades, 0);

function reducirEdades(sumaTotal, estudiante){
    return sumaTotal + estudiante.edad;
}
console.log(total);

////
//find
var estudiantes = [
    { nombre: "Javier", edad: 16 , nota: 4.5 },
    { nombre: "Laura", edad: 17 , nota: 4 },
    { nombre: "Kevin", edad: 23 , nota: 3.2 },
    { nombre: "Valentina", edad: 22, nota: 5 },
    { nombre: "José", edad: 17 , nota: 2.8 },
    { nombre: "Federico", edad: 18 , nota: 1.2 },
    { nombre: "Jorge", edad: 18 , nota: 5 },
    { nombre: "Andrés", edad: 20 , nota: 3 },
    { nombre: "Santiago", edad: 21 , nota: 2.3 },
    { nombre: "Edward", edad: 20 , nota: 4.8 },
    { nombre: "Tomate", edad: 19 , nota: 2.7 }
];

var estudianteConCinco = estudiantes.find(function(estudiante){
    return estudiante.nota === 5;
})

console.log(estudianteConCinco);

//some
var estudiantes = [
    { nombre: "Javier", edad: 16 , nota: 4.5 },
    { nombre: "Laura", edad: 17 , nota: 4 },
    { nombre: "Kevin", edad: 23 , nota: 3.2 },
    { nombre: "Valentina", edad: 22, nota: 5 },
    { nombre: "José", edad: 17 , nota: 2.8 },
    { nombre: "Federico", edad: 18 , nota: 1.2 },
    { nombre: "Jorge", edad: 18 , nota: 5 },
    { nombre: "Andrés", edad: 20 , nota: 3 },
    { nombre: "Santiago", edad: 21 , nota: 2.3 },
    { nombre: "Edward", edad: 20 , nota: 4.8 },
    { nombre: "Tomate", edad: 19 , nota: 2.7 }
];

var resultado = estudiantes.some(function(estudiante){
    return estudiante.edad === 5;
})

console.log(resultado);