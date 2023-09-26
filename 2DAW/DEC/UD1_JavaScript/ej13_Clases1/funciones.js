class ComplejoCheste {
  constructor(matricula, NIA, nombre, apellidos, curso, modelo) {
    this.matricula = matricula;
    this.NIA = NIA;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.curso = curso;
    this.modelo = modelo;
  }

  iniciar() {
    return (
      "matricula:"+ this.matricula +"<br/> NIA:"+ this.NIA+"<br/> Nombre:"+ this.nombre
      +"<br/> Apellidos:"+ this.apellidos+"<br/> Curso:"+ this.curso+"<br/> Modelo: "+this.modelo
    );
  }

  mostrarDatos(){
    return (
        "matricula:"+ this.matricula +"<br/> NIA:"+ this.NIA
        +"<br/> Curso:"+ this.curso+"<br/> Modelo: "+this.modelo
      );
  }
}
