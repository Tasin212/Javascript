// Radmon Number Generator

let randomNum = Math.random(); //it will generate random number between 0 to 1
console.log(randomNum);

// if I want the random number between 0 to 5 
let randomNum2 = Math.random() * 5;
console.log(randomNum2);

//discard the decimal portion of the random number 
let random3 = Math.floor(Math.random() * 5);
console.log(random3);

// radom number between 1 to 10
let random4 = Math.floor(Math.random() * 10) + 1;
console.log(random4);

// set the randge for random number lets say 50 to 100
const min = 50;
const max = 100;
let random6 = Math.floor(Math.random() * (max - min)) + min;
console.log(random6);

//==> Full Random Generaor in webpage
const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");

const min2 = 1;
const max2 = 6;
let random7;

myButton.onclick = function() {
    random7 = Math.floor(Math.random() * max2) + min2;
    myLabel.textContent = random7;
}

