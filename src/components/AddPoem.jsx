import React, { Component } from 'react';

class AddPoem extends Component {
  state = { error: undefined };
  handleAddPoem = (e) => {
    e.preventDefault();

    const poem = e.target.elements.poem.value.trim();
    const error = this.props.handleAddPoem(poem);
    // if error is none, everything is ok

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.poem.value = '';
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAddPoem}>
          <input className="add-option__input" type="text" name="poem" placeholder="存放一首诗把：）" />
          <button className="button">添加</button>
        </form>
      </div>
    );
  }
}

export default AddPoem;
