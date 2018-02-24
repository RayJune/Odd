import React from 'react';

const Action = (props) => (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        何不试一把手气？
      </button>
    </div>
);

export default Action;