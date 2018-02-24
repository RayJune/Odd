import React from 'react';
import Modal from 'react-modal';

const IdeaModal = (props) => (
  <Modal
    isOpen={!!props.selectedidea}
    onRequestClose={props.handlerClearSelectedidea}
    contentLabel="Selected idea"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Puncnline</h3>
    {props.selectedidea && <p className="modal__body">{props.selectedidea}</p>}
    <button className="button" onClick={props.handlerClearSelectedidea}>了然</button>
  </Modal>
);

export default IdeaModal;