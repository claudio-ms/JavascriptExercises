// En un triathlon se desempeñan 3 actividades: correr, nadar, bicicleta
// Vamos a usar if/else if para codificar la logica de la prueba 

const swiming = 'swiming';
const running = 'running';
const riding = 'riding';

const sport = 'riding';

console.log('Actual sport: ' + sport); 

if (sport === 'swiming') {
    console.log('time to put on the swimsuit!');
} else if (sport === 'riding') {
    console.log('Lets take a ride!' );
} else if (sport === 'running') {
    console.log('run time!');
}