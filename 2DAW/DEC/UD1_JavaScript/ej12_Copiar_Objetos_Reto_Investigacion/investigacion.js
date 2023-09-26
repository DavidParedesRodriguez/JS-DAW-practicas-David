// Copia este código dentro de VSC
let persona = {nombre: "NombreInventado", profesion: "Informático DAW"};

// Al copiar los valores de un objeto no estamos copiando dichos valores,
// sino la la referencia al espacio de memoria.

let antonioObj = {... persona};

antonioObj.nombre = "Pepito";
antonioObj.edad = "55";

console.log(antonioObj.nombre);
console.log(persona.nombre);

console.log(antonioObj.profesion);
console.log(persona.profesion);

// ¿Qué está pasando?

/*
Lo que esta pasando es que cuando asignamos 'let antonioObj = persona;' 
no estamos creando una copia del objeto 'persona', sino que estamos creando una nueva variable 'antonioObj' que apunta
al mismo objeto en la memoria que 'persona', los cambios que se realicen en 'antonioObj' se reflejará en 'persona'
y lo mismo sucede al revés, porque los dos apuntan al mismo objeto
*/
// Realiza y prueba cómo se desestructura un objeto.

// Mira la teoría y soluciona el problema.