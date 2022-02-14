// Create a prototype

function People (Name, Age, Gender) {
    this.Name = Name;
    this.Age = Age;
    this.Gender = Gender;

    // this.getInfo = function () { // the function is called a method
    //     return `Hi my name is ${this.Name} im ${this.Age} y.o ${this.Gender}`
    // }
}

// this is now a prototype - Note: this will behave as a function inside an object
People.prototype.getInfo = function () {
    return `Hi my name is ${this.Name} im ${this.Age} y.o ${this.Gender}`
}

// Practice new creation of prototype
People.prototype.getAge = function () {
    return `${this.Name} is now ${this.Age} Y.O`
}

const people = new People ('Mel', 25, 'Male');
const people2 = new People ('Juvy', 25, 'Female');

 
console.log(people.getAge());

