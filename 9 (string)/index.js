// string methods - allow you to manipulate and work with text(strings)

let pname = "javascript";
console.log(pname.charAt(0));

console.log(pname.indexOf('a')); //it will return the index of first occurance of the char 'a'
console.log(pname.lastIndexOf('a')); //return the index of the last occurance of the char 'a'

console.log(pname.length);

console.log(pname.toUpperCase());

console.log(pname.toLowerCase());

console.log(pname.repeat(3)); //it will repeat the string 3 times

console.log(`startsWith function : ${pname.startsWith('j')}`);

console.log(`endsWith function : ${pname.endsWith(' ')}`)


let pname2 = "       javascript     ";
let trim_pname2 = pname2.trim();
console.log(trim_pname2);

let res = pname2.startsWith(' ');
if(res){
    console.log('Program language name cant start with a space ');
}
else {
    console.log(pname2);
}

let res2 = pname2.includes(" "); //it will check whether pname2 includes space or not
if(res2) {
    console.log('Program name contains space');
}
else{
    console.log(pname2);
}

let phoneNumber = "01843-456-789";
phoneNumber = phoneNumber.replaceAll('-','');
console.log(phoneNumber);

let phoneNumber2 = "01843-456-789";
phoneNumber2 = phoneNumber2.padStart(15, "0");
// 15 define the length of the string, if the length < 15 then other element will be filled with 0's upfront
console.log(phoneNumber2);

let phoneNumber3 = "01843-456-789";
phoneNumber3 = phoneNumber3.padEnd(15, "0"); // 0's will be filled backfront
console.log(phoneNumber3);


//====> String slicing : string.slice(start, end)

let fullName = "Harry Potter";
let firstName = fullName.slice(0, 5);
let lastName = fullName.slice(6, fullName.length);
let lastName2 = fullName.slice(6); //ending index auto assigned

console.log(`First name : ${firstName}`);
console.log(`Last name : ${lastName}`);
console.log(`Last name : ${lastName2}`);

let firstName2 = fullName.slice(0, fullName.indexOf(" "));
let lastName3 = fullName.slice(fullName.lastIndexOf(" ") + 1); //to exclude the index +1 added

console.log(`First name anotherway : ${firstName2}`);
console.log(`Last Name another way : ${lastName3}`);

const email = "harry@gmail.com";
let userName = email.slice(0, email.indexOf('@')); // (0, 5)
let extension = email.slice(email.indexOf('@') + 1);

console.log(`User Name : ${userName}`);
console.log(`Extension of email : ${extension}`);

