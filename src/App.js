import React, { Component } from "react";
import CardList from "./CardList";
import SearchField from "./SearchField";
import { oPeople } from "./CardData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      oPeopleList: [],
      searchValue: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        let robo = oPeople;
        Array.prototype.push.apply(robo, users);
        this.setState({ oPeopleList: robo });
      });

    // this.setState({ oPeopleList: oPeople });
  }

  updatePeople = (filterText) => {
    this.setState({
      searchValue: filterText,
    });
  };

  filterPeople = () => {
    let oPeopleList_Arr;
    if (this.state.searchValue === "") {
      oPeopleList_Arr = this.state.oPeopleList;
    } else {
      oPeopleList_Arr = this.state.oPeopleList.filter((item) => {
        return item.name
          .toUpperCase()
          .includes(this.state.searchValue.toUpperCase());
      });
    }
    return oPeopleList_Arr;
  };

  render() {
    return (
      <div className="tc">
        <h1 className="header f1">RoboFriends</h1>
        <SearchField onUpdate={this.updatePeople} />
        <CardList myPeople={this.filterPeople()} />
      </div>
    );
  }
}

export default App;
