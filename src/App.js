import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import { Cardlist } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component'
class App extends Component{
  constructor() {
    super();
    this.state = {
      monster: [],
      searchField:''
    }
  }
  onChangeHandler = e => this.setState({ searchField: e.target.value });
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(data=>data.json()).then(users=>this.setState({monster:users}))
  }
  render() {
    const { monster, searchField } = this.state;
    const filteredSearchField = monster.filter(items =>
      items.name.toLowerCase().includes(searchField.toLowerCase()));
    
    return (
      <div className="cardListContainer">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="type monsters' name"
          onChangeHandler={this.onChangeHandler}
        />
        <Cardlist monster={filteredSearchField} />
      </div>
    );
  }
}
export default App;
