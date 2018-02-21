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
var templete2 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count: ',
    count
  ),
  '// class has been rename as className in JSX, because class is a reversed word in ES6',
  React.createElement(
    'button',
    { id: 'btn', className: 'button' },
    '+1'
  )
);

// const addOne = () => {
//   console.log('add one');
// };
var templete3 = React.createElement(
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
  )
);

var templete4 = React.createElement(
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
    { onClick: function onClick() {
        console.log('add one');
      } },
    '+1'
  )
);

var templete5 = React.createElement(
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

function addOne() {
  console.log('add one');
}

function minusOne() {
  console.log('minus one');
}

function reset() {
  console.log('reset');
}

var appRoot = document.getElementById('app');
ReactDOM.render(templete5, appRoot);
