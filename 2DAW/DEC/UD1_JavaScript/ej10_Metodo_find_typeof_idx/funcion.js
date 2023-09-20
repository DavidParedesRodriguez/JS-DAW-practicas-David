/*Nos proporcionan el siguiente array: 
["Desarrollo de Aplicaciones Web",12345678, "Administración de Sistemas Informáticos en Red",87654321, 
"Desarrollo de Aplicaciones Multiplataforma", 12348765]. 
Debemos de crear otro array donde insertemos nuestro curso y código (derecha). 
Además, debemos de utilizar el método find(), el typeof (para saber el tipo) y el "idx" para el índice. */

var array_principal = ["Desarrollo de Aplicaciones Web",12345678, "Administración de Sistemas Informáticos en Red",
87654321, "Desarrollo de Aplicaciones Multiplataforma", 12348765];

console.log(array_principal.find(el => el.length > 10));

console.log(array_principal.find((el, idx) => typeof el === "String" && idx === 1,(el, idx) => typeof el === number ));


var aray_secundario = new Array(array_principal.find((el,idx) => typeof el ==="string" && idx === 0),
array_principal.find((el,idx) => typeof el === "number" && idx === 1));

console.log(aray_secundario);

