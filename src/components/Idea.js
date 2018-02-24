import React from 'react';
// all of our JSX gets converted into react react.creatElement calls

const Idea = (props) => (
  <div className="idea">
    <p className="idea__text">{props.count}. {props.ideaText}</p>
    <button 
      className="button button--link"
      onClick={() => props.handleDeleteidea(props.ideaText)}
    >
      删除
    </button>
  </div>
);

export default Idea;
