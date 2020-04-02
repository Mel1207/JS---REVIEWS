// Prototypes
function Laptop (model, cpu, ram, rom, price) {
    this.model = model;
    this.cpu = cpu;
    this.ram = ram;
    this.rom = rom;
    this.price = price - 1000;

}

Laptop.prototype.getDetails = function () {
    return `this is ${this.model} it has ${this.cpu} with ${this.ram} plus ${this.rom} combo`;
}

Laptop.prototype.getPriceDiscount = function () {
    return `the discounted price of your laptop is ${this.price}`;
}

// instantiate an object
const laptop1 = new Laptop('Lenovo yoga 3x-11', 'i7', '16gb', '1tb', 25000);
const laptop2 = new Laptop('Huawei Mateboox XPro', 'i7', '16gb', '250gb', 70000);
const laptop3 = new Laptop('Asus Zenbook UX-331 UA', 'i5' ,'16gb', '250gb SSD', 56000);

console.log(laptop2.getDetails());
console.log(laptop3.getPriceDiscount());