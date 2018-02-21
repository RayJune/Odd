'use strict';

console.log('App is runing');

var app = {
  title: 'Indecision App',
  subtitle: 'You Never Try, You Never Know',
  item1: 'item1',
  item2: 'item2'
};

var templete = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      app.item1
    ),
    React.createElement(
      'li',
      null,
      app.item2
    )
  )
);

// JSX: JavaScript XML
var user = {
  name: 'Another RayJune',
  age: '21',
  location: 'Silicon Valley'
};

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
  React.createElement(
    'p',
    null,
    'location: ',
    user.location.toUpperCase()
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templete, appRoot);
