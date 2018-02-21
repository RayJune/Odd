'use strict';

console.log('App is runing');

// JSX JavaScript XML
// error: var templete = <h1>This is JSX from app.js hahaha</h1><p>This is some info</p>;
// one root element(wrapper div), one love :)
var templete = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Another RayJune'
  ),
  React.createElement(
    'p',
    null,
    'motto: Gentleman is gentle.'
  ),
  React.createElement(
    'p',
    null,
    'Hobby(except coding)'
  ),
  React.createElement(
    'ul',
    null,
    React.createElement(
      'li',
      null,
      'Football'
    ),
    React.createElement(
      'li',
      null,
      'Man UTD'
    ),
    React.createElement(
      'li',
      null,
      'Zlatan 10'
    )
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templete, appRoot);
