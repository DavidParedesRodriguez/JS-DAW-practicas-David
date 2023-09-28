//Crea una clase llamada AlumnoDaw (nombre, apellido, email y edad) y creat sus getters y setters. Realiza todas las pruebas que consideres oportunas.
class AlumnoDaw {
  constructor(nombre, apellido, email, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.edad = edad;
  }

   setNombre(nombre) {
    this.nombre = nombre;
  }

   setApellido(apellido) {
    this.apellido = apellido;
  }

   setEmail(email) {
    this.email = email;
  }

   setEdad(edad) {
    this.edad = edad;
  }

   getNombre() {
    return "Nombre: " + this.nombre;
  }

   getApellido() {
    return "Apellido: " + this.apellido;
  }

   getEmail() {
    return "Correo electrónico: " + this.email;
  }

   getEdad() {
    return "Edad: " + this.edad;
  }
}
