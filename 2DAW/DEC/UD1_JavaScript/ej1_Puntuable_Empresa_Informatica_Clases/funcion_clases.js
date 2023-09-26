class Empleado {
    constructor(nombre) {
      this.departamento = "Informático";
      this.nombre = nombre;
    }
  }
  
  class Director extends Empleado {
    constructor(nombre) {
      super(nombre);
      this.informes = [];
    }
  }
  
  class Trabajador extends Empleado{
      constructor(nombre){
          super(nombre);
          this.proyectos = [];
      }
  }
  
  class Ingeniero extends Trabajador{
      constructor(nombre){
        super(nombre)
          this.lenguajeProgramacion = '';
      }
  }


