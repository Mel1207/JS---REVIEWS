// People Object
function People (Name, Age, Gender) {
    this.Name = Name;
    this.Age = Age;
    this.Gender = Gender;

}

// People.getInfo - Prototype
People.prototype.getInfo = function () {
    return `Hi my name is ${this.Name} im ${this.Age} y.o ${this.Gender}`
}

// People.getInfo - Prototype
People.prototype.getAge = function () {
    return `${this.Name} is now ${this.Age} Y.O`
}


// Inheritance
function Students (Name, Age, Gender, YearEnrolled) {
    People.call(this, Name, Age, Gender); // This means from student object tinawag na natin yung property nung People object. para hindi na natin iretype yung this.etc at maiwasan ang pag uulit ng code.

    this.YearEnrolled = YearEnrolled; // ito naman yung continuation ng unique property na nilagay natin kay student object
}

// Note we have an option now kung iinherit din natin yung prototypes from people object papunta kay student object.

// creating Students prototype
// note this is my own sample prototype

// Students.prototype.yearStudying = function () {

//     function getCountYear () {
//         let yearToday = new Date().getFullYear();
//         let countYear = yearToday - this.YearEnrolled;
//         return `${countYear} years of studying`
//     }
    
//     getCountYear();
// }

// inheriting a prototype from people object
Students.prototype = Object.create(People.prototype);

const student = new Students ('John', 25, 'Male', '2020');
console.log(student)
