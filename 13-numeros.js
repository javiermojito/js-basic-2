//El límite de los números enteros -> 15 dígitos
var x = 999999999999999;
var y = 9999999999999999;
var z = 99999999999999991247;

console.log(x);
console.log(y);
console.log(z);

//Decimales -> 17
var x = 0.1 + 0.2;
console.log(x);

//ejemplo
var precioDeVino = 200.3;

var total = precioDeVino * 3;
console.log(total);

//Truco
total = precioDeVino * 100 * 3 / 100;
console.log(total);

//Forma 2
total = Math.round(precioDeVino * 100 * 3)/ 100;
console.log(total);

//Quiero mostrar n cantidad de decimales
var precioDeVino = 200.3;

var total = Math.round(precioDeVino * 100 * 3)/ 100;
var totalStr = total.toFixed(2);
console.log(totalStr);

//Casting
//var totalNum = parseFloat(totalStr);
var totalNum = Number(totalStr);
//var totalNum = parseInt(totalStr);

console.log(typeof totalNum);

//cambiar de bases
var num = 456;
var bin = num.toString(2);
console.log(bin);

var hexNum = 0xFAFAFA;
console.log(hexNum);
console.log(hexNum.toString(2));

var numDec = 16448250;
console.log(numDec.toString(16));

//exponenciales
var x = 123e5;
var y = 123e-20;

//NaN
//Not a Number
var temp = 25/"cosa";
console.log(typeof temp);

//Infinity
var temp = 25/0;
console.log(typeof temp);