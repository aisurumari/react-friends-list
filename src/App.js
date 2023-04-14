import { Component } from "react";
import "./App.css";

import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      cats: [],
      searchString: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { cats: users };
        })
      );
  }

  onSearch = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchString };
    });
  };

  render() {
    const { cats, searchString } = this.state;
    const { onSearch } = this;

    const filteredcats = cats.filter((cat) => {
      return cat.name.toLocaleLowerCase().includes(searchString);
    });

    return (
      <div className="App">
        <SearchBox
          className="search-box"
          placeholder="search cats"
          onChangeHandler={onSearch}
        />
        <CardList cats={filteredcats} />
      </div>
    );
  }
}

export default App;
