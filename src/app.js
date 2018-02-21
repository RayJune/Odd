// React: A JavaScript **library for building user interfaces**
// JSX: JavaScript XML

const app = {
  title: 'Indecision App',
  subtitle: 'You Never Try, You Never Know',
  options: []
};
const appRoot = document.getElementById('app');;

const onFormSubmit = (e) => {
  e.preventDefault(); // prevent form's default action: refresh the whole page
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = ''; // reset input
  }
  render();
};

const onClear = () => {
  app.options = [];
  render();
}

const render = () => {
  const templete = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>
      <button onClick={onClear}>Clear</button>
      <ol>
        <li>item1</li>
        <li>item2</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(templete, appRoot);
};

render();