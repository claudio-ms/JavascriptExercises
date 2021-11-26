// En un triathlon se desempeñan 3 actividades: correr, nadar, bicicleta
// Vamos a usar if/else if para codificar la logica de la prueba 

const swiming = 'swiming';
const running = 'running';
const riding = 'riding';

const sport = 'swiming';

console.log('Actual sport: ' + sport); 

if (sport === 'swiming') {
    console.log('time to put on the swimsuit!');
}else if (sport === 'riding') {
    console.log('Lets take a ride!' );

}else {
    console.log('run time!');
}
/*Si sport es igual a swiming {
} Si sport es igual a riding {
} Sino es ninguno de los otros deportes {
}*/

/*
output: 
Actual sport: swiming
time to put on the swimsuit!
*/