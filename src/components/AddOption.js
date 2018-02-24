import React from 'react';

class AddOption extends React.Component {
  state = { error: undefined };
  handleAddOption = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    // if error is none, everything is ok

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" placeholder="存放一个小心愿把：）"/>
          <button className="button">添加</button>
        </form>
      </div>
    );
  }
}

export default AddOption;