/*1. Realiza algunos de los ejemplos propuestos en la teoría propuesta por el profesor.
2. Transpila el código a JS y comprueba los cambios realizados. */
var Dias;
(function (Dias) {
    Dias[Dias["Lunes"] = 0] = "Lunes";
    Dias[Dias["Martes"] = 1] = "Martes";
    Dias[Dias["Miercoles"] = 2] = "Miercoles";
    Dias[Dias["Jueves"] = 3] = "Jueves";
    Dias[Dias["Viernes"] = 4] = "Viernes";
    Dias[Dias["Sabado"] = 5] = "Sabado";
    Dias[Dias["Domingo"] = 6] = "Domingo";
})(Dias || (Dias = {}));
console.log(Dias.Martes);
var DiasTexto;
(function (DiasTexto) {
    DiasTexto["Lunes"] = "Lunes";
    DiasTexto["Martes"] = "Martes";
    DiasTexto["Miercoles"] = "Miercoles";
    DiasTexto["Jueves"] = "Jueves";
    DiasTexto["Viernes"] = "Viernes";
    DiasTexto["Sabado"] = "Sabado";
    DiasTexto["Domingo"] = "Domingo";
})(DiasTexto || (DiasTexto = {}));
console.log(DiasTexto.Lunes);
