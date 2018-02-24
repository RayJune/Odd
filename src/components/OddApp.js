import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';

class OddApp extends React.Component {
  state = { options: [] };
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    console.log(option);
  };
  handleClearOptions = () => {
    this.setState(() => ({ options: [] }));
  };
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  };
  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1){
      return 'This option already exists';
    }

    this.setState((prevState) => ({ 
      options: prevState.options.concat(option) }
    ));
  };
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
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount() {
    // barely use, but it's important to know it exists
    console.log('componentWillUnmount');
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

export default OddApp;