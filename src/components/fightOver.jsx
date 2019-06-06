import React from "react";

const FightOver = ({ players }) => {
  let vainqueur;
  let avatar;
  if (players[0].points > 0 && players[1].points <= 0) {
    vainqueur = players[0].name;
    avatar = players[0].avatarSrc;
  } else if (players[1].points > 0 && players[0].points <= 0) {
    vainqueur = players[1].name;
    avatar = players[1].avatarSrc;
  } else vainqueur = null;
  return (
    <div
      className="container"
      style={{
        backgroundColor: "white",
        padding: 30,
        marginTop: 30,
        borderRadius: 25
      }}
    >
      <div className="header">
        <h1 className="display-4">Le combat est fini !!!</h1>
      </div>
      {!vainqueur ? (
        <p>
          Pas de vainqueur, les deux joueurs sont morts suite à leur derniere
          attaque ...
        </p>
      ) : (
        <React.Fragment>
          <p>{vainqueur} a gagné le combat</p>
          <p>
            Bravo !<img alt="vainqueur" src={avatar} />
            <img alt="coupe" src="armes/cup.png" />
          </p>
        </React.Fragment>
      )}
      <div className="row">
        <div className="col-lg-12">
          <button
            onClick={() => window.location.reload()}
            className="btn btn-success btn-lg float-right"
          >
            Rejouer
          </button>
        </div>
      </div>
    </div>
  );
};

export default FightOver;
