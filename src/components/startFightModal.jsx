import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const StartFightModal = ({ showStart, onHide, player }) => {
  return (
    <Modal show={showStart} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Le combat va commencer !!!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Les deux joueurs se sont rencontrés, ils vont donc devoir combatre
        </p>
        <p>Chacun choisit d'attaquer ou de defendre contre le prochain coup</p>
        <p>
          <span>{player}</span> commence le combat
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" size="lg" onClick={onHide}>
          C'est parti !
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default StartFightModal;
