//Coerción implícita
var a = 1 + "2";// "12"
console.log(typeof a);

var b = 2 * "4"; //8
console.log(typeof b);

//Coerción explícita
var c = 15; 
var d = c + ""; //Casting de number a String 
console.log(typeof d);

var e = Number(d); //Casting de String a Number
console.log(typeof e);

var f = String(e); //Casting de number a String
console.log(typeof f);