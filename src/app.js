class OddApp extends React.Component {
  render() {
    const title = '文章本天成，妙手偶得之';
    const subtitle = '代码即诗歌';
    const options = ['thing 1', 'thing 2', 'thing 3'];

    return (
      <div>
        <Header title={title} subtitle={subtitle}/> 
        <Action />
        <Options options={options}/>
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
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
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
        {
          this.props.options.map((option) => {
            return <Option key={option} optionText={option}/>
          })
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <p>option: {this.props.optionText}</p>
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