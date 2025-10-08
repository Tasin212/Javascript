//static = it's a keyword defines properties or methods that belong to a class itself rather
//than objects created from that class(class owns anything static, not the objects)
class MathUtil {
    static PI = 3.1416;

    static getDiaMeter(radius){
        return radius * 2;
    }

    static getArea(radius){
        return this.PI * radius * radius;
    }
}
console.log(MathUtil.PI);
//see to access PI we didn't create eg: const MathUtil = new MathUtil(); since it's static
console.log(`Diameter : ${MathUtil.getDiaMeter(4)}`);
console.log(`Diameter : ${MathUtil.getArea(4).toFixed(2)}`);

//2
console.log(`\n `)
class User{
    static userCount = 0;

    constructor(userName) {
        this.userName = userName;
        User.userCount++;
    }
    static getUserCount() {
        console.log(`There are ${User.userCount} users are online`);
    }

    sayHello() {
        console.log(`Hello my username is : ${this.userName}`);
    }
}
const user1 = new User("Harry");
console.log(user1.userName);
// console.log(user1.userCount);//undefined
// cz object can't access static only class can
console.log(User.userCount);

const user2 = new User("Potter");
const user3 = new User("Wisely");
const user4 = new User("Harmoine");

user2.sayHello();
user3.sayHello();
user4.sayHello();
console.log(`Total number of user : ${User.userCount}`);

User.getUserCount();

//============= Inheritance =============
//inheritance = allows a new class to inherit properties and methods from an existing class(parent -> child)
// helps with code reusability
console.log('\n ============== Inheritance ==========')
class Animal {
    alive = true;

    eat() {
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal {
    name = "Rabbit";
    run() {//child can have their own methods
        console.log(`this ${this.name} is running`);
    }
}
class Fish extends Animal {
    name = "Firsh";
}

const rabbit = new Rabbit();
const fish = new Fish();

console.log(`Rabbit alive? : ${rabbit.alive}`);
rabbit.eat();
rabbit.sleep();
rabbit.run();

fish.alive = false;
console.log(`Fish alive? : ${fish.alive}`);


console.log(`\n ======== Super Keyword ==========`);
// super = keyword is used in classes to call the constructor or access the properties and methods
//of a parent class(superclass); this = this object ; super = the parent
class Animal2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    move(speed) {
        console.log(`The ${this.name} moves at a speed of ${speed} mph`);
    }
}

class Rabbit2 extends Animal2 {
    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }
    run() {
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}

class Fish2 extends Animal2 {
    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
    swim() {
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}

const rabbit2 = new Rabbit2("rabbit", 1, 25);
const fish2 = new Fish2("fish", 3, 50);

console.log(`Name : ${rabbit2.name} ; Age : ${rabbit2.age} ; Run-Speed : ${rabbit2.runSpeed}`);
console.log(`Name : ${fish2.name} ; Age : ${fish2.age} ; Swim-Speed : ${fish2.swimSpeed}`);

rabbit2.run();
fish2.swim();
