//object = A collection of related properties and/or methods.
//  Obj can represent real world objects(people, products, places)
// object = {key:value, function()}
const person1 = {
    firstName: "Harry", //property
    lastName : "Potter",
    age : 30,
    isEmployed : true,
    sayHello : function(){console.log("Hi! I am Harry ")}, //methods
    sayBye : () => console.log("Goodbye, Hermoine")
}
console.log(person1.firstName);
console.log(person1.lastName);
person1.sayHello();
person1.sayBye();

//================== this ===============
//this = reference to the object where THIS is used 
//(the object depends on the imeadiate context)
// person.name = this.name
const person2 = {
    name : "Hermione",
    age : 19,
    food : "Biryani",
    eat : function(){console.log(`${person2.name} is eating ${this.food}`)}, //we can alternately use obj_name and this
    // eat2 : () => console.log(`${this.name} is eating ${this.food}`) it won't work;Arrow functions DON'T have their own this binding - they inherit this from their parent scope.
}
person2.eat();

//constructor = special method for defining the properties and methods of objects

function Car(make, model, year, color) {
    this.make = make,
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function() {console.log(`You drive the the ${this.model}`)}
}
const car1 = new Car("Toyota", "Splendir", 2025, "Blue");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

car1.drive();

//=====   Class ==============
//class = (ES6 feature) provides a more structured and cleaner way to work with objects compared
// to traditional constructors functions ex: static keyword, encapsulation, inheritance
console.log(`\n===== Class ========`)
class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`Produce : ${this.name}`);
        console.log(`Price : $${this.price.toFixed(2)}`);
    }
    calculateTotal(salesTax) {
        return this.price + (this.price * salesTax);
    }
}

const product2 = new Product('Shirt', 50);
product2.displayProduct();
const actualCost = product2.calculateTotal(0.10);
console.log(`Price(with tax) : $${actualCost}`);


console.log(`\n== It’s a constructor function (not a modern ES6) ==`);
function Product2(name, price) {
    this.name = name;
    this.price = price;

    this.displayProduct = function() {
        console.log(`Produce : ${this.name}`);
        console.log(`Price : $${this.price.toFixed(2)}`);
    }
    this.calculateTotal = function(salesTax) {
        return this.price + (this.price * salesTax);
    }
} 

const product1 = new Product2('Rice', 100);

product1.displayProduct();
const cost = product1.calculateTotal(0.15);
console.log(`Price including tax :  $${cost}`);