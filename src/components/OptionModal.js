import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handlerClearSelectedOption}
    contentLabel="Selected Option"
  >
    {props.selectedOption && <h3>{props.selectedOption}</h3>}
    <button onClick={props.handlerClearSelectedOption}>Okay</button>
  </Modal>
);

export default OptionModal;