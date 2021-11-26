// Vamos a usar los condicionales if/else para codificar 
// la primera prueba del juego del calamar 

const greenLight = 'green light';
const redLight = 'red light';

const lightSelected = 'green light';

console.log('Light selected is: ' + lightSelected);

if (lightSelected === 'red light') {
    //Si la luz es roja {
    console.log('STOP!');

}else {
    //} Si no, es verde { 
        console.log('RUN!');
    //}
}

/*output :
Light selected is:redLight
STOP! 
*/