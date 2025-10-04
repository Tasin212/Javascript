// Method chaining = calling one method after another in once continuous line of code.

// ------- No Method Chaining ------
let userName2 = window.prompt("Enter your username : ");

userName2 = userName2.trim();
let letter = userName2.charAt(0);
letter = letter.toUpperCase();

let extraChar2 = userName2.slice(1).toLowerCase();
userName2 = letter + extraChar2;
console.log(userName2);

// ---- Method Chaining ------
let userName3 = window.prompt("Enter your username(method chaining) : ");
userName3 = userName3.trim().charAt(0).toUpperCase() + userName3.trim().slice(1).toLowerCase();
console.log(userName3);




// own
let userName = document.getElementById('uname');
let userInput = document.getElementById('inp');
let mysubmit = document.getElementById('mysubmit');
let p1 = document.getElementById('p1');

mysubmit.onclick = function() {
    let formattedName = userInput.value.trim().charAt(0).toUpperCase() + userInput.value.trim().slice(1).toLowerCase();
    // let firstLetter = inputValue.charAt(0).toUpperCase();

    // let extraChar = inputValue.slice(1);
    // extraChar = extraChar.toLowerCase();

    // let formattedName = firstLetter + extraChar;
    p1.textContent = formattedName;

}


// ====> logical operator AND = && , OR = || , NOT = !
const temp = -100;

if (temp > 0 && temp <= 30) {
    console.log('The whether is good')
}
else {
    console.log('The whether is not good')
}

const isSunny = true;

if(!isSunny) {
    console.log("It's could outside");
}
else {
    console.log("Its sunny")
}


