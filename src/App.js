import { Component } from 'react';
import './App.css';

import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      friends: [],
      searchString: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => this.setState(() => {
      return {friends: users};
    }))
  }

  onSearch = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    

    this.setState(() => {
      return {searchString};
    })
  }
  
  render() {
    const { friends, searchString } = this.state;
    const { onSearch } = this;

    const filteredFriends = friends.filter((friend) => {
      return friend.name.toLocaleLowerCase().includes(searchString);
    });

    return (
      <div className="App">
        <SearchBox className = "search-box" placeholder = "search friends" onChangeHandler = {onSearch}/>
        <CardList list = {filteredFriends} />
      </div>
    );
  }
  
}

export default App;
