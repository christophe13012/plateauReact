import React, { Component } from "react";

class Perso extends Component {
  selectedAvatarStyle(avatarSrc) {
    console.log(
      "https://christophe13012.github.io/plateauReact/" + avatarSrc,
      this.props.user.avatarSrc
    );

    return this.props.user.avatarSrc ===
      "https://christophe13012.github.io/plateauReact/" + avatarSrc
      ? styles.avatarSelected
      : styles.avatars;
  }
  errorManagmentFrench(user) {
    const { competitor } = this.props;
    if (user.error === '"name" length must be at least 3 characters long')
      return "Le nom doit être de 3 caractères minimum";
    if (
      user.error ===
      '"name" length must be less than or equal to 20 characters long'
    )
      return "Le nom doit être de 20 caractères maximum";
    if (user.error === '"name" is not allowed to be empty')
      return "Le nom ne doit pas être vide";
    if (competitor.ready && user.name === competitor.name)
      return "Ce nom n'est pas disponible";
    if (competitor.ready && user.avatarSrc === competitor.avatarSrc)
      return "Avatar non disponible";
    return user.error;
  }
  render() {
    const { onChange, onSubmit, onClick, user } = this.props;
    // traduction des erreurs en français
    const errorFr = this.errorManagmentFrench(user);
    const clic = !user.ready ? onClick : undefined;
    return (
      <form style={styles.perso} name={user.id} onSubmit={onSubmit}>
        <div className="form-group row">
          <label htmlFor="user" className="col-sm-4 col-form-label">
            Votre nom :
          </label>
          <div className="col-sm-8">
            <input
              disabled={user.ready ? true : false}
              value={user.name}
              onChange={onChange}
              type="text"
              className="form-control"
              id="user"
              name={user.id}
              placeholder=""
            />
            {errorFr && errorFr !== "init" && (
              <div
                style={{ fontSize: 14 }}
                className="alert alert-danger p-0 m-0"
              >
                {errorFr}
              </div>
            )}
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-4 col-form-label">Votre avatar :</label>
          <div className="col-sm-8">
            <img
              style={this.selectedAvatarStyle("avatars/001-girl.png")}
              src="./avatars/001-girl.png"
              alt="girl"
              onClick={clic}
              name={user.id}
            />
            <img
              style={this.selectedAvatarStyle("avatars/006-child-3.png")}
              src="avatars/006-child-3.png"
              alt="child3"
              onClick={clic}
              name={user.id}
            />
            <img
              style={this.selectedAvatarStyle("avatars/004-girl-1.png")}
              src="../avatars/004-girl-1.png"
              alt="girl1"
              onClick={clic}
              name={user.id}
            />
            <img
              style={this.selectedAvatarStyle("avatars/002-child.png")}
              src="avatars/002-child.png"
              alt="child2"
              onClick={clic}
              name={user.id}
            />
            <img
              style={this.selectedAvatarStyle("avatars/007-child-4.png")}
              src="avatars/007-child-4.png"
              alt="child4"
              onClick={clic}
              name={user.id}
            />
          </div>
        </div>
        {!user.ready ? (
          <button
            disabled={errorFr === "init" ? true : errorFr}
            type="submit"
            className="btn btn-primary btn-lg btn-block"
          >
            Prêt
          </button>
        ) : (
          <button className="btn btn-success btn-lg btn-block">
            Attente second joueur ...
          </button>
        )}
      </form>
    );
  }
}

const styles = {
  perso: {
    border: "3px solid black",
    borderRadius: 20,
    padding: 15,
    marginTop: 20
  },
  avatars: {
    height: 50,
    borderRadius: "50%",
    marginBottom: 5
  },
  avatarSelected: {
    height: 50,
    borderRadius: "50%",
    marginBottom: 5,
    border: "3px dashed black"
  }
};

export default Perso;
