/*
La empresa 2DAWCheste necesita implementar un control de excepciones para comprobar los commits erróneos 
y correctos que se envían a producción durante la semana. El número máximo de commits será de 10,
 pudiéndose incrementar en un futuro.

1.La probabilidad de error de alguno de los commits que realicen los trabajadores del 30% 
(pista: Utilizar la función Math()).
2.El programa debe de sacar por pantalla los commits totales enviados, los erróneos y los correctos.
3.El control de excepciones será muy importante para que cuando haya un commit erróneo la producción no se detenga, 
ya que puede afectar negativamente a la economía de la empresa.
4.A disfrutar!
*/
function probabilidadError() {
  const numeroAleatorio = Math.random();
  return numeroAleatorio <= 0.3;
}

function commitErroneo() {
  return probabilidadError();
}

function contadorCommits(numeroCommits) {
  let commitsCorrectos = 0;
  let commitsErroneos = 0;

  for (let i = 1; i < numeroCommits+1; i++) {
    console.log("Enviando commit "+i+"\n");
    try {
      if (commitErroneo()) {
        commitsErroneos++;
        throw new Error("Commit erroneo detectado");
      } else {
        commitsCorrectos++;
      }
    } catch (error) {
      console.error("Error");
    }
  }

  console.log("Commits totales enviados: " + numeroCommits);
  console.log("Commits correctos: " + commitsCorrectos);
  console.log("Commits erroneos: " + commitsErroneos);
}

const numeroMaxCommits = 10;
contadorCommits(numeroMaxCommits);

