let modulosDaw = new Map();

modulosDaw.set('DEC',180);
modulosDaw.set('DWS', 200);
modulosDaw.set('DAW',150);
modulosDaw.set('DIW',120);

let modulosAlumnosDaw = new Map();

modulosAlumnosDaw.set('DEC',['David','Pepe','Antonio','Paco','Pablo','Carlos','Carmen', 'Ruben', 'Lorenzo']);
modulosAlumnosDaw.set('DWS', ['David','Sara','Antonio','Paco','Pablo','Carlos','Maria', 'Rosa', 'Natalia', 'Miriam']);
modulosAlumnosDaw.set('DAW',['David','Pepe','Antonio','Paco','Pablo', 'Ruben', 'Vicente']);
modulosAlumnosDaw.set('DIW',['Pepe','Antonio','Toni','Pablo','Carlos','Carmen', 'Ruben', 'Lorenzo']);

const abreviaturaModulos = modulosDaw.keys();
const numeroHorasModulos = modulosDaw.values();
const nombreAlumnos = modulosAlumnosDaw.keys();
const numeroAlumnos = modulosAlumnosDaw.values();

for (const modulo of abreviaturaModulos) {
    console.log('La asignatura de '+modulo+' tiene '+numeroHorasModulos.next().value
    +' horas en total con '+modulosAlumnosDaw.get(modulo).length + ' alumnos matriculados, \nlos cuales son '
    +numeroAlumnos.next().value+'\n')
}
