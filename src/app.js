// JSX: JavaScript XML

const app = {
  title: 'Indecision App',
  subtitle: 'You Never Try, You Never Know',
  options: ['one', 'two']
};

const templete = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>item1</li>
      <li>item2</li>
    </ol>
  </div>
);

let count = 0;
const templete2 = (
  <div>
    <h1>Count: {count}</h1>
    // class has been rename as className in JSX, because class is a reversed word in ES6
    <button id="btn" className="button">+1</button>
  </div>
);

// const addOne = () => {
//   console.log('add one');
// };
const templete3 = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
  </div>
);

const templete4 = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={() => {
      console.log('add one');
    }}>+1</button>
  </div>
);

const templete5 = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>reset</button>
  </div>
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

const appRoot = document.getElementById('app');
ReactDOM.render(templete5, appRoot);
