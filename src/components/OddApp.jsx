import React, { Component } from 'react';
import Header from './Header';
import Action from './Action';
import Poems from './Poems';
import AddPoem from './AddPoem';
import PoemModal from './PoemModal';
import Footer from './Footer';

class OddApp extends Component {
  state = {
    poems: [],
    selectePoem: undefined,
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem('poems');
      const poems = JSON.parse(json);

      if (poems) {
        this.setState(() => ({ poems }));
      }
    } catch (error) {
      // JSON data is invalid
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.poems.length !== this.state.poems.length) {
      const json = JSON.stringify(this.state.poems);
      localStorage.setItem('poems', json);
    }
  }
  componentWillUnmount() {
    // barely use, but it's important to know it exists
    // console.log('componentWillUnmount');
  }
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.poems.length);
    const poem = this.state.poems[randomNum];

    this.setState(() => ({ selectePoem: poem }));
  };
  handlerClearSelectePoem = () => {
    this.setState(() => ({ selectePoem: undefined }));
  }
  handleClearPoems = () => {
    this.setState(() => ({ poems: [] }));
  };
  handleDeletePoem = (poemToRemove) => {
    this.setState(prevState => ({
      poems: prevState.poems.filter(poem => poemToRemove !== poem),
    }));
  };
  handleAddPoem = (poem) => {
    let message;

    if (!poem) {
      message = 'Enter valid value to add item';
    } else if (this.state.poems.indexOf(poem) > -1) {
      message = 'This poem already exists';
    }
    this.setState(prevState => ({ poems: prevState.poems.concat(poem) }
    ));

    return message;
  };
  render() {
    const subtitle = '文章本天成，妙手偶得之';

    return (
      <div className="wrapper">
        <Header subtitle={subtitle} />
        <div className="main">
          <Action
            hasPoems={this.state.poems.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Poems
              poems={this.state.poems}
              handleClearPoems={this.handleClearPoems}
              handleDeletePoem={this.handleDeletePoem}
            />
            <AddPoem
              handleAddPoem={this.handleAddPoem}
            />
          </div>
          <PoemModal
            selectePoem={this.state.selectePoem}
            handlerClearSelectePoem={this.handlerClearSelectePoem}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default OddApp;
