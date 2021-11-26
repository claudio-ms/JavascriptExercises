//Filtra los numeros superiores a 25 e inferiores a 10 (ambos incluidos) y luego multiplicalos

const numbers = [3,7,8,10,12,15,24,32,17,21,25,26];

// const resulutl = numbers. ( ). (( ) => curr*acc);

const result1 = numbers.filter(x => (x < 10 || x >25));
const result2 = result1.reduce((acc, curr) => (acc * curr)); 
console.log(result1);   // imprimo result1 para verificar si el nuevo arreglo es correcto.
console.log(result2);   // la multiplicación es correcta pero no coincide con el que ha puesto el profesor.

/* 
output:
385560000
*/