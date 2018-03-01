// React: A JavaScript **library for building user interfaces**
// JSX: JavaScript XML

const app = {
  title: 'Indecision App',
  subtitle: 'You Never Try, You Never Know',
  Ideas: []
};
const appRoot = document.getElementById('app');;

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.Ideas.length);
  const Idea = app.Ideas[randomNum];
  console.log(Idea);
};

const onClear = () => {
  app.Ideas = [];
  render();
};

const onFormSubmit = (e) => {
  e.preventDefault(); // prevent form's default action: refresh the whole page

  const Idea = e.target.elements.Idea.value;

  if (Idea) {
    app.Ideas.push(Idea);
    e.target.elements.Idea.value = ''; // reset input
  }
  render();
};

const render = () => {
  const templete = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.Ideas.length > 0 ? 'Here are your Ideas' : 'No Ideas'}</p>
      <button disabled={app.Ideas.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onClear}>Clear</button>
      <ol>
        {
          app.Ideas.map((Idea) => {
            return <li key={Idea}>{Idea}</li>;
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="Idea"/>
        <button>Add Idea</button>
      </form>
    </div>
  );

  ReactDOM.render(templete, appRoot);
};
