class Usuario {
  constructor(nombre, email, contraseña) {
    this.nombre = nombre;
    this.email = email;
    this.contraseña = contraseña;
  }

  saludo() {
    return "Hola, soy " + this.nombre;
  }

  login(email, contraseña) {
    if (email === this.email && contraseña === this.contraseña) {
        return("true at usuario.login('"+email+"', '"+contraseña+"')");
    }else{
        return("false at usuario.login('"+email+"', '"+contraseña+"')");
    }
  }
}

class AlumnoASIR extends Usuario{
    constructor(nombre, email, contraseña){
        super(nombre, email, contraseña);
        this.cursos = [];
        this.activo =  false;
    }

    activar(){
        this.activo = true;
    }

    login(email, contraseña) {
        if (email === this.email && contraseña === this.contraseña) {
            return("true at usuarioASIR.login('"+email+"', '"+contraseña+"')");
        }else{
            return("false at usuarioASIR.login('"+email+"', '"+contraseña+"')");
        }
      }

      agregarCurso(curso){
        this.cursos.push(curso);
      }
}

class AlumnoDaw extends AlumnoASIR{
    constructor(nombre, email, contraseña){
        super(nombre, email, contraseña);
        this.cursos = [];
        this.activo = false;
    }

    activar(){
        this.activo = true;
    }

    login(email, contraseña) {
        if (email === this.email && contraseña === this.contraseña) {
            return("true at usuarioDaw.login('"+email+"', '"+contraseña+"')");
        }else{
            return("false at usuarioDaw.login('"+email+"', '"+contraseña+"')");
        }
      }

      agregarCurso(curso){
        this.cursos.push(curso);
      }

}