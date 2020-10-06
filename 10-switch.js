//Estructura
switch (/*Lo que vayamos a evaluar*/) {
    case ___:
        //Bloque de código que se ejecuta cuando el caso se cumple
        break;
    case ___:
        //Bloque de código que se ejecuta cuando el caso se cumple
        break;
    case ___:
        //Bloque de código que se ejecuta cuando el caso se cumple
        break;
    case ___:
        //Bloque de código que se ejecuta cuando el caso se cumple
        break;
    default:
        //Bloque de código que se ejecuta si ninguno de los casos se cumple.
}

//Ejemplos

var cm = 500;
switch(cm){
    case 100:
        console.log("Tengo un metro");
        break;
    case 1000:
        console.log("Tengo un decámetro");
        break;
    case 10000:
        console.log("Tengo un hectómetro");
        break;
    case 100000:
        console.log("Tengo un kilómetro");
        break;
    default:
        console.log("No estoy seguro.");
}