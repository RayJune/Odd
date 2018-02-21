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

/* cutting line */

var count = 0;
// count change, but h1's count not change because:
// JSX does not have built in data binding
var addOne = function addOne() {
  count += 1;
  // punchline:
  renderCounterApp();
};
var minusOne = function minusOne() {
  count -= 1;
  renderCounterApp();
};
var reset = function reset() {
  count = 0;
  renderCounterApp();
};

var appRoot = document.getElementById('app');;

// imitate/illustrate how React does:
// the count variable is changing but after it changes we never render
var renderCounterApp = function renderCounterApp() {
  var templete2 = React.createElement(
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

  ReactDOM.render(templete2, appRoot);
  // Just part of the one needs to be replaced, this is React's super-efficient virtual-dom

  // This means that: we can rerender our app updating it without worrying about slowing down the user or wasting a ton of resources and creating a large buggy app instead.
};
// So we're able to reate a little JSX app that has real time data binding as that count changes
// We're able to reflect those changes by rerendering the app 
renderCounterApp();
