'use strict';

// JSX: JavaScript XML

// 1. if statement
// 2. ternary operators
// 3. logical and operator

var app = {
  title: 'Indecision App',
  subtitle: 'You Never Try, You Never Know',
  options: ['one', 'two']
};

var templete = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  '// about &% // If first value is false, it is not going to actually use that, // if the second value is truthy, that is going to get used. // render: true && ',
  React.createElement(
    'p',
    null,
    app.subtitle
  ),
  ' => ',
  React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here are your options' : 'No options'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'item1'
    ),
    React.createElement(
      'li',
      null,
      'item2'
    )
  )
);

// Cutting line

var user = {
  name: 'Another RayJune',
  age: '21',
  location: 'Silicon Valley'
};

function getLocation1(location) {
  return location ? location : 'unknow';
}

var templete1 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
  ),
  React.createElement(
    'p',
    null,
    'age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'location: ',
    getLocation1(user.location)
  )
);

// {h2} => h2, {html} => raw html

function getLocation2(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'location: ',
      location
    );
  }
}

var templete2 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
  ),
  React.createElement(
    'p',
    null,
    'age: ',
    user.age
  ),
  getLocation2(user.location),
  '// if return undefined, null, booleans, nothing show up',
  false,
  undefined,
  null
);

// ternary operators & logical and operator

var templete3 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation2(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(templete, appRoot);
