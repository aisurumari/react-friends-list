import React, { Component } from "react";
import "./card.style.css";

class Card extends Component {
  render() {
    const { id, name, email } = this.props.cat;
    return (
      <div key={id} className="card-container">
        <img alt={`${name}`} src={`https://robohash.org/${id}/?set=set4`} />
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
