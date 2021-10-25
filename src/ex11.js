//Filtra los numeros superiores a 25 e inferiores a 10 (ambos incluidos) y luego multiplicalos

const numbers = [3,7,8,10,12,15,24,32,17,21,25,26];


const result = numbers.filter(n => 10 <= n && n <=25).reduce((acc, curr) => curr*acc);

console.log(result);

/* 
output:
385560000
*/