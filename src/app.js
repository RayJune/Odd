class OddApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleClearOptions = this.handleClearOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: props.options
    };
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (error) {
      // JSON data is invalid
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
      console.log('saving data~');
    }
  }
  componentWillUnmount() {
    // barely use, but it's important to know it exists
    console.log('componentWillUnmount');
  }
  handleClearOptions() {
    this.setState(() => ({ options: [] }));
  }
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    console.log(option);
  }
  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1){
      return 'This option already exists';
    }

    this.setState((prevState) => ({ 
      options: prevState.options.concat(option) }
    ));
  }
  render() {
    const subtitle = '文章本天成，妙手偶得之';

    return (
      <div>
        <Header subtitle={subtitle}/> 
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options}
          handleClearOptions={this.handleClearOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

// use default props to implement default state value, which is fantastic~!
OddApp.defaultProps = {
  options: []
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: '偶得'
};

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        何不试一把手气？
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleClearOptions}>Clear</button>
      {props.options.length === 0 && <p>以前我没得选，现在我想做一个好人 ：》</p>}
      {props.options.map((option) => (
        <Option 
          key={option} 
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button 
        onClick={() => {
          props.handleDeleteOption(props.optionText)
        }}
      >
        remove
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();
    
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    // if error is none, everything is ok

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" placeholder="存放一个小心愿把：）"/>
          <button>添加</button>
        </form>
      </div>
    );
  }
}

// using default props is powerful, it allows us to create really useful and reusable components.
ReactDOM.render(<OddApp />, document.getElementById('app'));