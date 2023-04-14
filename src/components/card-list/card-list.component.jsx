import React, { Component } from "react";
import "./card-list.style.css";
class CardList extends Component {
  render() {
    const { cats } = this.props;

    return (
      <div className="card-list">
        {cats?.map((cat) => {
          const { name, email, id } = cat;
          return (
            <div key={id} className="card-container">
              <img
                alt={`${name}`}
                src={`https://robohash.org/${id}/?set=set4`}
              />
              <h3>{name}</h3>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
