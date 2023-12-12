/*1. Realiza algunos de los ejemplos propuestos en la teoría propuesta por el profesor.
2. Transpila el código a JS y comprueba los cambios realizados. */

enum Dias {
  Lunes, //0
  Martes, //1
  Miercoles, //2
  Jueves, //3
  Viernes, //4
  Sabado, //5
  Domingo, //6
}

console.log(Dias.Martes)

enum DiasTexto {
    Lunes="Lunes",
    Martes="Martes",
    Miercoles="Miercoles",
    Jueves="Jueves",
    Viernes="Viernes",
    Sabado="Sabado",
    Domingo="Domingo",
  }

  console.log(DiasTexto.Lunes)