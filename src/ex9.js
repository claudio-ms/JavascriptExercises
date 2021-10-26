//Invierte el orden del siguiente array

const array = [0,1,2,3,4,5,6,7,8,9,10];

const result = []; 
array.map ((n , i) => result[(array.length -i)-1] = n);

console.log(result);

/* 
output:
[
  10, 9, 8, 7, 6,
   5, 4, 3, 2, 1,
   0
]
*/