import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import SelectionPersos from "./components/selectionPersos";
import Jeu from "./components/jeu";
import Joi from "@hapi/joi";

const schema = {
  id: Joi.required(),
  name: Joi.string()
    .min(3)
    .max(20)
    .required(),
  avatarSrc: Joi.string().allow(""),
  ready: Joi.required()
};

class App extends Component {
  state = {
    users: [
      {
        id: "user1",
        name: "",
        avatarSrc: "http://localhost:3000/avatars/001-girl.png",
        error: "init",
        ready: false
      },
      {
        id: "user2",
        name: "",
        avatarSrc: "http://localhost:3000/avatars/001-girl.png",
        error: "init",
        ready: false
      }
    ]
  };
  handleSubmit = e => {
    e.preventDefault();
    const userId = e.currentTarget.name;
    const index = userId === "user1" ? 0 : 1;
    let users = [...this.state.users];
    users[index].ready = true;
    this.setState({ users });
  };
  validateProperty = user => {
    delete user.error;
    const { error } = Joi.validate(user, schema, { abortEarly: false });
    return error ? error.details[0].message : error;
  };
  handleChange = e => {
    const userId = e.currentTarget.name;
    const index = userId === "user1" ? 0 : 1;
    let users = [...this.state.users];
    const name = e.currentTarget.value;
    users[index].name = name;
    const error = this.validateProperty(users[index]);
    users[index].error = error;
    this.setState({ users });
  };
  handleClick = e => {
    const userId = e.currentTarget.name;
    const avatarSrc = e.currentTarget.src;
    let users = [...this.state.users];
    users.map(user => {
      if (user.id === userId) return (user.avatarSrc = avatarSrc);
      return user;
    });
    this.setState({ users });
  };
  render() {
    const { users } = this.state;
    let ready = false;
    if (users[0].ready && users[1].ready) {
      ready = true;
    }
    return (
      <div className="App">
        <Header />
        {!ready && (
          <SelectionPersos
            users={users}
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            onClick={this.handleClick}
          />
        )}
        {ready && <Jeu users={users} />}
      </div>
    );
  }
}

export default App;
