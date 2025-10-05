//array
let fruits = ["apple", "orange", "banana","guava"];
console.log(fruits);
console.log(fruits[0]);

fruits[1] = "coconut"; //we can manipulate values in array
console.log(fruits);

fruits.push("lichi"); //it will push the item in the last of the array
console.log(fruits);

console.log(fruits.pop());//it will remove the last item and return that item
console.log(fruits);

fruits.unshift("mango"); //it will add "mango" at first element of the array
console.log(fruits); 

fruits.shift(); //remove the frist item
console.log(fruits);

let numofFruits = fruits.length;
console.log(`Length of the array : ${numofFruits}`);

let index = fruits.indexOf("coconut");
console.log(`Index of "coconut" is : ${index}`);

//print the array element using for loop
for(let i = 0; i < fruits.length; i++) {
    console.log(`Item ${i} is : ${fruits[i]}`);
}
//another way
console.log(`Printing array element in different way : `)
for(let fruit of fruits) {
    console.log(fruit);
}

fruits.sort();//it will sort the array alphabatically
console.log(`Sorting array element alphabatically : `)
for(let fruit of fruits) {
    console.log(fruit);
}

fruits.sort().reverse(); //reverse alphatical order
console.log(`Printing array element reverse alphatical order : `)
for(let fruit of fruits) {
    console.log(fruit);
}


// ====>
//sperad operator = ... allows an iterable such as an array or string to be expanded into separate elements(unpack the elements)
let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(numbers); //it will show you NaN. we need to unpack them
let maximum2 = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(`\n ${maximum}`);
console.log(`maximum number is ${maximum2}`);
console.log(`minimum number is ${minimum}`);

let username = "Harry Potter";
let letters = [...username];
console.log(letters);
let letters2 = [...username].join("-");
console.log(letters2); 

let fruits2 = [...fruits];
console.log(fruits);//it will print the same array identical

//we can combine two array
let vegetables = ["carrots", "celery", "potateos"];
let foods = [...fruits, ...vegetables];
console.log(foods); //it wwill print as array
console.log(`Combining two arrays : ${foods}`); //it automatically convert the array to string due to template string


//===>
// rest parameters = (...rest) allow a function work with a variable number of arguments by bundling them into array
// spread = expands an array into separate elements
// rest = bundles seperate elements into an array 
console.log('\n\n')
function openFridge(...foods) { //here foods can accept any number of arguments
    console.log(foods); //it will form an array
    console.log(...foods); //also we can use the spread operator
}
let food1 = "pizza";
let food2 = "humburger";
let food3 = "hotdog";
let food4 = "shing-gara";

openFridge(food1, food2, food3, food4);

function getBiryani(...biryani) {
    return biryani;
}
let biryani1 = "murog polao";
let biryani2 = "kacchi";
let biryani3 = "urosh biryani";
let biryani4 = "tehari";

const biryani = getBiryani(biryani1, biryani2, biryani3, biryani4);
console.log(biryani);

function sum(...numbers) {
    let result = 0;
    for(let number of numbers) {
        result += number;
    }
    return result;
}

const total = sum(1, 2, 3, 4, 5, 5, 6, 7);
console.log(`Your total is : ${total}`);

function combinedStrings(...strings) {
    return strings.join(" ");
}
let fullName = combinedStrings("Mohammed", "Abbas", "Uddin", "Tasin");
console.log(`Your fullname : ${fullName}`);