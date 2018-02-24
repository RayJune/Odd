import React from 'react';

class AddIdea extends React.Component {
  state = { error: undefined };
  handleAddIdea = (e) => {
    e.preventDefault();
    
    const idea = e.target.elements.idea.value.trim();
    const error = this.props.handleAddIdea(idea);
    // if error is none, everything is ok

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.idea.value = '';
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAddIdea}>
          <input className="add-option__input" type="text" name="idea" placeholder="存放一个灵感把：）"/>
          <button className="button">添加</button>
        </form>
      </div>
    );
  }
}

export default AddIdea;