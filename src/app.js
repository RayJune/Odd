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
  handlePick() {
    console.log(1);
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  handleClear() {
    console.log('clear');
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClear}>Clear</button>
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
  handleAddOption(e) {
    e.preventDefault();
    
    const option = e.target.elements.option.value.trim();

    if (option) {
      console.log(option);
      e.target.elements.option.value = '';
    }
  }
  render() {
    return (
      <form onSubmit={this.handleAddOption}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    );
  }
}

ReactDOM.render(<OddApp />, document.getElementById('app'));