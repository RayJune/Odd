// JSX: JavaScript XML

// 1. if statement
// 2. ternary operators
// 3. logical and operator

var app = {
  title: 'Indecision App',
  subtitle: 'You Never Try, You Never Know',
  options: ['one', 'two']
};

var templete = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    // about &%
    // If first value is false, it is not going to actually use that,
    // if the second value is truthy, that is going to get used.
    // render: true && <p>{app.subtitle}</p> => <p>{app.subtitle}</p>
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>item1</li>
      <li>item2</li>
    </ol>
  </div>
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

var templete1 = (
  <div>
    <h1>{user.name}</h1>
    <p>age: {user.age}</p>
    <p>location: {getLocation1(user.location)}</p>
  </div>
);

// {h2} => h2, {html} => raw html

function getLocation2(location) {
  if (location) {
    return <p>location: {location}</p>;
  }
}

var templete2 = (
  <div>
    <h1>{user.name}</h1>
    <p>age: {user.age}</p>
    {getLocation2(user.location)}
    // if return undefined, null, booleans, nothing show up
    {false}{undefined}{null}
  </div>
);

// ternary operators & logical and operator

var templete3 = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation2(user.location)}
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templete, appRoot);