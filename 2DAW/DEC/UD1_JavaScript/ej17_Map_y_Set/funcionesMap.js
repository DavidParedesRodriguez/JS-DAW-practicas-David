/*Utiliza una colección de datos identificados por claves (map) para almacenar información de todos los módulos 
que se imparten en segundo de DAW.

El programa tiene que tener obligatoriamente la siguiente información:
   
    1.Muestra cuántos módulos hay en total.
    2.Muestra el contenido tanto de la clave como de su valor (printéalo bonito).
    3.Devuelve por pantalla solamente las abreviaturas de los módulos de 2DAW del Complejo de Cheste.
    4.Devuelve por pantalla el nombre de los módulos de 2DAW del Complejo de Cheste.
    5.Verifica si el módulo está dentro de algún módulo.
    6.Elimina el módulo que menos te interese.
*/

let modulosDaw = new Map();

modulosDaw.set('DEC','Desarrollo Web en Entorno Cliente');
modulosDaw.set('DWS','Desarrollo Web en Entorno Servidor');
modulosDaw.set('DAW','Despliegue de Aplicaciones Web');
modulosDaw.set('DIW','Diseño de interfaces Web');

console.log('La cantidad total de módulos son: '+modulosDaw.size);
const iteratorClave = modulosDaw.keys();
const iteratorValor = modulosDaw.values();
console.log('La abreviatura es '+iteratorClave.next().value+' y su nombre completo es '+iteratorValor.next().value);
console.log('\nLa abreviatura es '+iteratorClave.next().value+' y su nombre completo es '+iteratorValor.next().value);
console.log('\nLa abreviatura es '+iteratorClave.next().value+' y su nombre completo es '+iteratorValor.next().value);
console.log('\nLa abreviatura es '+iteratorClave.next().value+' y su nombre completo es '+iteratorValor.next().value);


console.log('\nAbreviaturas:')
for (let modulo of modulosDaw.keys()) {
    console.log('\n'+modulo);
}

const valorModulos = modulosDaw.values();
console.log('Los nombres completos de los módulos son:\n');
console.log(valorModulos.next().value);
console.log(valorModulos.next().value);
console.log(valorModulos.next().value);
console.log(valorModulos.next().value+'\n');

console.log('¿Está el módulo DAW entre los módulos de 2 de DAW? ->'+modulosDaw.has('DAW'));
console.log('\n¿Está el módulo GBD entre los módulos de 2 de DAW? ->'+modulosDaw.has('GBD'));

console.log('La clave -> DIW y su valor -> '+modulosDaw.get('DIW'));
modulosDaw.delete('DIW');
