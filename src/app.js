/* 
  how state is going to fit into apps:
  
  component state allows our components to manage some data

  So just think about an object with various key-value pairs , and when 
  that data changes the component will automatically rerender to reflect those changes
*/

/*
  All we have to do is manipulate the data and the component is going to take care of rerendering itself.
*/

/*
  1. Setup default state object
  2. Component rendered with default state values
  3. Change state based on event
  4. Component re-rendered using new states
  5. start at 3 again
*/

class OddApp extends React.Component {
  render() {
    const title = '偶得';
    const subtitle = '文章本天成，妙手偶得之';
    const options = ['thing 1', 'thing 2', 'thing 3'];

    return (
      <div>
        <Header title={title} subtitle={subtitle}/> 
        <Action />
        <Options2 options={options}/>
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
        <button onClick={this.handlePick}>何不试一把手气？</button>
      </div>
    )
  }
}

/* cutting line */

class Options1 extends React.Component {
  handleClear() {
    console.log(this.props.options); 
    // error, because the render produce the object, not Options it self.
    // so we use this.handleClear.bind(this) to fix it
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClear.bind(this)}>清空</button>
        {
          this.props.options.map((option) => {
            return <Option key={option} optionText={option}/>
          })
        }
      </div>
    );
  }
}

/*
  but the Options1's solution is expensive for every render it will call bind
  as our components rerender more and more often they can get a little bit expensive
  It requires us to do a bit more work than is really necessary
  So I'm going to do is remove this taht's actually going to once again break the program.
  And what I'm going to do is override the constructor function for react component.
*/

class Options2 extends React.Component {
  constructor(props) {
    super(props);
    this.handleClear = this.handleClear.bind(this);
    // It does not need to get rebound every single time the component renders which is way more efficient
  }
  handleClear() {
    console.log(this.props.options);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClear.bind(this)}>清空</button>
        {
          this.props.options.map((option) => {
            return <Option key={option} optionText={option}/>
          })
        }
      </div>
    );
  }
}

/* cutting line */

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
        <input type="text" name="option" placeholder="存放一个小心愿把：）"/>
        <button>添加</button>
      </form>
    );
  }
}

ReactDOM.render(<OddApp />, document.getElementById('app'));