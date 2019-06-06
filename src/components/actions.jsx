import React from "react";
import Button from "react-bootstrap/Button";

const Actions = ({ onPass, fight, onAction }) => {
  return (
    <div className="col-md-12 text-center" style={{ marginBottom: 30 }}>
      <div className="btn-group" role="group">
        <Button variant="dark" size="lg" disabled={fight} onClick={onPass}>
          Passer son tour
        </Button>
        <Button
          variant="danger"
          size="lg"
          disabled={!fight}
          onClick={() => onAction("attaque")}
        >
          Attaquer
        </Button>
        <Button
          variant="warning"
          size="lg"
          disabled={!fight}
          onClick={() => onAction("défend")}
        >
          Défendre
        </Button>
      </div>
    </div>
  );
};

export default Actions;
