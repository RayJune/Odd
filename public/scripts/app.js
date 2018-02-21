'use strict';

// React: A JavaScript **library for building user interfaces**
// JSX: JavaScript XML

var app = {
  title: 'Indecision App',
  subtitle: 'You Never Try, You Never Know',
  options: []
};
var appRoot = document.getElementById('app');;

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  console.log(option);
};

var onClear = function onClear() {
  app.options = [];
  render();
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault(); // prevent form's default action: refresh the whole page

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = ''; // reset input
  }
  render();
};

var render = function render() {
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
      'button',
      { disabled: app.options.length === 0, onClick: onMakeDecision },
      'What should I do?'
    ),
    React.createElement(
      'button',
      { onClick: onClear },
      'Clear'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );

  ReactDOM.render(templete, appRoot);
};

render();
