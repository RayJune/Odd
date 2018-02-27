import React from 'react';
import Poem from './Poem';

const Poems = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">灵感池</h3>
      <button 
        className="button button--link"
        onClick={props.handleClearPoems}
      >
        清空
      </button>
    </div>
    {props.poems.length === 0 && <p className="widget__message">你的诗是什么？</p>}
    {props.poems.map((poem, index) => (
      <poem 
        key={poem} 
        poemText={poem}
        count={index + 1}
        handleDeletePoem={props.handleDeletePoem}
      />
    ))}
  </div>
);

export default Poems;