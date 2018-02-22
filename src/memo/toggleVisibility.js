let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  const templete1 = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {visibility ? 'Hide details' : 'Show details'}
      </button>
      {visibility && (
        <div>
          <p>Hey. These are some details you can now see!</p>
        </div>
      )}
    </div>
  );

  ReactDOM.render(templete1, document.getElementById('app'));
};

render();

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
  const templete2 = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onShow}>Show details</button>
      <p id="sentence">Yestday You Said Tomorrow</p>
    </div>
  );

  ReactDOM.render(templete2, document.getElementById('app'));
}

// render1();