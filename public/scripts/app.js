'use strict';

// JSX: JavaScript XML

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

var count = 0;
// count change, but h1's count not change because:
// JSX does not have built in data binding
var addOne = function addOne() {
  count += 1;
  console.log(count);
  console.log('add one');
};
var minusOne = function minusOne() {
  console.log('minus one');
};
var reset = function reset() {
  console.log('reset');
};

// code_section_1
var templete1 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count: ',
    count
  ),
  React.createElement(
    'button',
    { onClick: addOne },
    '+1'
  ),
  React.createElement(
    'button',
    { onClick: minusOne },
    '-1'
  ),
  React.createElement(
    'button',
    { onClick: reset },
    'reset'
  )
);

/* 
  this templete1 expression runs before anything is rendered to the screen
  Remember we don't render a single thing to the screen until we call react-done render
  So what are these variables equal before anything is rendered to the screen
*/

/* 
  There's no way one of our event handlers fired because the buttons haven't even been rendered.
  So when we create JSX, 
  all the data that gets used inside of it that 
  happens at the time the code runs
*/

// So the count was 0 because it is 0 when this first run

// how to fix that?
// we just need to rerun code_section_1 & code_section_2 when data changes

/*
  When our data changes later on we're going to use react components to do that
  But it a little difficult for now(my react skil level).
*/

// code_section_2
var appRoot = document.getElementById('app');
ReactDOM.render(templete1, appRoot);
