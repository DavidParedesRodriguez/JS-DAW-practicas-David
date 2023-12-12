/* 1. Crear una clase llamada rombo con dos propiedades: DiagonalH y DiagonalV.
2. A dicha clase le añadiremos su respectivo constructor al que le pasaremos los valores anteriores
 cuando instanciemos el objeto.
3. Además, debe contener un método que calcule su area, que será: DiagonalH * DiagonalV.
4. El método debe devolver un número.
5. Muestra los resultados por pantalla.*/
var Rombo = /** @class */ (function () {
    function Rombo(diagonalH, diagonalV) {
        this.DiagonalH = diagonalH;
        this.DiagonalV = diagonalV;
    }
    Rombo.prototype.calcularArea = function () {
        return this.DiagonalH * this.DiagonalV;
    };
    return Rombo;
}());
