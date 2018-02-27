import React from 'react';
import Modal from 'react-modal';

const PoemModal = (props) => (
  <Modal
    isOpen={!!props.selectedPoem}
    onRequestClose={props.handlerClearSelectedPoem}
    contentLabel="Selected Poem"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Puncnline</h3>
    {props.selectedPoem && <p className="modal__body">{props.selectedPoem}</p>}
    <button className="button" onClick={props.handlerClearSelectedPoem}>了然</button>
  </Modal>
);

export default PoemModal;