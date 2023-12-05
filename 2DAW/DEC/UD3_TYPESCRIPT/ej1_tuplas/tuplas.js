/*1. Representar una tupla en TS que indique el nombre abreviado del módulo cursado, las horas y el número de alumnos.
2. Añade a cada una de las tuplas creadas anteriormente el nombre profesor que imparte la asignatura. Lo agregaremos mediante push():
3. Accede al primer elemento de la tupla mediante su índice.
4. Comprueba si aparece mediante su índice el nombre del profesor creado en el paso 2.
5. Transpílalo a tuplas.js y verifica los cambios.*/
var modulo1 = ["DEC", 400, 12];
var modulo2 = ["DAW", 320, 12];
var modulo3 = ["DWS", 480, 12];
var modulo4 = ["DIW", 380, 12];
// Asignación del nombre del profesor al momento de la creación del array
modulo1.push("Toni");
modulo2.push("Marcos");
modulo3.push("Antonio");
modulo4.push("Borja");
var primerElementoModulo1 = modulo1[0];
var primerElementoModulo2 = modulo2[0];
var primerElementoModulo3 = modulo3[0];
var primerElementoModulo4 = modulo4[0];
console.log(primerElementoModulo1); // Resultado: "DEC"
console.log(primerElementoModulo2); // Resultado: "DAW"
console.log(primerElementoModulo3); // Resultado: "DWS"
console.log(primerElementoModulo4); // Resultado: "DIW"
var nombreProfesor1 = modulo1[3];
console.log(nombreProfesor1); // Resultado: "Toni"
var nombreProfesor2 = modulo2[3];
console.log(nombreProfesor2);
var nombreProfesor3 = modulo3[3];
console.log(nombreProfesor3);
var nombreProfesor4 = modulo4[3];
console.log(nombreProfesor4);
