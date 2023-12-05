/*1. Representar una tupla en TS que indique el nombre abreviado del módulo cursado, las horas y el número de alumnos.
2. Añade a cada una de las tuplas creadas anteriormente el nombre profesor que imparte la asignatura. Lo agregaremos mediante push():
3. Accede al primer elemento de la tupla mediante su índice.
4. Comprueba si aparece mediante su índice el nombre del profesor creado en el paso 2.
5. Transpílalo a tuplas.js y verifica los cambios.*/


type Modulo = [string, number, number, string?];

const modulo1: Modulo = ["DEC", 400, 12];
const modulo2: Modulo = ["DAW", 320, 12];
const modulo3: Modulo = ["DWS", 480, 12];
const modulo4: Modulo = ["DIW", 380, 12];

// Asignación del nombre del profesor al momento de la creación del array
modulo1.push("Toni");
modulo2.push("Marcos");
modulo3.push("Antonio");
modulo4.push("Borja");

const primerElementoModulo1: string = modulo1[0];
const primerElementoModulo2: string = modulo2[0];
const primerElementoModulo3: string = modulo3[0];
const primerElementoModulo4: string = modulo4[0];

console.log(primerElementoModulo1);  // Resultado: "DEC"
console.log(primerElementoModulo2);  // Resultado: "DAW"
console.log(primerElementoModulo3);  // Resultado: "DWS"
console.log(primerElementoModulo4);  // Resultado: "DIW"

const nombreProfesor1: string | undefined = modulo1[3];
console.log(nombreProfesor1);  // Resultado: "Toni"

const nombreProfesor2: string | undefined = modulo2[3];
console.log(nombreProfesor2);

const nombreProfesor3: string | undefined = modulo3[3];
console.log(nombreProfesor3);

const nombreProfesor4: string | undefined = modulo4[3];
console.log(nombreProfesor4);
