/* 1. Crear una clase llamada rombo con dos propiedades: DiagonalH y DiagonalV.
2. A dicha clase le añadiremos su respectivo constructor al que le pasaremos los valores anteriores
 cuando instanciemos el objeto.
3. Además, debe contener un método que calcule su area, que será: DiagonalH * DiagonalV.
4. El método debe devolver un número.
5. Muestra los resultados por pantalla.*/

class Rombo {
    DiagonalH: number;
    DiagonalV: number;
  
    constructor(diagonalH: number, diagonalV: number) {
      this.DiagonalH = diagonalH;
      this.DiagonalV = diagonalV;
    }
  
    calcularArea(): number {
      return this.DiagonalH * this.DiagonalV;
    }
  }
  
  