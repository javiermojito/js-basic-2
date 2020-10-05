//Declarativas
function saludar(){
    console.log("Hola!");
}

//Expresión
var saludaExpresion = function(){
    console.log("Hola desde expresión");
}

saludar();
saludaExpresion();

function sumar(param1, param2){
    return param1 + param2;
}

console.log(sumar(5,3));
// Not a number == NaN

function saludarEstudiante(estudiante){
    //console.log("Hola estudiante " + estudiante + " recordemos que eres " + estudiante);
    console.log("Hola estudiante " + estudiante + "\n recordemos que eres " + estudiante);
}
saludarEstudiante("Oscar");

//Plantillas literales
function saludarEstudianteConPlantilla(estudiante){
    //console.log(`Hola estudiante ${estudiante} recordemos que eres ${estudiante}`);
    console.log(`Hola estudiante ${estudiante}recordemos que eres ${estudiante}`);
}

saludarEstudianteConPlantilla("Pepo");