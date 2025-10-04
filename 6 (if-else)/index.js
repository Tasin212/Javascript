//If - else statement
let age = -1;

if(age >= 18) {
    console.log("You are old enough to enter this site");
}
else if(age < 0) {
    console.log("Your age can't be below 0");
}
else {
    console.log("You must be 18+");
}

let isStudent = false;
if(isStudent) {
    console.log("Youa are a student ");
}
else {
    console.log("You are not a student");
}

//chekcing age in webpage
// let age2 = document.getElementById("inp").value;
// age2 = Number(age2);
// if we declare this to variables out of the even function than it won't work properly as
// we are reading the input value ONCE when the page loads, not when the button is clicked.
document.getElementById("btn").onclick = function() {
    let age2 = document.getElementById("inp").value;
    age2 = Number(age2);

    if(age2 < 18) {
        document.getElementById("p1").textContent = `You are not eligible to enter this site!!`;
    }
    else {
        document.getElementById("p1").textContent = 'you are eligible to enter';
    }
}

//let's do it in another way
const inp2 = document.getElementById('inp2');
const btn2 = document.getElementById('btn2');
const p2 = document.getElementById('p2');
let age3;

btn2.onclick = function() {
    age3 = inp2.value;
    age3 = Number(age3)

    if(age3 < 18) {
        p2.textContent = `You are not eligible to enter this site !!`;
    }
    else {
        p2.textContent = `You can enter this site!`;
    }
}








