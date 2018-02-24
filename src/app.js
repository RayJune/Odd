import React from 'react';
import ReactDOM from 'react-dom';
import OddApp from './components/OddApp';

ReactDOM.render(<OddApp />, document.getElementById('app'));

class OldSyntax {
  constructor() {
    this.name = 'ray';
  }
  getGreeting() {
    return `hi~ my name is ${this.name}`;
  }
}

const num1 = new OldSyntax();
console.log(num1);
console.log(num1.getGreeting());
// const getGreeting = num1.getGreeting;
// console.log(getGreeting());

// fix:

class OldSyntax2 {
  constructor() {
    this.name = 'ray';
    this.getGreeting = this.getGreeting.bind(this);
  }
  getGreeting() {
    return `hi~ my name is ${this.name}`;
  }
}

const num11 = new OldSyntax2();
console.log(num11.getGreeting());
const getGreeting2 = num11.getGreeting;
console.log(getGreeting2());

class NewSyntax {
  name = 'liga';
}

const num2 = new NewSyntax();
console.log(num2);

class NewSyntax2 {
  name = 'liga';
  getGreeting = () => {
    return `hi~ my name is ${this.name}`;
  }
}

const num22 = new NewSyntax2();
console.log(num22.getGreeting());
const getGreeting22 = num22.getGreeting;
console.log(getGreeting22());