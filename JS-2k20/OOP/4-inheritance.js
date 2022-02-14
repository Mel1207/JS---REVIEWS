// Constructor
function Laptop (model, cpu, ram, rom) {
    this.model = model;
    this.cpu = cpu;
    this.ram = ram;
    this.rom = rom;
}

// get details prototype
Laptop.prototype.getDetails = function () {
    return `this is ${this.model} it has ${this.cpu} with ${this.ram} plus ${this.rom} combo`;
}

// PC constructor
function PcBuild (model, cpu, ram, rom, month) {
    Laptop.call(this, model, cpu, ram, rom);

    this.month = month;
}

// Inherit Prototype
PcBuild.prototype = Object.create(Laptop.prototype);

// Instantiate PC
const PC1 = new PcBuild ('MSI-GSL-12', 'i9', '32', '1tb', 'December');

// use PcBuild constructor
// PcBuild.prototype.constructor = PcBuild;

console.log(PC1.getDetails());
console.log(PC1)