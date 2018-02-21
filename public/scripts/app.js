console.log('App is runing');

// JSX JavaScript XML
// var templete = <p>This is JSX from app.js</p>;
// compilerd from https://babeljs.io/repl/
var templete = React.createElement(
  "h1",
  { id: "someid" },
  "Hola, RayJune"
);
var appRoot = document.getElementById('app');

ReactDOM.render(templete, appRoot);