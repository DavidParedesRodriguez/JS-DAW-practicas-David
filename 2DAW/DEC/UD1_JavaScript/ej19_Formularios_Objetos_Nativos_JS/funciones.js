function convertiTexto() {
  const intTexto = document.getElementById("introducirTexto").value;
  const invertido = document.getElementById("aLaInversa");
  const mayuscula = document.getElementById("mayusacula");
  const repetir = document.getElementById("repetida");
  const inversaYMayuscula = document.getElementById("inversaMayuscula");

  // Convertir a mayúsculas
  const mayusculas = intTexto.toUpperCase();

  // Reversar la cadena
  const alReves = intTexto.split("").reverse().join("");

  // Repetir la cadena
  const repetida = intTexto + intTexto + intTexto;

  // Invertir el texto en mayúscula
  const inverti = intTexto.split("").reverse().join("").toUpperCase();

  invertido.value = alReves;
  mayuscula.value = mayusculas;
  repetir.value = repetida;
  inversaYMayuscula.value = inverti;
}

function calcularDias() {
    const introducirCumple = document.getElementById('diaCumple');
    
    const cumple = new Date(introducirCumple.value);
    const hoy = new Date();

    if (isNaN(cumple)) {
        alert("Porfavor, ingresa una fecha validad");
    }else{
        const diferenciaDias = hoy - cumple;
        const tiempoTotal = Math.floor(diferenciaDias /(1000 * 60 * 60 * 24));
        alert("Han transcurrido "+tiempoTotal+" días, aproximadamente, desde que naciste");
    }
}
