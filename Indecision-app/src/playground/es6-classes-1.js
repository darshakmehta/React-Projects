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
