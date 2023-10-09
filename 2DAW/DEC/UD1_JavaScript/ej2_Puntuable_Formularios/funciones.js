function saludar() {
 
  document
    .getElementById("saludarBoton")
    .addEventListener("click", function () {
      
      var nombreUsuario = window.prompt("Por favor, introduce tu nombre:");

     
      if (nombreUsuario !== null && nombreUsuario !== "") {
        
        alert("Hola " + nombreUsuario);
      } else {
        
        alert("No ingresaste un nombre.");
      }
    });
}

function contador() {
 
  var letraA = window.prompt("Introduce una cadena de texto");

  if (letraA !== null && letraA !== "") {
    var contadorAminuscula = 0;
    var contadorAmayuscula = 0;

    for (let i = 0; i < letraA.length; i++) {
      if (letraA[i] === "A") {
        contadorAmayuscula++;
      }

      if (letraA[i] === "a") {
        contadorAminuscula++;
      }
    }

    alert(
      "El número de letras 'a' en la cadena es: " +
        contadorAminuscula +
        "\ny el número de letras 'A' en la cadena es: " +
        contadorAmayuscula
    );
  } else {
    alert("No ingresaste una cadena de texto.");
  }
}

function contadorAminusculas() {
  
  var letraA = window.prompt("Introduce una cadena de texto");

  if (letraA !== null && letraA !== "") {
    var contador = 0;

    var textoEnMinuscula = letraA.toLowerCase();
    for (let i = 0; i < textoEnMinuscula.length; i++) {
      if (textoEnMinuscula[i] === "a") {
        contador++;
      }
    }

    alert("El número de letras 'a' en la cadena es: " + contador);
  } else {
    alert("No ingresaste una cadena de texto.");
  }
}

function cambiarFondoColor() {
  var tipoColor = window.prompt(
    "Introduce el tipo de color:\n R(rojo), A(azul), V(verde)\n O B(Blanco) para vover al color inicial"
  );

  var letraColor = tipoColor.toUpperCase();

  if (letraColor === "R") {
    document.body.style.backgroundColor = "red";
  } else if (letraColor === "A") {
    document.body.style.backgroundColor = "blue";
  } else if (letraColor === "V") {
    document.body.style.backgroundColor = "green";
  } else if(letraColor ==="B"){
    document.body.style.backgroundColor = "white";
  }else{
    alert("No se ha encontrado ningún color con este texto");
  }
}


function cambiarColorFondoDiv(ratonEncima) {
    
    var miDiv = document.getElementById("miDiv");

    if (ratonEncima) {
       
        var colorAleatorio = generarColorAleatorio();
    
        
        miDiv.style.backgroundColor = colorAleatorio;
      } else {
        
        miDiv.style.backgroundColor = "";
      }
    }

  
  function generarColorAleatorio() {
    var letras = "0123456789ABCDEF";
    var color = "#";

   
    for (var i = 0; i < 6; i++) {
      color += letras[Math.floor(Math.random() * 16)];
    }

    return color;
  }

  //formulario
  function calcularMayor() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const numero3 = parseFloat(document.getElementById('numero3').value);

    if (!isNaN(numero1) && !isNaN(numero2) && !isNaN(numero3)) {
        const mayor = Math.max(numero1, numero2, numero3);
        alert(`El número mayor es: ${mayor}`);
    } else {
        alert('Por favor, ingresa valores numéricos en todos los campos.');
    }
}
