import React, { Component } from "react";
import "./card-list.style.css";
import Card from "../card/card.component";
class CardList extends Component {
  render() {
    const { cats } = this.props;

    return (
      <div className="card-list">
        {cats?.map((cat) => {
          return <Card cat={cat} />;
        })}
      </div>
    );
  }
}

export default CardList;
