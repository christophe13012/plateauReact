import React, { Component } from "react";

class DetailsPersos extends Component {
  result() {
    const { tour, player, competitor } = this.props;
    if (tour % 2 === 0) {
      if (player.action === "défend" && competitor.action === "défend") {
        return `${player.name} n'a pas perdu de points de vie`;
      }
      if (player.action === "défend" && competitor.action === "attaque") {
        return `${player.name} a perdu ${competitor.weapon.damage /
          2} points de vie`;
      }
      return `${player.name} a perdu ${competitor.weapon.damage} points de vie`;
    }
    return "...";
  }
  action() {
    const { playerInGame, players, player, tour } = this.props;
    if (players[playerInGame].name !== player.name || tour % 2 === 0)
      return `${player.name} ${player.action}`;
    return "Attente action";
  }
  render() {
    const { player, fight } = this.props;
    return (
      <div style={styles.perso}>
        <p>
          <img alt="avatar" src={player.avatarSrc} style={styles.avatar} />
          <span>{player.name}</span>
        </p>
        <p>
          Points de vie : <span>{player.points}</span>
        </p>
        {!fight && (
          <p>
            Mouvements restants : <span>{player.move}</span>
          </p>
        )}
        <p>
          Arme : <img alt="arme" src={player.weapon.src} />
          <span>
            {player.weapon.name} (Dégats : {player.weapon.damage})
          </span>
        </p>
        {fight && (
          <React.Fragment>
            {!player.action ? (
              <div>
                <p>Ici s'affichera l'action décidée par {player.name} </p>
                <p>Ici le resultat de cette action</p>
              </div>
            ) : (
              <div>
                {<p>{this.action()}</p>}
                <p>{this.result()}</p>
              </div>
            )}
          </React.Fragment>
        )}
      </div>
    );
  }
}

const styles = {
  perso: {
    border: "3px solid black",
    borderRadius: 20,
    padding: "25px 50px",
    marginTop: 20
  },
  avatar: {
    height: 50,
    borderRadius: "50%",
    marginBottom: 5
  }
};

export default DetailsPersos;
