//------------- ✿◕‿◕✿----------------
// CLASE 9 - Lunes 16 de mayo de 2022
// Estructuras de Datos y Métodos
// Ejercicio 1: Sumar Arreglos (con Métodos)

/*
• Sumar los elementos de cada una de las posiciones
de dos vectores y guardar el resultado en otro vector
• El arreglo tiene dimensión 6 y los números de los dos
vectores los carga el usuario

Ejemplo:
v1 = 1, 3, 7, 9, 9, 5
v2 = 6, 9, 2, 5, 9, 4
vSuma = 7, 12, 9, 14, 18, 9
*/

let v1: number[] = [1, 3, 7, 9, 9, 5];
let v2: number[] = [6, 9, 2, 5, 9, 4];
let vSuma: number[] = [7, 12, 9, 14, 18, 9];
let indice: number;

//funcion cargar vector v1 y vector v2

function cargarVector(v: number[], cantidad: number): number[] {
  for (indice = 0; indice < cantidad; indice++) {
    v[indice] = Number(
      prompt("Ingrese el valor de la posición " + indice + ":")
    );
  }
  return cargarVector;
}

//funcion mostrar vector
function mostrarVector(v: number[], cantidad: number): number[] {
  for (indice = 0; indice < 6; indice++) {
    console.log(v[indice] + "");
  }
  return mostrarVector;
}

// funcion sumar vector v1 y vector v2
function sumarVector(
  v1: number[],
  v2: number[],
  vSuma: number[],
  cantidad: number
): number[] {
  for (indice = 0; indice < 6; indice++) {
    vSuma[indice] = v1[indice] + v2[indice];
  }
  return sumarVector;
}
console.log("Cargar v1");
cargarVector(v1, 6);
console.log("Cargar v2");
cargarVector(v2, 6);
sumarVector(v1, v2, vSuma, 6);
console.log("Valores de v1");
mostrarVector(v1, 6);
console.log("Valores de v2");
mostrarVector(v2, 6);
console.log("Valores de vSuma");
mostrarVector(vSuma, 6);

//------------- ✿◕‿◕✿----------------

//------------- ✿◕‿◕✿----------------
//CLASE 7 - Lunes 9 de mayo de 2022
//Estructura de Datos - Arreglos

// Ejercicio 1: Sumar Dos Arreglos

/* • Sumar los elementos de cada una de las posiciones de dos arreglos y guardar el resultado en otro arreglo.
• El arreglo tiene dimensión 6 y los números de los dos vectores los carga el usuario. */

/*  Ejemplo:
v1 = 1, 3, 7, 9, 9, 5
v2 = 6, 9, 2, 5, 9, 4
vSuma = 7, 12, 9, 14, 18, 9
*/
/*
let v1: number[] = new Array(6);
let v2: number[] = new Array(6);
let vSuma: number[] = new Array(6);
let indice: number;
//Cargo el vector v1
for (indice = 0; indice < 6; indice++) {
  v1[indice] = Number(prompt("Ingrese el valor de v1[" + indice + "]"));
}
//Cargo el vector v2
for (indice = 0; indice < 6; indice++) {
  v2[indice] = Number(prompt("Ingrese el valor de v2[" + indice + "]"));
}
//Sumo los valores y muestro
for (indice = 0; indice < 6; indice++) {
  vSuma[indice] = v1[indice] + v2[indice];
  console.log("vSuma[ " + indice + "]= " + vSuma[indice]);
}
*/
//------------- ✿◕‿◕✿----------------
