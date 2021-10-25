//Determina si el valor actual es mayor o menor que el anterior

const numbers = [0,7,4,6,13,24,21,678,987];

numbers.map ((n,index ) => {
    const lastValue = numbers[index-1];
    if(n > lastValue){
        console.log(n + ' is bigger than ' + lastValue);
    } else {
        console.log(n + ' is less than ' + lastValue);
    }
} )

/*
output:

0 is less than undefined
7 is bigger than 0
4 is less than 7
6 is bigger than 4
13 is bigger than 6
24 is bigger than 13
21 is less than 24
678 is bigger than 21
987 is bigger than 678
*/