//function
function happybirthday(name, age) {
    console.log(`Happy birthday to ${name} for your ${age} th birthday!! Now go and die....`);
} 

happybirthday("Patrick", 22);

function add(x, y) {
    let result = x + y;
    return result;
}
let answer = add(2, 3);
console.log(answer);

function isEven(number) {
    if(number % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isEven(10)); //true

function isValidEmail(email) {
    return email.includes("@") ? true : false;
}
console.log(isValidEmail("fake@gmail.com")); //true
console.log(isValidEmail("fake.com")); //false