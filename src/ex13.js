//Muestra los nombres de los amigos que son mayores de edad

const friends = [
    {
    name: 'Juan',
    surname: 'Lopez',
    age:23
},{
    name: 'Pedro',
    surname: 'Rey',
    age:17
},{
    name: 'Jaume',
    surname: 'Meskini',
    age:31
},{
    name: 'Toni',
    surname: 'Romeu',
    age:26
},
];

//friends. (person =>  ). (p => console.log('Friend with name: ' +   + ' is older than 18'));
friends.map( item => {
    if (item.age > 18) {
        console.log(`Friends with name: ${item.name} is older than 18\n`);
    }
})

/*
output: 

Friend with name: Juan is older than 18
Friend with name: Jaume is older than 18
*/