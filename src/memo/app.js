class OddApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleClearideas = this.handleClearideas.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleDeleteidea = this.handleDeleteidea.bind(this);
    this.handleAddidea = this.handleAddidea.bind(this);
    this.state = {
      ideas: []
    };
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('ideas');
      const ideas = JSON.parse(json);
      
      if (ideas) {
        this.setState(() => ({ ideas }));
      }
    } catch (error) {
      // JSON data is invalid
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.ideas.length !== this.state.ideas.length) {
      const json = JSON.stringify(this.state.ideas);
      localStorage.setItem('ideas', json);
      console.log('saving data~');
    }
  }
  componentWillUnmount() {
    // barely use, but it's important to know it exists
    console.log('componentWillUnmount');
  }
  handleClearideas() {
    this.setState(() => ({ ideas: [] }));
  }
  handleDeleteidea(ideaToRemove) {
    this.setState((prevState) => ({
      ideas: prevState.ideas.filter((idea) => ideaToRemove !== idea)
    }));
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.ideas.length);
    const idea = this.state.ideas[randomNum];
    console.log(idea);
  }
  handleAddidea(idea) {
    if (!idea) {
      return 'Enter valid value to add item';
    } else if (this.state.ideas.indexOf(idea) > -1){
      return 'This idea already exists';
    }

    this.setState((prevState) => ({ 
      ideas: prevState.ideas.concat(idea) }
    ));
  }
  render() {
    const subtitle = '文章本天成，妙手偶得之';

    return (
      <div>
        <Header subtitle={subtitle}/> 
        <Action 
          hasideas={this.state.ideas.length > 0}
          handlePick={this.handlePick}
        />
        <Ideas 
          ideas={this.state.ideas}
          handleClearideas={this.handleClearideas}
          handleDeleteidea={this.handleDeleteidea}
        />
        <Addidea 
          handleAddidea={this.handleAddidea}
        />
      </div>
    );
  }
}

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
        disabled={!props.hasideas}
      >
        点亮一个灵感
      </button>
    </div>
  );
};

const ideas = (props) => {
  return (
    <div>
      <button onClick={props.handleClearideas}>Clear</button>
      {props.ideas.length === 0 && <p>以前我没得选，现在我想做一个好人 ：》</p>}
      {props.ideas.map((idea) => (
        <idea 
          key={idea} 
          ideaText={idea}
          handleDeleteidea={props.handleDeleteidea}
        />
      ))}
    </div>
  );
};

const idea = (props) => {
  return (
    <div>
      {props.ideaText}
      <button 
        onClick={() => {
          props.handleDeleteidea(props.ideaText)
        }}
      >
        remove
      </button>
    </div>
  );
};

class Addidea extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddidea = this.handleAddidea.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddidea(e) {
    e.preventDefault();
    
    const idea = e.target.elements.idea.value.trim();
    const error = this.props.handleAddidea(idea);
    // if error is none, everything is ok

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.idea.value = '';
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddidea}>
          <input type="text" name="idea" placeholder="存放一个灵感把：）"/>
          <button>添加</button>
        </form>
      </div>
    );
  }
}

// using default props is powerful, it allows us to create really useful and reusable components.
ReactDOM.render(<OddApp />, document.getElementById('app'));