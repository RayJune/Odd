import React from 'react';
import Modal from 'react-modal';

const IdeaModal = (props) => (
  <Modal
    isOpen={!!props.selectedidea}
    onRequestClose={props.handlerClearSelectedidea}
    contentLabel="Selected idea"
  >
    {props.selectedidea && <h3>{props.selectedidea}</h3>}
    <button onClick={props.handlerClearSelectedidea}>Okay</button>
  </Modal>
);

export default IdeaModal;