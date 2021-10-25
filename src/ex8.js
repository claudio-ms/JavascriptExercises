//Determina si el valor actual es mayor o menor que el anterior

const numbers = [0,7,4,6,13,24,21,678,987];

numbers.map((num,i ) => {
    const lastValue = numbers[i-1]; /* con el [i] lo que hacemos es determinar que 
    ese valor va a ser la posicion del indice de cada valor al añadir el "-1" lo que dice es i vale 0 por lo que si le resto 1 */
    if(num > lastValue ) {
        console.log( num + ' is bigger than ' + lastValue);
    } else {
        console.log( num + ' is less than ' + lastValue);
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