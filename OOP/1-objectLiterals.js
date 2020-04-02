// object literals
const laptop = {
    model: 'asus-x001',
    cpu: 'i3',
    ram: '4gb',
    rom: '1tb',

    // we can add a function inside an object
    getDetails: function () {
        return `this is ${this.model} it has ${this.cpu} with ${this.ram} plus ${this.rom} combo`;
    }
};

const laptop2 = {
    model: 'acer-x001',
    cpu: 'i5',
    ram: '8gb',
    rom: '1tb',

    // we can add a function inside an object
    getDetails: function () {
        return `this is ${this.model} it has ${this.cpu} with ${this.ram} plus ${this.rom} combo`;
    }
};


console.log(laptop2.getDetails());
// This console shows only an array of values to your object
console.log(Object.values(laptop2));
// This console shows only an array of keys to your object
console.log(Object.keys(laptop2));

// keys to remember
// 1. when calling a function it always has an (). 
// 2. this. refers to an object you called at the first place