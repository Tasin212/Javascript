// own
/*
let minNum = 1;
let maxNum = 3;

let randomnum = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
let run = false;
while(!run) {
    let usr = window.prompt("Enter your number between 1 to 3 : ");
    if(usr == randomnum) {
        run = true;
        console.log(`you won the game!!`);
    }
    else {
        console.log(`try again!!`);
    }
}
*/

// NUMBER GUESSING GAME
const min = 1;
const max = 3;

const answer = Math.floor(Math.random() * (max - min + 1) + min);

let attemps = 0;
let guess;
let running = true;

while(running) {
    guess = window.prompt(`Gues a number between ${min} to ${max}`);
    guess = Number(guess);

    if(isNaN(guess)) { //means if user enter any non integer input
        window.alert("Please enter a valid input");
    }
    else if(guess < min || guess > max) {
        window.alert("Please enter the valid number within range!");
    }
    else {
        attemps++;
        if(guess < answer) {
            window.alert("TOO LOW! TRY AGAIN..")
        }
        else if(guess > answer) {
            window.alert("TOO HIGH! TRY AGAIN..")
        }
        else {
            window.alert(`CONGRATULATIONs!! The answer was ${answer} and It took ${attemps} attemps to SUCCESS!`);
            running = false;
        }
    }
}












