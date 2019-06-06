import React, { Component } from "react";
import DetailsPersos from "./detailsPersos";
import StartFightModal from "./startFightModal";
import Plateau from "./plateau";
import Actions from "./actions";
import FightOver from "./fightOver";
import _ from "lodash";

class Jeu extends Component {
  state = {
    players: [],
    bricks: [],
    playerInGame: 0,
    showStart: false,
    fight: false,
    tour: 0
  };
  weaponsList = [
    {
      src: "http://localhost:3000/armes/shuriken.png",
      damage: 10,
      name: "shuriken"
    },
    {
      src: "http://localhost:3000/armes/sword.png",
      damage: 15,
      name: "épée"
    },
    {
      src: "http://localhost:3000/armes/nunchaku.png",
      damage: 15,
      name: "nunchaku"
    },
    {
      src: "http://localhost:3000/armes/arrow.png",
      damage: 20,
      name: "arc"
    },
    { src: "http://localhost:3000/armes/bomb.png", damage: 25, name: "bombe" }
  ];
  async componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
    const { users } = this.props;
    const weaponsList = this.weaponsList;
    const players = [];
    users.forEach(user => {
      const player = {
        name: user.name,
        avatarSrc: user.avatarSrc,
        points: 100,
        move: 3,
        position: 0,
        action: null,
        weapon: { type: "weapon", ...weaponsList[0] }
      };
      players.push(player);
    });
    const bricks = await this.brickLoop();
    const obstacles = this.arrayOfItems(bricks, 10);
    obstacles.forEach(obstacle => (bricks[obstacle].content.type = "obstacle"));
    const playersBricks = this.arrayOfItems(bricks, 2);
    playersBricks.forEach((brick, index) => {
      bricks[brick].content = {
        type: "player",
        name: players[index].name,
        src: players[index].avatarSrc
      };
      players[index].position = brick;
    });
    const weapons = this.arrayOfItems(bricks, 7);
    weapons.forEach(weapon => {
      const random = _.random(1, 4);
      bricks[weapon].content = weaponsList[random];
      bricks[weapon].content.type = "weapon";
    });
    this.setState({
      bricks,
      players
    });
  }
  brickLoop() {
    const bricks = [];
    for (let j = 0; j <= 99; j++) {
      let brick = { id: j, content: { type: "empty", name: "" } };
      bricks.push(brick);
    }
    return bricks;
  }
  mouvement(bricks, players, nextPosition, playerInGame) {
    const position = players[playerInGame].position;
    const content = bricks[position].content;
    if (bricks[position + nextPosition]) {
      if (bricks[position + nextPosition].content.type !== "obstacle") {
        if (bricks[position + nextPosition].content.type === "weapon") {
          const newWeapon = bricks[position + nextPosition].content;
          bricks[position].content = players[playerInGame].weapon;
          players[playerInGame].weapon = newWeapon;
        } else {
          bricks[position].content = { type: "empty" };
        }
        bricks[position + nextPosition].content = content;
        players[playerInGame].position = position + nextPosition;
        players[playerInGame].move--;
      }
    }
    if (players[playerInGame].move === 0) {
      players[playerInGame].move = 3;
      playerInGame = playerInGame === 0 ? 1 : 0;
    }
    this.startFight();
    this.setState({
      bricks,
      players,
      playerInGame
    });
  }
  startFight() {
    const { players } = this.state;
    if (
      players[0].position === players[1].position + 1 ||
      players[0].position === players[1].position - 1 ||
      players[0].position === players[1].position - 10 ||
      players[0].position === players[1].position + 10
    ) {
      players[0].move = 1;
      players[1].move = 1;
      this.handleShow();
      this.setState({ fight: true, players });
    }
  }
  handleKeyDown(e) {
    const { players, bricks, playerInGame, fight } = this.state;
    if (e.key === "ArrowRight" && !fight) {
      this.mouvement(bricks, players, 1, playerInGame);
    } else if (e.key === "ArrowLeft" && !fight) {
      this.mouvement(bricks, players, -1, playerInGame);
    } else if (e.key === "ArrowUp" && !fight) {
      this.mouvement(bricks, players, -10, playerInGame);
    } else if (e.key === "ArrowDown" && !fight) {
      this.mouvement(bricks, players, 10, playerInGame);
    }
  }
  arrayOfItems(bricks, length) {
    let items = [];
    while (items.length < length) {
      const random = _.random(0, 99);
      if (
        !items.includes(random) &&
        !items.includes(random - 1) &&
        !items.includes(random + 1) &&
        !items.includes(random - 10) &&
        !items.includes(random + 10) &&
        bricks[random].content.type === "empty"
      )
        items.push(random);
    }
    return items;
  }
  handlePass = () => {
    let { playerInGame, players } = this.state;
    players[playerInGame].move = 3;
    this.togglePlayer();
    this.setState({ players });
  };
  fight() {
    let { players, tour, fight } = this.state;
    // si impair, le tour est fini
    if (tour % 2 === 1) {
      if (players[0].action === "attaque" && players[1].action === "attaque") {
        players[0].points -= players[1].weapon.damage;
        players[1].points -= players[0].weapon.damage;
      } else if (
        players[0].action === "attaque" &&
        players[1].action === "défend"
      ) {
        players[0].points -= players[1].weapon.damage;
        players[1].points -= players[0].weapon.damage / 2;
      } else if (
        players[1].action === "attaque" &&
        players[0].action === "défend"
      ) {
        players[1].points -= players[0].weapon.damage;
        players[0].points -= players[1].weapon.damage / 2;
      }
    }

    if (players[0].points < 1 || players[1].points < 1) {
      fight = "over";
    }
    this.setState({ players, fight });
  }
  handleAction = action => {
    let { players, playerInGame, tour } = this.state;
    players[playerInGame].action = action;
    tour++;
    this.togglePlayer();
    this.setState({
      players,
      tour
    });
    this.fight();
  };
  togglePlayer() {
    let { playerInGame } = this.state;
    if (playerInGame === 0) {
      playerInGame = 1;
    } else {
      playerInGame = 0;
    }
    this.setState({
      playerInGame
    });
  }
  handleClose = () => {
    this.setState({ showStart: false });
  };
  handleShow = () => {
    this.setState({ showStart: true });
  };
  render() {
    const { players, bricks, playerInGame, fight, tour } = this.state;
    return (
      <div>
        {fight === "over" ? (
          <FightOver players={players} />
        ) : (
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginBottom: 30
              }}
            >
              {players.length > 0 && (
                <React.Fragment>
                  <DetailsPersos
                    players={players}
                    player={players[0]}
                    competitor={players[1]}
                    fight={fight}
                    tour={tour}
                    playerInGame={playerInGame}
                  />
                  <DetailsPersos
                    players={players}
                    player={players[1]}
                    competitor={players[0]}
                    fight={fight}
                    tour={tour}
                    playerInGame={playerInGame}
                  />
                </React.Fragment>
              )}
            </div>
            <Actions
              onPass={this.handlePass}
              fight={fight}
              onAction={this.handleAction}
            />
            {players.length > 0 && (
              <Plateau
                players={players}
                bricks={bricks}
                playerInGame={playerInGame}
              />
            )}
            {players.length > 0 && (
              <StartFightModal
                showStart={this.state.showStart}
                onHide={this.handleClose}
                player={players[playerInGame].name}
              />
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Jeu;
