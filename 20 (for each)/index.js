// forEach() = method used to iterate over the elements of an array and 
// apply a specified function(callback) to each elements. 
// sytanc : array.forEach(callback); behind the scene forEach method will give element,index,array(sequentially) to callback function 
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(display);//here callback func is display

function display(element) { //here we can give 3 of those args or even 1; 
    console.log(element);
}
//2
console.log(`ANother one : `);
let numbers2 = [2, 4, 6];

numbers2.forEach(double);
numbers2.forEach(display);

function double(element, index, array) {
    array[index] = element * 2;
}

// 3
console.log(`Another one : `);
let numbers3 = [ 7 , 8, 9];

numbers3.forEach(square);
numbers3.forEach(display2);

function square(element, index, array) {
    array[index] = Math.pow(element, 2);
}

function display2(array) {
    console.log(`Squared array element: ${array}`);
}
// whenever any callback function will be called by forEach() method, callback function will be called
// based on the number of elements of the array.

// 4
console.log(`Another one : `);
let fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach(lowercase);
fruits.forEach(display);

function lowercase(element, index, array) {
    array[index] = element.toLowerCase();
}

console.log(`Capitalize chars : `);
fruits.forEach(capitalize);
fruits.forEach(display);

function capitalize(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}


