/*1. Crear un objeto con un mínimo de 3 parámetros que puedan elbergar datos tanto de tipo number, 
string, boolean y muéstralo por pantalla.
2. Crea un array en TS y almacena y muestra los datos mostrados por pantalla en el punto 1.
3. Crea un alias para un objeto (parecido al del paso 1) y muestra los resultados. (ver la teoría)
4. Utiliza el operador type para declarar un mínimo de 5 constantes referentes a tus hobbies ordenados 
por prioridad del primero al último
 (por ejemplo: "1.futbol" | "2.programar" | "3.peliculas" | "4.consola" | "5.gimnasio";).
 El programa devolverá "true" solamente cuando se asigne el hobby con mayor prioridad,
  o sea el primero de la lista, y false cuando se asigne a otro. Muestra los resultados por pantalla*/

  type CursoDAW = {
    profesor: number | string | boolean;
    alumno:  number | string | boolean;
    edad:  number | string | boolean;
    pais:  number | string | boolean;
    fechaNacimiento:  number | string | boolean;
    tieneMascota:  number | string | boolean;
    
  };
  
  // Crear un objeto del curso de DAW
  const cursoDAW: CursoDAW = {
    profesor: "Toni",
    alumno: "David Paredes Rodríguez",
    edad: 21,
    pais: "España",
    fechaNacimiento: "2002-05-28",
    tieneMascota: true,
  };

  // Crear un array con los datos del curso
const datosCurso: (number | string | boolean)[] = [
    cursoDAW.profesor,
    cursoDAW.alumno,
    cursoDAW.edad,
    cursoDAW.pais,
    cursoDAW.fechaNacimiento,
    cursoDAW.tieneMascota,
  ];

//3. Crea un alias para un objeto (parecido al del paso 1) y muestra los resultados. 

const cursoDAM : CursoDAW = {
    profesor: "Marcos",
    alumno: "Pedro",
    edad: 21,
    pais: "España",
    fechaNacimiento: "2002-05-28",
    tieneMascota: true,
}

const datosCursoDAM: (number | string | boolean)[] = [
    cursoDAM.profesor,
    cursoDAM.alumno,
    cursoDAM.edad,
    cursoDAM.pais,
    cursoDAM.fechaNacimiento,
    cursoDAM.tieneMascota,
  ];


  /*4. Utiliza el operador type para declarar un mínimo de 5 constantes referentes a tus hobbies ordenados 
por prioridad del primero al último
 (por ejemplo: "1.futbol" | "2.programar" | "3.peliculas" | "4.consola" | "5.gimnasio";).
 El programa devolverá "true" solamente cuando se asigne el hobby con mayor prioridad,
  o sea el primero de la lista, y false cuando se asigne a otro. Muestra los resultados por pantalla */

  type Hobbies =
  | "1.futbol"
  | "2.programar"
  | "3.peliculas"
  | "4.consola"
  | "5.gimnasio";

// Declarar constantes con los hobbies ordenados por prioridad
const hobby1: Hobbies = "1.futbol";
const hobby2: Hobbies = "2.programar";
const hobby3: Hobbies = "3.peliculas";
const hobby4: Hobbies = "4.consola";
const hobby5: Hobbies = "5.gimnasio";

// Función que devuelve true si el hobby es el de mayor prioridad
function esHobbyDeMayorPrioridad(hobby: Hobbies): boolean {
  return hobby === "1.futbol";
}


