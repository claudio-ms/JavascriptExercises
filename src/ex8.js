//Determina si el valor actual es mayor o menor que el anterior


/*numbers. (( ) => {
    const lastValue = recoger el valor anterior;
    Si el nuevo nuemro es mayor que el anteriot {
        console.log( num + ' is bigger than ' + lastValue);
    } Si no {
        console.log( num + ' is less than ' + lastValue);
    }
} )*/
const numbers = [0,7,4,6,13,24,21,678,987];

numbers.map( (item, index) => {
    const lastValue = numbers[index-1];
    if (item > lastValue) {
        // console.log( num + ' is bigger than ' + lastValue);
        console.log(item + ' is bigger than ' + lastValue);
    }else {
        console.log(item + ' is less than ' + lastValue);

        // console.log( num + ' is less than ' + lastValue);
    }
});
// let lastValue = numbers.map(number => (numbers[number]));
    // lastValue = number;


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