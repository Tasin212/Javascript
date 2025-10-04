// while loop = repeat some code WHILE some condition is true

let username = "";
while(username === "" || username === null) {
    username = window.prompt('Enter your name : ');
    //now we can't close the prompt untill we give our name
}
console.log(`Hello ${username}`);

let loggedIn = false;
let username2;
let password;

while(!loggedIn) {
    username2 = window.prompt('Enter your name:(myusername) ');
    password = window.prompt("Enter your password: (mypassword) ");

    if(username2 === "myusername" && password === "mypassword") {
        loggedIn = true;
        console.log("You are successfully logged In!! ");
        //till you give the right username and password it will ask for it
    }
    else {
        console.log("Invalid Credentials!! Try again...");
    }
}


// for loop = repeat some code a LIMITED amount of times
for(let i = 0; i <= 2; i++) {
    console.log('hello');
}
for(let i = 3; i > 0; i -= 1) {
    console.log(i);
}
console.log("Happy New year!!");




