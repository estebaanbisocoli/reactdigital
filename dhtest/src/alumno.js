const Alumno = class {
  constructor(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
    this.curso = "React"
    this.aprobado = true
  }
  getNombre() {
    return this.nombre
  }
  getApellido() {
    return this.apellido
  }
  getCurso() {
    return this.curso
  }
  getAprobado() {
    return this.aprobado
 }
}
export default Alumno
