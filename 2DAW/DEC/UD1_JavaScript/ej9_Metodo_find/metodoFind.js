/*Encuentra el primer elemento que sea mayor a 50 del siguiente array de números: [23, 30, 8, 55, 79];  
¿Y en el siguiente array? [23, 30, 8, 0, 10];*/

var numero1 = new Array(23, 30, 8, 55, 79);

console.log(numero1.find(index => index > 50));


var numero2 = new Array(23, 30, 8, 0, 10);

console.log(numero2.find(index=> index > 50));