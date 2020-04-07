// Object of prototypes

const laptopProto = {
    getDetails: function () {
        return `this is ${this.model} it has ${this.cpu} with ${this.ram} plus ${this.rom} combo`;
    },

    getPriceDiscount: function () {
        return `the discounted price of your laptop is ${this.price}`;
    }
    
}

// Create Object
// const laptop1 = Object.create(laptopProto);
// laptop1.model = 'Lenovo';
// laptop1.cpu = 'i7';
// laptop1.ram = '16hb';
// laptop1.rom = '1tb';


// Another way to crate object
const laptop1 = Object.create(laptopProto, {
    model: { value: 'Lenovo Yoga' },
    cpu: { value: 'Ryzen 3' },
    ram: { value: '8gb' },
    rom: { value: '256gb' }
});
console.log(laptop1.model)