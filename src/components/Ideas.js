import React from 'react';
import Idea from './Idea';

const Ideas = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">灵感池</h3>
      <button 
        className="button button--link"
        onClick={props.handleClearideas}
      >
        清空
      </button>
    </div>
    {props.ideas.length === 0 && <p className="widget__message">以前我没得选，现在我想做一个好人 ：》</p>}
    {props.ideas.map((idea, index) => (
      <Idea 
        key={idea} 
        ideaText={idea}
        count={index + 1}
        handleDeleteidea={props.handleDeleteidea}
      />
    ))}
  </div>
);

export default Ideas;