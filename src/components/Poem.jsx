import React from 'react';
// all of our JSX gets converted into react react.creatElement calls

const Poem = props => (
  <div className="poem">
    <p className="poem__text">{props.count}. {props.poemText}</p>
    <button
      className="button button--link"
      onClick={() => props.handleDeletePoem(props.poemText)}
    >
      删除
    </button>
  </div>
);

export default Poem;
