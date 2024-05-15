/*Encontrar el elemento más grande del arreglo

Dado el siguiente arreglo
[4,7,9,3,1,45,67,23,29,78,11,16]
- Crear un programa que encuentre cuál es el número
más grande del arreglo e imprimirlo por consola
- Almacenar el número más grande en una variable
global y pasarlo a una función para determinar si el
número es par o impar
*/
// Definir el arreglo
const arr: number[] = [4,7,9,3,1,45,67,23,29,78,11,16];

// Variable global para almacenar el número más grande
let maximo: number = arr[0];

// Función para encontrar el número más grande
function encontrarMaximo(arreglo: number[]): number {
    let max = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > max) {
            max = arreglo[i];
        }
    }
    return max;
}

// Función para determinar si un número es par o impar
function determinarParImpar(numero: number): void {
    if (numero % 2 === 0) {
        console.log(`${numero} es un número par.`);
    } else {
        console.log(`${numero} es un número impar.`);
    }
}

// Encontrar el número más grande
maximo = encontrarMaximo(arr);
console.log(`El número más grande del arreglo es: ${maximo}`);

// Determinar si el número más grande es par o impar
determinarParImpar(maximo);
