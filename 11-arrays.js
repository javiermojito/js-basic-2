//Como crear un arreglo
var juguetes = ["Muñeca", "Carro", "Balón"];
console.log(juguetes);

//Los arreglos pueden llevar varios tipos de datos.
var ejemplo = [ 1 , "Hola" , "🎈", "🎀", { name: "Javier", age:21 }, true];
console.log(ejemplo);

//Cuantos elementos hay
//              0         1        2
var juguetes = ["Muñeca", "Carro", "Balón"];
var numElementos = juguetes.length;
console.log(numElementos);

//push -> Nos permite agregar elementos a la lista, pero los agrega al final.
juguetes.push("LEGO"); //[ 'Muñeca', 'Carro', 'Balón', 'LEGO' ]
console.log(juguetes);

//pop -> Nos permite sacar el último elemento de la lista.
juguetes.pop(); //[ 'Muñeca', 'Carro', 'Balón' ]
console.log(juguetes); 

//unshift -> Nos permite agregar un elemento al inicio de la lista.
juguetes.unshift("LEGO"); //[ 'LEGO', 'Muñeca', 'Carro', 'Balón' ]
console.log(juguetes);

//shift -> Nos permite eliminar el primer elemento de la lista.
juguetes.shift(); //[ 'Muñeca', 'Carro', 'Balón' ]
console.log(juguetes);

//LIFO (Last In First Out) - FIFO (First In First Out)
//Pila - Fila


//Acceder
//              0         1         2
var juguetes = ["Muñeca", "Carro", "Balón"];
var elemento = juguetes[0];
console.log(elemento);


//indexOf
//              0         1         2
var juguetes = ["Muñeca", "Carro", "Balón"];
var indiceCarro = juguetes.indexOf("Carro");
console.log(indiceCarro);


//Métodos de arreglos
//              0         1         2
var juguetes = ["Muñeca", "Carro", "Balón"];

//reverse -> Invierte el orden de los elementos
juguetes.reverse();
console.log(juguetes);

//sort -> Ordenamos los elementos de la lista
var juguetes = [ 1 ,"Muñeca", "Carro", "Balón", true, 9, "LEGO", 6 , "🦺" ,false ,"🎈"];
juguetes.sort();
console.log(juguetes);

//slice
//              0    1        2        3
var juguetes = [ 1 ,"Muñeca", "Carro", "Balón", true, 9, "LEGO"];
var arregloCortado = juguetes.slice(1,4);
console.log(juguetes);
console.log(arregloCortado);

arregloCortado = juguetes.slice(2);
console.log(juguetes);
console.log(arregloCortado);

//Generar una copia
var juguetes = ["Muñeca", "Carro", "Balón"];
var copiaJuguetes = juguetes;
copiaJuguetes = copiaJuguetes.reverse();

console.log(juguetes);
console.log(copiaJuguetes);

//COMO HAGO UNA COPIA
//Forma viejita
var juguetes = ["Muñeca", "Carro", "Balón"];
var copiaJuguetes = juguetes.slice();
copiaJuguetes = copiaJuguetes.reverse();

console.log(juguetes);
console.log(copiaJuguetes);

//Spread Operator
var juguetes = ["Muñeca", "Carro", "Balón"];
var copiaJuguetes = ["UN ELEMENTO", ...juguetes, "OTRO"];

console.log(juguetes);
console.log(copiaJuguetes);

/*
var miNombre = "Javier";
var copiaNombre = miNombre + " Collazos";
console.log(miNombre);
console.log(copiaNombre);
*/

