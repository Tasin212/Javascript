//getter = special method that makes a property readable
//setter = speical method that makes a property writeable
//validate and modify a value when reading/writing a property
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    set width(newWidth){
        if(newWidth > 0) {
            this._width = newWidth; //this._widht is the private property
        }
        else {
            console.error(`Width must be a positive number`)
        }
    }
    
    set height(newHeight){
        if(newHeight > 0) {
            this._height = newHeight;
        }
        else {
            console.error(`Height must be positive number`);
        }
    }

    get width() {
        return this._width;
    }
    get height(){
        return this._height;
    }

    get area(){
        return this._height * this._width;
    }


}

const rectangle = new Rectangle(-100000, "pizza");
const rectangle2 = new Rectangle(3, 4);

console.log(`For rectangle, Widht :  ${rectangle.width} ; Height : ${rectangle.height}`);
console.log(`For rectangle2, Width : ${rectangle2.width} ; Height : ${rectangle2.height}`);

const rectangle3 = new Rectangle(4, 5);
rectangle3.width = 10;
rectangle3.height = 20; //we can modify the value in this way
console.log(`For rectangle2, Width : ${rectangle3.width} ; Height : ${rectangle3.height} ; Area : ${rectangle3.area}`);
// see how are accessing the area()

console.log(`\n============ 2nd example =========`);
class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }else {
            console.error("Frist name must be a non-empty string");
        }
    }

    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }else {
            console.error("Last name must be a non-empty string");
        }
    }

    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }

    get fullname(){
        return this._firstName + " " + this._lastName;
    }

}

const person = new Person("Harry", "Potter", 23);
console.log(`F_name : ${person.firstName} ; L_Name : ${person.lastName} ; Fullname: ${person.fullname} ; Age : ${person.age}`);

const person2 = new Person("", "Granger", 22);
console.log(`F_name : ${person2.firstName} ; L_Name : ${person2.lastName} ; Age : ${person2.age}`);
















