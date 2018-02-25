import React from 'react';
import Header from './Header';
import Action from './Action';
import Ideas from './Ideas';
import AddIdea from './AddIdea';
import IdeaModal from './IdeaModal';
import Footer from './Footer';

class OddApp extends React.Component {
  state = { 
    ideas: [],
    selectedidea: undefined
  };
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.ideas.length);
    const idea = this.state.ideas[randomNum];
    
    this.setState(() => ({ selectedidea: idea }));
  };
  handlerClearSelectedidea = () => {
    this.setState(() => ({ selectedidea: undefined }));
  }
  handleClearideas = () => {
    this.setState(() => ({ ideas: [] }));
  };
  handleDeleteidea = (ideaToRemove) => {
    this.setState((prevState) => ({
      ideas: prevState.ideas.filter((idea) => ideaToRemove !== idea)
    }));
  };
  handleAddIdea = (idea) => {
    if (!idea) {
      return 'Enter valid value to add item';
    } else if (this.state.ideas.indexOf(idea) > -1){
      return 'This idea already exists';
    }

    this.setState((prevState) => ({ 
      ideas: prevState.ideas.concat(idea) }
    ));
  };
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
    }
  }
  componentWillUnmount() {
    // barely use, but it's important to know it exists
    console.log('componentWillUnmount');
  }
  render() {
    const subtitle = '文章本天成，妙手偶得之';

    return (
      <div className="wrapper">
        <Header subtitle={subtitle}/> 
        <div className="main">
          <Action 
            hasIdeas={this.state.ideas.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Ideas 
              ideas={this.state.ideas}
              handleClearideas={this.handleClearideas}
              handleDeleteidea={this.handleDeleteidea}
            />
            <AddIdea 
              handleAddIdea={this.handleAddIdea}
            />
          </div>
          <IdeaModal 
            selectedidea={this.state.selectedidea}
            handlerClearSelectedidea={this.handlerClearSelectedidea}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default OddApp;