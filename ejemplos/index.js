// Ejemplos de JavaScript

// Comentario de linea

/**
 * Comentario de bloque
 */

console.log("Hola mundo");
console.log("-----------");

const edad = 20;
const nombre = "Juan";
const apellido = "Gómez";
const esEstudiante = true;
const altura = 1.76;
const semestres = []; // List -> array
const materiaPreferida = { nombre: "Calculo", id: 0 }; // Diccionario -> Objeto -> JSON (JavaScript Object Notation)
const universidad = null;
const carrera = undefined;

console.log("Tipo de dato de nombre:" + typeof nombre);
console.log("Tipo de dato de edad:" + typeof edad);

console.log("-----Conversion de string a number-----");
const precioMatricula = "5000000.5";
console.log(parseInt(precioMatricula));
console.log(parseFloat(precioMatricula));

console.log("--- == ---");
console.log("Doble igual: " + "45" == 45);
console.log("Triple igual: " + "45" === 45);

console.log("---- Concatenación ----");
console.log(nombre + " " + apellido);
console.log(`${first} ${apellido}`);

console.log("---- Operador Ternario ---- (exp ? verdadero : falso)");
console.log(edad > 18 ? "Tiene premio" : "Pa tu casa a ver pocoyo");
let condition = edad > 18;
if (condition) {
}
if (condition) {
} else {
}

const dia = "LUNES";
switch (day) {
  case "LUNES":
    console.log("Lunes");
    break;
  case "MARTES":
    console.log("MARTES");
    break;
  case "MIERCOLES":
    console.log("MIERCOLES");
    break;
  default:
    console.log("No es valido papito");
    break;
}

console.log("---- ciclos ----");
for (let index = 0; index < 10; index++) {}

// while (condition) {

// }

for (const item of [1, 2, 3]) {
  console.log(item);
}

for (const key in materiaPreferida) {
  console.log(key);
}

[1, 2, 3].forEach((element) => {
  console.log(element);
});

function imprimirNombre(nombre) {
  console.log(nombre);
}

const imprmirNombreYApellido = (nombre, apellido) => {
  console.log(`${first} ${apellido}`);
};

imprimirNombreYApellido(nombre, apellido);
