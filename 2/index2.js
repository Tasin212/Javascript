// arithmetic operators
let students = 30;

//students = students + 1;

// == augmented assignment operator

students += 1;
console.log(students);

students++;
console.log(students);

/*
    Operator precedence
    1. parenthesis()
    2. exponents
    3. multiplication & division & modulo
    4. addition & subtraction
*/
let result = 1 + 2 * 3 + 4 ** 2;
console.log(result);

let result2 = 12 % 5 + 8/2;
console.log(result2);


// ===> How to access user input
// 1. Easy way = window prompt
// 2. Professional way = HTML textbox
let username = window.prompt('Whats your username ?');
console.log(username);

//professional way
let username2;
document.getElementById("mySubmit").onclick = function(){
    username2 = document.getElementById("myText").value;
    // console.log(username2);
    document.getElementById("myH1").textContent = `Hello ${username2}`;
}

// ===> Type conversion (strings, numbers, boolean)
let age = window.prompt('How old are you??')
age = Number(age);
age += 1;
console.log(age, typeof age);

let x = "pizza";
let y = "pizza";
let z = "pizza";
x = Number(x);
y = String(y);
z = Boolean(z);
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);


// ===> const = a variable that can't be changed
const PI = 3.1416; //means we can't change it anywhere in the program
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle : ");
radius = Number(radius);
circumference = 2 * PI * radius;
console.log(circumference);

// 
let radius2;
document.getElementById("mySubmit2").onclick = function() {
    radius2 = document.getElementById('myText2').value;
    radius2 = Number(radius2)
    circumference = 2 * PI * radius2;
    document.getElementById("p1").textContent = `area is : ${circumference}`
}






