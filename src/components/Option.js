import React from 'react';
// all of our JSX gets converted into react react.creatElement calls

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button 
        onClick={() => {
          props.handleDeleteOption(props.optionText)
        }}
      >
        remove
      </button>
    </div>
  );
};

export default Option;
