import React from 'react';

const Action = props => (
  <button
    className="button big-button"
    onClick={props.handlePick}
    disabled={!props.hasPoems}
  >
    点亮一首诗
  </button>
);

export default Action;
