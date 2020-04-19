// FOR LOOP
// for (i = 0; i < 10; i++) {
//     // console.log('Number ' + i);
//     if (i === 2) {
//         console.log('2 is my favorite number')
//         continue; // Means keep going with the loop - tutuloy ang loop pero kasama ang break condition
//     }

//     if(i === 5) {
//         console.log('Stop the loop');
//         break; // This means the loop will stop until it meets the condition
//     }
//     console.log(i)
// }


// WHILE LOOP
// let i = 0;

// while(i < 10) {
//     console.log('Number ' + i);
//     i++;
// }


// DO WHILE LOOP
// let i = 0;

// do {
//     console.log('number '+ i);
//     i++;
// }

// while (i < 10);


// EXAMPLES

const cars = ['Honda', 'Ford', 'Jaguar', 'Toyota'];

// for (i = 0; i < cars.length; i++) {
//     console.log(cars[i] + ' ' +i);
// }


// FOREACH
// cars.forEach(function (car) {
//     console.log(car);
// });

// cars.forEach(function (car, index) {
//     console.log(`${index} : ${car}`);
// });

// cars.forEach(function (car, index, array) {
//     console.log(`${index} : ${car}`);
//     console.log(array);
// });


// MAP
// const users = [
//     {id: 1, name: 'John'},
//     {id: 2, name: 'Sarah'},
//     {id: 3, name: 'Karen'},
//     {id: 4, name: 'Vision'}
// ];

// const ids = users.map(function (user) {
//     return user.id;
// })

// console.log(ids);

// FOR IN LOOP
const user = {
    firstName: 'Mel',
    lastName: 'Pualon',
    age: 25
}

for(let x in user) {
    console.log(`${x}: ${user[x]}`); // x can be represented as key: or value in objects
}
