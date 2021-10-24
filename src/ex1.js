// Vamos a usar los condicionales if/else para codificar 
// la primera prueba del juego del calamar 

const greenLight = 'green light';
const redLight = 'red light';

const lightSelected = 'red light';

console.log('Light selected is: ' + lightSelected);

//Si la luz es roja {
    console.log('STOP!');
//} Si no, es verde { 

    console.log('RUN!');
//}

/*output :
Light selected is:redLight
STOP! 
*/

if (lightSelected === redLight) {
    console.log('STOP!');
} else { 
    console.log('RUN!');
}
