import { MainIndex } from "../app/main/MainIndex.js";
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
  test(){
    return this.nombre;
  }
}



const index = new MainIndex();
index.setTitleHead("Blueman: Tu Puerta al Asombro Tecnológico");
index.init();
// // Crear un objeto persona
// const persona1 = new Persona('Juan', 30);
// persona1.saludar();
// const titulo = document.querySelector('h1');
// titulo.textContent = persona1.test();





class Estudiante extends Persona {
  constructor(nombre, edad, curso) {
    super(nombre, edad);
    this.curso = curso;
  }

  estudiar() {
    console.log(`${this.nombre} está estudiando ${this.curso}.`);
  }
}

// Crear un objeto estudiante
const estudiante1 = new Estudiante('María', 25, 'Matemáticas');
estudiante1.saludar();
estudiante1.estudiar();
