import React from 'react';
import Option from './Option';

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleClearOptions}>Clear</button>
      {props.options.length === 0 && <p>以前我没得选，现在我想做一个好人 ：》</p>}
      {props.options.map((option) => (
        <Option 
          key={option} 
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};

export default Options;