// React: A JavaScript **library for building user interfaces**
// JSX: JavaScript XML

const app = {
  title: 'Indecision App',
  subtitle: 'You Never Try, You Never Know',
  options: []
};
const appRoot = document.getElementById('app');;

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  console.log(option);
};

const onClear = () => {
  app.options = [];
  render();
};

const onFormSubmit = (e) => {
  e.preventDefault(); // prevent form's default action: refresh the whole page

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = ''; // reset input
  }
  render();
};

const render = () => {
  const templete = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onClear}>Clear</button>
      <ol>
        {
          app.options.map((option) => {
            return <li key={option}>{option}</li>;
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(templete, appRoot);
};

// render();

/* cutting line */

const onShow = ({target}) => {
  console.dir(document.getElementById('sentence'));
  if (target.textContent != 'Show details') {
    target.textContent = 'Show details';
    document.getElementById('sentence').style.display = 'none';
  } else {
    target.textContent = 'Hide details';
    document.querySelector('#sentence').style.display = 'block';
  }
  render1();
};

const render1 = () => {
  const templete1 = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onShow}>Show details</button>
      <p id="sentence">Yestday You Said Tomorrow</p>
    </div>
  );

  ReactDOM.render(templete1, appRoot);
}

// render1();

/* cutting line */

let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  render2();
};

const render2 = () => {
  const templete2 = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>{visibility ? 'Hide details' : 'Show details'}</button>
      {visibility && <p>Yestday You Said Tomorrow</p>}
    </div>
  );

  ReactDOM.render(templete2, appRoot);
};

render2();