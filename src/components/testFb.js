import firebase from "./firestore";
import React from "react";
class FireData extends React.Component {
  constructor() {
    super();
    this.state = {
      FirstName: "",
      LastName: "",
    };
  }
  updateInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
   addUser = (e) => {
    e.preventDefault();
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true,
    });
    const userRef = db.collection("games").add({
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
    });

    this.setState({
      fullname: "",
      email: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.addUser}>
        <input
          type="text"
          name="FirstName"
          placeholder="first name"
          value={this.state.FirstName}
          onChange={this.updateInput}
        />
        <input
          type="text"
          name="LastName"
          placeholder="Last name"
          value={this.state.LastName}
          onChange={this.updateInput}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default FireData;
