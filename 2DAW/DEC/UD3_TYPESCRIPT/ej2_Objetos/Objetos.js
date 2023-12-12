/*1. leer la teoría referente a los objetos.
2. Crea un objeto del curso de DAW debidamente tipado donde obtengamos el nombre del profesor, nombre del alumno, la edad, pais, fecha de nacimiento, si tiene mascota o no y un objeto anidado llamado trabajo que contendrá la empresa donde se trabaja y el sector.
3. Saca por pantalla los resultados mediante un console log*/
// Crear un objeto del curso de DAW
var cursoDAW = {
    profesor: "Toni",
    alumno: "David Paredes Rodríguez",
    edad: 21,
    pais: "España",
    fechaNacimiento: "2002-05-28",
    tieneMascota: true,
    trabajo: {
        empresa: "GFT",
        sector: "Programador",
    },
};
// Uso del objeto
console.log("Curso DAW:");
console.log("Profesor:", cursoDAW.profesor);
console.log("Alumno:", cursoDAW.alumno);
console.log("Edad:", cursoDAW.edad);
console.log("País:", cursoDAW.pais);
console.log("Fecha de Nacimiento:", cursoDAW.fechaNacimiento);
console.log("Tiene Mascota:", cursoDAW.tieneMascota ? "Sí" : "No");
if (cursoDAW.trabajo) {
    console.log("Trabajo:");
    console.log("Empresa:", cursoDAW.trabajo.empresa);
    console.log("Sector:", cursoDAW.trabajo.sector);
}
