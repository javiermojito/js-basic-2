//estructura

/*
if(//La condicion que queremos evaluar){
    //Bloque de código que se ejecuta su la codición es verdadera.
}
else{
    //Bloque de código que se ejectua si la condición no se cumple.
}
*/

var estaLloviendo = false;
var estaSoleado = true;

if(estaLloviendo || estaSoleado){
    console.log("Sacar la sombrilla");
}
else{
    console.log("No voy a sacar nada");
}

//Ejemplos

//Nuestro bar DevShots
//Todo el que tenga 18, tiene derecho a un shot gratis.

var edad = 20;

if(edad === 18){
    console.log("Tienes shot gratis");
}
else if(edad > 18){
    console.log("Bienvenido a DevShots");
}
else if(edad > 40){
    console.log("Bienvenido señoooora DevShots");
}
else{
    console.log("No puede entrar.");
}


//Operador ternario

//condicion ? /*resultado si da true*/ : /*resultado si da false*/;
var edad = 50;
var mensajeFinal = edad >= 18 ? "Puede entrar al bar" : "Lo siento, no puedes entrar";
console.log(mensajeFinal);





