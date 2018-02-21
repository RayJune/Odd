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
// count change, but h1's count not change because:
// JSX does not have built in data binding
const addOne = () => {
  count += 1;
  console.log(count);
  console.log('add one');
};
const minusOne = () => {
  console.log('minus one');
};
const reset = () => {
  console.log('reset');
};

// code_section_1
const templete1 = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>reset</button>
  </div>
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
const appRoot = document.getElementById('app');
ReactDOM.render(templete1, appRoot);
