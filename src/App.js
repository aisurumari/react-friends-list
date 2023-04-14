import { Component, useState, useEffect } from "react";
import "./App.css";

import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setCats(users));
  }, []);

  useEffect(() => {
    const newFilteredCats = cats.filter((cat) => {
      return cat.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredCats(newFilteredCats);
  }, [cats, searchField]);

  const onSearch = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">CatFriends</h1>
      <SearchBox
        className="search-box"
        placeholder="search cats"
        onChangeHandler={onSearch}
      />
      <CardList cats={filteredCats} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       cats: [],
//       searchString: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { cats: users };
//         })
//       );
//   }

//   onSearch = (event) => {
//     const searchString = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return { searchString };
//     });
//   };

//   render() {
//     const { cats, searchString } = this.state;
//     const { onSearch } = this;

//     const filteredCats = cats.filter((cat) => {
//       return cat.name.toLocaleLowerCase().includes(searchString);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">CatFriends</h1>
//         <SearchBox
//           className="search-box"
//           placeholder="search cats"
//           onChangeHandler={onSearch}
//         />
//         <CardList cats={filteredCats} />
//       </div>
//     );
//   }
// }

export default App;
