//Seleccionamos el formulario por su ID
const form = document.getElementById('form');

//Crea un fragmento HTML vacío, así se irá insertando cada bloque nuevo de 
// html aquí, y luego de una se insertará todo en box.
const fragment = document.createDocumentFragment();

//Creamos un elemento label para "Nombre"
const labelNombre = document.createElement('label');
labelNombre.textContent = 'Nombre: ';
fragment.appendChild(labelNombre);

// Creamos un elemento input para el nombre
const inputNombre = document.createElement('input');
inputNombre.type = 'text';
fragment.appendChild(inputNombre);

//Creamos un elemento label para "Apellido"
const labelApellido = document.createElement('label');
labelApellido.textContent = 'Apellido: ';
fragment.appendChild(labelApellido);

// Creamos un elemento input para el apellido
const inputApellido = document.createElement('input');
inputApellido.type = 'text';
fragment.appendChild(inputApellido);

//Creamos un boton
const botonSaludar = document.createElement('button');
botonSaludar.textContent = 'Enviar datos';
fragment.appendChild(botonSaludar);

//creamos un párrafo para mostrar el mensaje:
const mensajeP = document.createElement('p');
fragment.appendChild(mensajeP);

// Agregar un evento de clic al botón "Saludar"
botonSaludar.addEventListener('click', function(e) {
    // Prevenir la recarga de la página por defecto
    e.preventDefault(); 

    const nombre = inputNombre.value;
    const apellido = inputApellido.value;

    if (nombre && apellido) {
        const mensaje = `Hola, buenos días ${nombre} ${apellido}, gracias por rellenar el formulario.`;
        mensajeP.textContent = mensaje;
    } else {
        mensajeP.textContent = 'Por favor, ingrese su nombre y apellido.';
    }
});

//Inyección de todo el código en el formulario
form.appendChild(fragment);