// ES6 Constructor

class People {
    constructor(Name, Age, Gender) {
        this.Name = Name;
        this.Gender = Gender;
        this.Age = Age
    }

    // ES6 Prototype
    getInfo () {
        return `Hi my name is ${this.Name} im ${this.Age} y.o ${this.Gender}`
    }

    getAge () {
        return `${this.Name} is now ${this.Age} Y.O`
    }
}

// Instantiate
// const people = new People ('Mel', 25, 'Male');
// console.log(people);
// console.log(people.getInfo());

// creating new ES6 constructor and Inheritance from People object (class)
class Students extends People {
    constructor(Name, Age, Gender, YearEnrolled) {
        super(Name, Age, Gender); // Super is equal to es5 syntax of call
        this.YearEnrolled = YearEnrolled;
    }

    // creating unique method or prototype of students object
    yearStudying () {
        let yearToday = new Date().getFullYear();
        let countYear = yearToday - this.YearEnrolled;
        return `${countYear} years of studying`
    }   

}

// instantiate
const student = new Students('Mel', 25, 'Male', '2003');

console.log(student);
console.log(student.getAge());
console.log(student.getInfo());
console.log(student.yearStudying());

// in OOP kung meron tayong tinatawag na constructor, meron din tayong tayong tinatawag na destructor or deconstructor

// example
// const student = new Students('Mel', 25, 'Male', '2003');
const { Name, Age, Gender, YearEnrolled } = student;
// ginagamit itong deconstructor kung may huhugutin tayong method or properties sa isang library

console.log(Name);