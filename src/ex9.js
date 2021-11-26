//Invierte el orden del siguiente array

// arr.splice(4,0,23,77,99)
// El metodo .splice() utiliza 2 parametros, en el ejemplo...
// el número 4 (es el valor de la posicion que tiene dentro del arreglo)
// el número 0 (es el número de elementos q'elimina antes de insertar el resto, 0 no elimina nada)
// a partir del tercer elemento, son los elementos que se insertan en el arreglo 1 ó mas.

const array = [0,1,2,3,4,5,6,7,8,9,10];

//array. ((num, index) => determinar posicion donde queremos insertar el nuevo numero = num);
array.splice(7, 0, 28);
console.log(array);
console.log(array.reverse());

// const result = array.map((numero,index) => numero
// console.log(array.reverse());Test

/* 

output:
[
  10, 9, 8, 7, 6,
   5, 4, 3, 2, 1,
   0
]

*/