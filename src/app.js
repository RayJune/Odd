class Header extends React.Component {
  // React.Component requie 1 method to be defined: render
  render() {
    return (
      <div>
        <h1>文章本天成，妙手偶得之</h1>
        <h2>代码即诗歌</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        Options component
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        AddOption component
      </div>
    );
  }
}

const rayjune = (
  <div>
    <Header /> 
    <Action />
    <Options />
    <AddOption />
  </div>
);

ReactDOM.render(rayjune, document.getElementById('app'));