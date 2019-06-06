import React from "react";
import Perso from "./perso";

const SelectionPersos = ({ onSubmit, onChange, onClick, users }) => {
  return (
    <React.Fragment>
      <h2 style={styles.titre}>Choisissez vos personnages :</h2>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Perso
          onSubmit={onSubmit}
          onChange={onChange}
          onClick={onClick}
          user={users[0]}
          competitor={users[1]}
        />
        <Perso
          onSubmit={onSubmit}
          onChange={onChange}
          onClick={onClick}
          user={users[1]}
          competitor={users[0]}
        />
      </div>
    </React.Fragment>
  );
};

const styles = {
  titre: { fontSize: 25, marginLeft: 20, marginTop: 25, fontWeight: "normal" }
};

export default SelectionPersos;
