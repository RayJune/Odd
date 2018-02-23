class MagicalCounter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }
  // componentDidMount
  componentDidMount() {
    const count = parseInt(localStorage.getItem('count'), 10);
    // or use Number() const count = Number(localStorage.getItem('count'));


    if (count || count === 0) {
      this.setState(() => ({ count }))
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
  }
  handleAddOne() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }
  handleMinusOne() {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  }
  handleReset() {
    this.setState(() => ({ count: 0 }));
  }
  render() {
    return (
      <div>
        <h1>一只魔性的计数器：{this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}

// ReactDOM.render(<MagicalCounter count={2}/>, document.getElementById('app'));
ReactDOM.render(<MagicalCounter />, document.getElementById('app'));