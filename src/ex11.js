//Filtra los numeros superiores a 25 e inferiores a 10 (ambos incluidos) y luego multiplicalos

const numbers = [3,7,8,10,12,15,24,32,17,21,25,26];


const result = numbers.filter(x => 10 <= x && x <=25).reduce((acc , curr) => curr*acc);//numbers. ( ). (( ) => curr*acc);

console.log(result);

/* 
output:
385560000
*/