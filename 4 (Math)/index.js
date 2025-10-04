// Math = built-in object that provides a collection
//    of properties and methods

console.log(Math.PI);
console.log(Math.E); //logarithemic

let x = 3.21;
let x2 = 3.90;
let y = 2;
let z, z2;

z = Math.round(x);
z2 = Math.floor(x2);
res = Math.pow(2, 3);
res2 = Math.sqrt(2);
res3 = Math.log(10);
res4 = Math.sin(90); //here value is 0.89 as this is value of sin 45 radians not degrees
//value in degrees
const degrees = 90;
const radians = degrees * Math.PI / 180; //converting readians to degrees
res5 = Math.sin(radians);
res6 = Math.cos(90);


console.log(z);
console.log(z2);
console.log(`Power : ${res}`);
console.log(`Square root of 2 is : ${res2}`);
console.log(`10 logarithmaic : ${res3}`);
console.log(`value of sin90 radians: ${res4}`);
console.log(`Calculating in sin 90 degrees : ${res5}`);
console.log(`value of cos 90 radians: ${res6}`);
console.log('Absolute value : ', Math.abs(-4));
console.log('Sign of a number', Math.sign(-5)); //it its positve it will return 1 otherwise -1
console.log('Finding max value : ', Math.max(12, 34, 23));
console.log('Finding min value : ', Math.min(23, 12, 9));

