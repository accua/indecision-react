
class Person {
  constructor(name = 'Anon', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi. I am ${this.name}`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}`;
    }
    return description
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  hasHome() {
    return !!this.homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();

    if (this.hasHome()) {
      greeting += ` I'm visiting from ${this.homeLocation}`
    }
    return greeting
  }
}

const travelerHome = new Traveler('Andrew Accuardi', 24, 'Portland')
console.log(travelerHome.getGreeting());

const traveler = new Traveler('Andrew Accuardi', 24)
console.log(traveler.getGreeting());

const me = new Student('Andrew Accuardi', 24, 'Ruby on React',);
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());
