import React from "react";

const Plateau = ({ bricks, players, playerInGame }) => {
  return (
    <div style={styles.plateau}>
      {bricks.length > 0 &&
        bricks.map(brick => (
          <p
            key={brick.id}
            style={
              brick.content.type === "obstacle" ? styles.obstacle : styles.brick
            }
          >
            {brick.content.type !== "empty" &&
              brick.content.type !== "obstacle" && (
                <img
                  style={
                    brick.content.name === players[playerInGame].name
                      ? styles.playerinGame
                      : styles.image
                  }
                  src={brick.content.src}
                  alt="type"
                />
              )}
          </p>
        ))}
    </div>
  );
};

const styles = {
  plateau: {
    height: 600,
    width: 600,
    padding: 0,
    margin: "0 auto",
    backgroundColor: "green",
    fontSize: 0
  },
  brick: {
    display: "inline-block",
    width: 60,
    height: 60,
    margin: 0,
    padding: 0,
    backgroundColor: "white",
    border: "1px solid grey",
    verticalAlign: "top"
  },
  obstacle: {
    display: "inline-block",
    width: 60,
    height: 60,
    margin: 0,
    padding: 0,
    backgroundColor: "black",
    border: "1px solid grey"
  },
  image: {
    height: 50,
    borderRadius: "50%",
    marginTop: 3,
    marginLeft: 3
  },
  playerinGame: {
    height: 50,
    borderRadius: "50%",
    marginTop: 3,
    marginLeft: 3,
    backgroundColor: "blue"
  }
};

export default Plateau;
