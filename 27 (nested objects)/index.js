//nested objects = Objects inside of other objects. Allows you to represent more complex data structures.
//Child Object is enclosed by a parent object.
// Person{Address{}, ContactInfo{}} ;; ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}
const person = {
    fullName : "Harry Potter",
    age : 15,
    isWizard : true,
    hobbies : ["pets", "cooking", "karate"],
    addresss : {
        street: "Number 4, Privet Drive, Little Whinging.",
        City : "Surrey",
        Country : "England"
    }
}
console.log(person.fullName);
console.log(person.isWizard);
console.log(person.hobbies);
console.log(person.hobbies[0]);
console.log(person.addresss);
console.log(person.addresss.street);

//we can print the object using for loop
console.log(`Printing using loop ...`);
for(const property in person.addresss) {
    console.log(person.addresss[property]);
}

//2
console.log(`\n Ex: 2...`);
class Person {
    constructor(name, age, ...address) { //...address (rest parameter)
        this.name = name;
        this.age = age;
        this.address = new Address(...address); //...address(sperator operator)
    }
}

class Address{ // Address is child Object of Person Object
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

// const person1 = new Person("Ron", 16, "Mirza Road", "Hululu", "Arandas");
const person2 = new Person("Draco Malfoy", 17, "124 Monaco st.", "Wiltshire", "England");

console.log(person2.name);
console.log(person2.address);
console.log(person2.address.city);

console.log('\nArray of objects...');
characters = [
    {name: "Harry Potter",       age: 17, city: "Surrey"},
    {name: "Hermione Granger",   age: 16, city: "London"},
    {name: "Ron Weasley",        age: 17, city: "Ottery St Catchpole"},
    {name: "Albus Dumbledore",   age: 115, city: "Mould-on-the-Wold"}
];
console.log(characters[3].name);
console.log(characters[1].city);
characters.push({"name": "Severus Snape",      "age": 38, "city": "Spinner's End"}); //it will add this elemenet last of the array
console.log(`Updated array of obj: `);
console.log(characters);

console.log(`Splice : `);
// .splice() : Adds/removes elements from an array at specific positions
// syntax : array.splice(startIndex, deleteCount, item1, item2, ...)
characters.splice(3, 2); //remove 2 element from index 3
console.log(characters);
//similarly we can do more experiment like pop, shift,unshift (describe in 16(array) chapter)

//add element using splice
characters.splice()

//======= forEach() ===
console.log(`=== forEach() ====`);
characters.forEach(role => console.log(`Name : ${role.name}, City : ${role.city.toUpperCase()}`));

console.log(`#### map() #####`);//returns an array
const name = characters.map(role => role.name);
console.log(name);

console.log(`==== filter() ===`);
const age = characters.filter(role => (role.age) < 17);
console.log(age);

console.log(`=== reduce() =====`);
console.log(characters);
characters.push(
            {"name": "Albus Dumbledore",   "age": 115, "city": "Mould-on-the-Wold"},
            {"name": "Severus Snape",      "age": 38, "city": "Spinner's End"},
            {"name": "Rubeus Hagrid",      "age": 63, "city": "West Country"}
        );
console.log('After updating the array of objects  : ');
console.log(characters);

const greaterAge = characters.reduce((max, element) => element.age > max.age ? element : max);
//(max, element) max keeps track the greater age during each iteration(current record holder) and element is the next element
// these two are making comparison with each other and return the greater age
console.log(greaterAge); 
console.log(greaterAge.age);

const minAge = characters.reduce((min, element) => element.age < min.age ? element : min);
console.log(minAge);
console.log(minAge.age);







