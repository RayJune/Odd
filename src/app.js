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

/* cutting line */

let count = 0;
// count change, but h1's count not change because:
// JSX does not have built in data binding
const addOne = () => {
  count += 1;
  // punchline:
  renderCounterApp();
};
const minusOne = () => {
  count -= 1;
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById('app');;

// imitate/illustrate how React does:
// the count variable is changing but after it changes we never render
const renderCounterApp = () => {
  const templete2 = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );

  ReactDOM.render(templete2, appRoot)
  // Just part of the one needs to be replaced, this is React's super-efficient virtual-dom

  // This means that: we can rerender our app updating it without worrying about slowing down the user or wasting a ton of resources and creating a large buggy app instead.
}
// So we're able to reate a little JSX app that has real time data binding as that count changes
// We're able to reflect those changes by rerendering the app 
renderCounterApp();