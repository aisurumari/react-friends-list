import { Component } from "react";

class CardList extends Component {
    render() { 
        return ( 
            <div>
{this.props.list.map((friend) => {
                return (
                  <div key={friend.id}>
                    <h3>{friend.name}</h3>
                  </div>
                );
              })}
            </div>
            
         );
    }
}
 
export default CardList;