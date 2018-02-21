'use strict';

console.log('App is runing');

// JSX JavaScript XML
var templete = React.createElement(
  'h1',
  null,
  'This is JSX from app.js hahaha'
);
var appRoot = document.getElementById('app');

ReactDOM.render(templete, appRoot);
