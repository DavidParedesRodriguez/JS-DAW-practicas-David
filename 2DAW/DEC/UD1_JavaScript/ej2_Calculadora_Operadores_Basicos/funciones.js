
       var numero1 = parseFloat(prompt("Introduce el primer número: "))
       var numero2 = parseFloat(prompt("Introduce el segundo número: "));
    if(!isNaN(numero1) && !isNaN(numero2)){
          function resta(){
    
             var resultado = numero1 - numero2;

             alert("El resultado de la resta es: "+resultado);
        }

        function multiplicacion(){
             var resultado = numero1 * numero2;

             alert("El resultado de la multiplicacion es: "+resultado);
        }

        function division(){
           var resultado = numero1 / numero2;

           alert("El resultado de la division es: "+resultado);
       }
    }else{
        alert("Por favor, ingresa números válidos");
    }
    