class OddApp extends React.Component {
  render() {
    return (
      <div>
        <Header /> 
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}

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
        <Option /> {/* same as <Option></Option> */}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <p>Option component</p>
    )
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

ReactDOM.render(<OddApp />, document.getElementById('app'));