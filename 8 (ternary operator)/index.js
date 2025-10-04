//ternary operator = a shorcut to if{} and else stements
//                     helps to assign a variable based on condition
//                      condition ? codeIfTrue : codeIfFalse;

let age = 21;
let message = age >= 18 ? "You are an adult" : "You are a minor";
console.log(message);

let time = 16;
let gretting = time > 12 ? "Good mroning" : "Good afternoon";
console.log(gretting);

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);

// ===> Switch Operator
// swtich : can be an efficient replacement to many else if statements
let day = 2;

switch(day) {
    case 1:
        console.log("It is Saturday");
        break;
    case 2:
        console.log("It is sunday");
        break;
    case 3:
        console.log('It is monday');
        break;
    default:
        console.log(`${day} is not a day`);
}


let testScore = 92;
let letterGrade;

switch(true) {
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    default:
        letterGrade = "F";
}
console.log(letterGrade);








