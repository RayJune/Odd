import React from 'react';
// all of our JSX gets converted into react react.creatElement calls

const Option = (props) => (
  <div>
    {props.optionText}
    <button 
      className="button button--link"
      onClick={() => props.handleDeleteOption(props.optionText)}
    >
      remove
    </button>
  </div>
);

export default Option;
