var primerNombre = "Iskra"; //Global

function darNombreCompleto(){
    var segundoNombre = "Fernanda"; //Local
    return `${primerNombre} ${segundoNombre}`;
}

console.log(segundoNombre);
console.log(darNombreCompleto());

//// Caso nuevo

var primerNombre = "Iskra"; //Global
var segundoNombre = "Michi" //Global

function darNombreCompleto(){
    //var segundoNombre = "Fernanda"; //Local
    return `${primerNombre} ${segundoNombre}`;
}

//console.log(segundoNombre);
console.log(darNombreCompleto());