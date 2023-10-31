//Identifica al elemento donde se va a insertar el html
const form = document.getElementById('form');

//Crea un fragmento HTML vacio, así se irá insertando cada bloque nuevo de 
// html aquí, y luego de una se insertará todo en box.
const fragment = document.createDocumentFragment();

// Creación y clonación de los párrafos
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Párrafo 1 realizado desde JS';
fragment.appendChild(parrafo1);
const parrafo2 = parrafo1.cloneNode(true);
parrafo2.textContent = 'Párrafo 2 realizado desde JS';
fragment.appendChild(parrafo2);

// Creación del enlace
const enlace = document.createElement('a');
enlace.href = "http://www.google.es";
enlace.textContent = 'Ir a google';
fragment.appendChild(enlace);

//C reación de la lista
const lista = document.createElement('ul');
for (let index = 0; index < 3; index++) {
    const item = document.createElement('li');
    item.textContent = `elemento de la lista: ${index}`;
    lista.appendChild(item);    
}
fragment.appendChild(lista);

// Creación del select
const selector = document.createElement('select');
selector.name = 'numero';
const opciones = document.createElement('option');
opciones.textContent = 'Opcion 2';
opciones.value = '2';
selector.appendChild(opciones);
fragment.appendChild(selector);

//Creación del input
const div = document.createElement('div');
const input = document.createElement('input');
input.type = 'text';
div.appendChild(input);
fragment.appendChild(div);

//Inyección de todo el codigo en el formulario
form.appendChild(fragment);