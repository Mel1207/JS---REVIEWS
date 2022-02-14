// Object Literals

// const people = {
//     Name: 'Mel',
//     Age: 25,
//     Gender: 'Male'
// }

// const people2 = {
//     Name: 'Mel John',
//     Age: 25,
//     Gender: 'Man'
// }

// console.log(people);
// console.log(people2);

// const of object literals - kapag marami kang object, tapos may inupdate kang isang part sa object mo, need mo pa iupdate yung ibang objects, para mag run yung code or maiwasan yung data error.

// in javascrip hindi natin need na gawin to ng paulet ulet, theres one good approach of making a better object na maramihan ang gamitan.

// Constructor - ES5 way
function People (Name, Age, Gender) {
    this.Name = Name;
    this.Age = Age;
    this.Gender = Gender;

    this.getInfo = function () { // the function is called a method
        return `Hi my name is ${this.Name} im ${this.Age} y.o ${this.Gender}`
    }
}

const people = new People ('Mel', 25, 'Male'); // so this is now cleaner and shorter way para mag call ng object
const people2 = new People ('Juvy', 25, 'Female');

// incase you want to add to update ur object, its very simple and easy since mag add ka na lang sa object and then another parameters

console.log(people.getInfo());
console.log(people2.getInfo());