class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        //return 'Hi! ' + this.name;
        return `Hi. I am ${this.name}!`;      //es6
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }

}

//const me = new Person('Darshak Mehta');
//console.log(me); 

//const other = new Person();
//console.log(other); //name = 'Anonymous' 

//const me = new Person('Darshak Mehta', 26);
//console.log(me.getDescription()); 

//const other = new Person();
//console.log(other.getDescription()); //name = 'Anonymous' age = 0

class Student extends Person{
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}

class Travellor extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if(this.hasHomeLocation()) {
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
    hasHomeLocation() {
        return !!this.homeLocation;
    }
}

const me = new Travellor('Darshak Mehta', 23, 'Charlotte');
console.log(me.getGreeting());

const other = new Travellor();
console.log(other.getGreeting());
