class Person {
  constructor(name = 'ray', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi~ I am ${this.name} :)`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

const lead = new Person('RayJune', 21);
console.log(lead.getDescription());

const other = new Person();
console.log(other.getDescription());

class Student1 extends Person {

}

const lead1 = new Student1('RayJune', 21);
console.log(lead.getDescription());

const other1 = new Student1();
console.log(other1.getDescription());

// super equal parent's constructor();
class Student2 extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  // override parent's function
  getDescription() {
    // invoke parent's function by super.
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` Their majar is follow by ${this.major}`
    }
    return description;
  }
}

const lead2 = new Student2('RayJune', 21, 'CS');
console.log(lead2.getDescription());
console.log(lead2.hasMajor());

const other2 = new Student2();
console.log(other2.getDescription());

/* cutting line */

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.homeLocation) {
      description += ` I'm visiting from ${this.homeLocation}`;
    }

    return description;
  }
}
const gandalf = new Traveler('Aragorn', 21, 'Middle-earth');
console.log(gandalf.getDescription());

const other = new Traveler(undefined, undefined, 'Nowhere');
console.log(other.getDescription());