// sort() = method used to sort elements of an array in place.
// Sorts elements as strings in lexicographic order, not alphabetecial
// lexicographic = (alphabet + numbers + symbols) as strings
let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];
numbers.sort((a, b) => (a - b));
console.log(numbers);

numbers.sort((a, b) => (b - a)); //larger to smaller (reverse)
console.log(numbers);

const fruits = ["pomegranet", "guava", "apple", "mango"];
fruits.sort();
console.log(fruits);

const characters = [
    {name: "Harry Potter",       age: 17, city: "Surrey"},
    {name: "Hermione Granger",   age: 16, city: "London"},
    {name: "Ron Weasley",        age: 17, city: "Ottery St Catchpole"},
    {name: "Albus Dumbledore",   age: 115, city: "Mould-on-the-Wold"}
];
console.log(`Sorting based on age : `);
characters.sort((a, b) => a.age - b.age);
console.log(characters); //now it will be sorted based the age

console.log(`Sorting based on name : `);
characters.sort((a, b) => a.name.localeCompare(b.name));
console.log(characters);

//========== Date Objects ======
//Date Objects = Ojbects that contain values that represent dates and times.
// These date objects can be changed and formatted.
console.log(`=== Date Objects ====`);
const date = new Date();
console.log(date);
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getMinutes();
const miliseconds = date.getMilliseconds();

console.log(`Year : ${year}`);
console.log(`Moth : ${month}`);
console.log(`Day : ${day}`);
console.log(`Hour : ${hour}`);
console.log(`Minutes : ${minutes}`);
console.log(`Seconds : ${seconds}`);
console.log(`Miliseconds : ${miliseconds}`);

//Date(year, month, day, hour, minute, second, ms)
const date2 = new Date(2025, 0, 1, 2, 3, 4, 5); //january started from 0
console.log(date2);

// ============= Closure ===============
// closure = A function defined inside of another function, the inner function has accesss to the variables
// and scope of the outer function. Allow for private variables and state maintenance.
// Used frequently in JS frameworks : React, Vue, Angular
console.log(`\n===== Closure ========`);
function outer(){
    let message = "Hello";
    function inner(){
        console.log(message);
    }
    inner();
}
//any variable decalared in the outer function will be considered as private variable
outer(); //if we didn't call the inner() function, in the outer function then this won't be executed

function createCounter(){
    let count = 0;

    function increment(){
        count++;
        console.log(`Count increased to ${count}`);
    }
    return {increment};
}
const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
/*
counter.count = 0;
console.log(count); Will through an error since count var is private */

