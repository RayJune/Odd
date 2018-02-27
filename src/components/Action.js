import React from 'react';

const Action = (props) => (
    <div>
      <button
        className="button big-button"
        onClick={props.handlePick}
        disabled={!props.hasPoems}
      >
        点亮一首诗
      </button>
    </div>
);

export default Action;