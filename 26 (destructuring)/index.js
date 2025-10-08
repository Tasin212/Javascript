// destructuring = extract values from arrays and objects, then assign them to variable in a convenient way
// [] = to perform array destructuring; {} = to perform object destructuring
// Example : 1
// Swap The Value of two variables
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a);
console.log(b);

console.log(`\nExample : 2 | Swap 2 elements in an array`);

const colors =["red", "green", "blue", "black", "white"];
console.log(`Before swap `);
console.log(colors);
[colors[0], colors[4]] = [colors[4], colors[0]];
console.log(`After swap : `);
console.log(colors);


console.log('\n Example 3 | Assign Array Elements to Variables')

const colors2 = ["red", "green", "blue", "black", "white"];
const [firstColor, secondColor, thirdColor, ...extraColors] = colors; //4th & 5th colors will be stored in extra color
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);


console.log(`\n Ex: 4 | Extract values from objects`);
const person1 = {
    firstName : "Harry",
    lastName : "Potter",
    age : 30,
    job : "actor"
}
const person2 = {
    firstName2 : "Hermoine",
    lastName2 : "Granger",
    age2 : 23
}

const {firstName, lastName, age, job} = person1;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

const {firstName2, lastName2, age2, job2="Actress"} = person2;
console.log(firstName2);
console.log(lastName2);
console.log(age2);
console.log(job2);


console.log(`\n Ex: 5 | Destructure in function parameters : `);
function display({firstName, lastName, age, job}) {
    console.log(firstName);
    console.log(lastName);
    console.log(age);
    console.log(job);
}

const person3 = {
    firstName : "Ron",
    lastName : "Wisely",
    age : 30,
    job : "actor"
}

display(person3);

