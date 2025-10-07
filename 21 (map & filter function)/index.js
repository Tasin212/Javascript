// .map() = accepts a callback and applies that function to each element of an array, then return a new array
// like forEach() method it also have these 3 elements : element, index, array
const numbers3 = [1, 2, 3, 4, 5];

function square(element) {
    return Math.pow(element, 2);
}

const students = ["Jabbar", "Harry", "Hermoine"];
function uppercase(element) {
    return element.toUpperCase();
}

const squares = numbers3.map(square)
console.log(squares);

const studentsUpper = students.map(uppercase);
console.log(`Name in Uppercase : `, studentsUpper);

//2
const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];

function formatDates(element) {
    const parts = element.split("-"); //after spliting eg:['2024', '1', '10']
    return `${parts[1]} / ${parts[2]} / ${parts[0]}`;
}

const formattedDates = dates.map(formatDates);
console.log(formattedDates);

// .map() TRANSFORMS each element
//Purpose: Creates a new array by transforming every element in the original array
// Returns: New array with same length as original, but with transformed values
const numbers = [1, 2, 3, 4, 5];

// Double each number
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Convert numbers to strings
const strings = numbers.map(num => `Number: ${num}`);
console.log(strings); // ["Number: 1", "Number: 2", "Number: 3", "Number: 4", "Number: 5"]

// Extract specific properties from objects
const users1 = [
    {name: "John", age: 25},
    {name: "Jane", age: 30},
    {name: "Bob", age: 35}
];

const names = users1.map(user => user.name);
console.log(names); // ["John", "Jane", "Bob"]




//=========>
// .filter() = creates a new array by filtering out elements
let numbers2=[1, 2, 3, 4, 5, 6, 7];

function isEven(element) {
    return element % 2 === 0;
}

let evenNums = numbers2.filter(isEven);
console.log(evenNums);

//2 
const words = ["apple", "orange", "banana", "pomegrante","coconu"];
const shortWords = words.filter(shortWord);
console.log(shortWords);

function shortWord(element) {
    return element.length <= 6;
}


// .filter() - SELECTS elements based on condition
// Purpose: Creates a new array with only elements that pass a test
// Returns: New array with equal or smaller length than original


const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Get even numbers only
const evens = numbers4.filter(num => num % 2 === 0);
console.log(evens); // [2, 4, 6, 8, 10]

// Get numbers greater than 5
const greaterThan5 = numbers4.filter(num => num > 5);
console.log(greaterThan5); // [6, 7, 8, 9, 10]

// Filter objects based on conditions
const users = [
    {name: "John", age: 25, active: true},
    {name: "Jane", age: 30, active: false},
    {name: "Bob", age: 35, active: true},
    {name: "Alice", age: 17, active: true}
];

// Get active users
const activeUsers = users.filter(user => user.active);
console.log(activeUsers); 
// [{name: "John", age: 25, active: true}, {name: "Bob", age: 35, active: true}, {name: "Alice", age: 17, active: true}]

// Get users who are adults
const adults = users.filter(user => user.age >= 18);
console.log(adults);
// [{name: "John", age: 25, active: true}, {name: "Jane", age: 30, active: false}, {name: "Bob", age: 35, active: true}]