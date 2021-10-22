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
    age:16
},
];

friends.filter(person => person.age > 18).map(p => console.log('Friend with name: ' + p.name + ' is older than 18'));

/*
output: 

Friend with name: Juan is older than 18
Friend with name: Jaume is older than 18
*/