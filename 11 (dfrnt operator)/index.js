// = assignment operator
// == comparison operator (compare if values are equal)
// === strict equality operator (compare if values & datatype are equal)
// != inequality operator
// !== strict inequality operator
const PI = 3.14;

if (PI == "3.14") {
    console.log("That is PI "); //this will execute
}
else {
    console.log("That is NOT Pi");
}

if(PI === "3.14") {
    console.log("That is PI");
}
else {
    console.log("That is NOT PI"); //this will execute
}

if(PI != "3.14") {
    console.log("That is NOT Pi");
}
else {
    console.log("That is PI"); //true
}

if(PI !== "3.14") {
    console.log("That is NOT PI");//true
}
else {
    console.log("That is PI")
}