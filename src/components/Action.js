import React from 'react';

const Action = (props) => (
    <div>
      <button
        className="button big-button"
        onClick={props.handlePick}
        disabled={!props.hasIdeas}
      >
        点亮一个灵感
      </button>
    </div>
);

export default Action;