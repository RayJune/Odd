console.log('App is runing');

var app = {
  title: 'Indecision App',
  subtitle: 'You Never Try, You Never Know',
  item1: 'item1',
  item2: 'item2'
};

var templete = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>{app.item1}</li>
      <li>{app.item2}</li>
    </ol>
  </div>
);

// JSX: JavaScript XML
var user = {
  name: 'Another RayJune',
  age: '21',
  location: 'Silicon Valley'
};

var templete2 = (
  <div>
    <h1>{user.name}</h1>
    <p>age: {user.age}</p>
    <p>location: {user.location.toUpperCase()}</p>
  </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(templete, appRoot);