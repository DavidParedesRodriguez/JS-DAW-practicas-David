/*Crea una página donde se muestre un formulario con dos campos: email y password, con un botón para enviarlo.

La aplicación deberá validar que el mail y password sean válidos una vez se pierda el focus del campo y en caso contrario, muestre un mensaje de error indicando el formato esperado.

Los formatos son los siguientes:
mail ➡️ xxx@yyyy.zzzz
password ➡️ un texto de longitud entre 8 y 10 caracteres. */

function validarEmail(){
    const emailInput = document.getElementById('introducirEmail');
        const emailError = document.getElementById('errorEmail');
        const emailFormato = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!emailFormato.test(emailInput.value)) {
            emailError.textContent = 'Formato de correo electrónico no es correcto. \nDebe ser xxx@yyyy.zzzz';
        } else {
            emailError.textContent = '';
        }
}

function validarPassword() {
    const passwordInput = document.getElementById('introducirPassword');
    const passwordError = document.getElementById('errorPassword');
    const passwordValue = passwordInput.value;

    if (passwordValue.length < 8 || passwordValue.length > 10) {
        passwordError.textContent = 'La contraseña debe tener entre 8 y 10 caracteres.';
    } else {
        passwordError.textContent = '';
    }
}