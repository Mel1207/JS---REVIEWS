// Constructor
function Laptop (model, cpu, ram, rom) {
    this.model = model;
    this.cpu = cpu;
    this.ram = ram;
    this.rom = rom;

    // we can still add a function inside a constructors
    this.getDetails = function () {
        return `this is ${this.model} it has ${this.cpu} with ${this.ram} plus ${this.rom} combo`;
    };
}

// instantiate an object
const laptop1 = new Laptop('Lenovo', 'i7', '16gb', '1tb');
const laptop2 = new Laptop('Huawei Mateboox XPro', 'i7', '16gb', '250gb')

console.log(laptop1.getDetails());
console.log(laptop2.getDetails());