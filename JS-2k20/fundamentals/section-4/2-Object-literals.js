// Object literals
const person = {
    firstName: 'Mel John',
    lastName: 'Pualon',
    age: 25,
    email: 'meljohnpualon@gmail.com',
    hobbies: ['Coding', 'guitar', 'sleeping'],
    address: {
        city: 'manila',
        state: 'Tondo'
    },
    getBirthYear: function() {
        return 2020 - this.age;
    }
}

let val;

val = person;

// get the specific value
val = person.firstName; // Output will be string - Steve
val = person['lastName']; // Output will still the same - Steve
val = person.age;
val = person.hobbies[0];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

const people = [
    {name: 'John', age: 30},
    {name: 'Mike', age: 23}
]

for(i = 0; i < people.length; i++) {
    console.log(people[i].name + ' ' + people[i].age);
} 