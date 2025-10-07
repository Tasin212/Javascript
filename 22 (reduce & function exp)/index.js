//.reduce() = reduce the elements of an array to a single value
const price = [5, 10, 15, 20, 25];

const total = price.reduce(sum);

console.log(`Total amount : ${total.toFixed(2)}`);

function sum(accumulator, element) { //think of accumlator is previous value and element is the next value
    return accumulator + element;
}

//================>
//fucntion declaration
function greet() {
    console.log("hello");
}

// function expression = a way to define function as  values or variables
const hello = function() {
    console.log('hello');
}
hello();
greet();

setTimeout(hello, 3000); //now hello function(callback) will be executed after 3000ms or 3s

setTimeout(function(){
    console.log('Good Morning!!Iam executing after 4s');
}, 4000); //passing entire function as a value and it will wait 4s to execute

//squre of array 
const numbers = [ 1, 2, 3, 4, 5, 6];

// old way
const squares2 = numbers.map(square);
function square(element){
    return Math.pow(element, 2);
}
console.log(squares2);
console.log(typeof squares2);

//new way
console.log(`using map : ====>`);
const squares = numbers.map(function(element){
    return Math.pow(element, 2);
});

console.log(`Squares of an array : ${squares}`);
console.log(typeof squares);

//using filter function
console.log(`using filter : =====>`)
const evensnum = numbers.filter(function(element){
    return element % 2 === 0;
});
console.log(evensnum);

//using reduce
console.log(`using reduce : ======>`);
const total2 = numbers.reduce(function(accumlator, element){
    return accumlator + element;
})
console.log(`total amount is : ${total2}`);

//==================== :: ===================
//arrow function = a concise way to write function experssions, good for simple function that you use only once (parameters) => some code
console.log(`\n===== Arrow Function =======  `)
const grettings = () => console.log('Hello, I am arrow function');
grettings();

const grettings2 = (name, age) => {console.log(`Hello ${name}`) //if want to use multiple statement it should be written within curley{..}
console.log(`You are ${age} old!!`)};

grettings2('Harry', 24);

//arrow function with map
console.log(`== Arrow function for map ==`);
const square4 = numbers.map((element) => Math.pow(element, 2));
console.log(square4);

console.log(`== Arrow func with filter function ==`);
const evennums2 = numbers.filter((element) => element % 2 === 0);
console.log(evennums2);

console.log(`== Arrow Function with reduce ==`);
const total3 = numbers.reduce((accumlator, element) => accumlator + element);
console.log(total3);


