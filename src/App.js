
import './App.css';
import React, { Component } from 'react'
import { Cardlist } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component'

import barack_obama from './presidents/barack_obama.jpg'
import bill_clinton from './presidents/bill_clinton.jpg'
import donald_Trump from './presidents/donald_Trump.jpg'
import eisenhower from './presidents/eisenhower.jpg'
import ford from './presidents/ford.jpg'
import froosevelt from './presidents/roosevelt.jpg'
import george_h_w_bush from './presidents/george_h_w_bush.jpg'
import georgewbush from './presidents/georgewbush.jpg'
import harrytruman from './presidents/harrytruman.jpg'
import herbert_hoover from './presidents/herbert_hoover.jpg'
import jimmy_carter from './presidents/jimmy_carter.jpg'
import Joe_Biden from './presidents/Joe_Biden.jpg'
import johnson from './presidents/Johnson.jpg'
import kennedy from './presidents/Kennedy.jpeg'
import Reagan from './presidents/Reagan.jpg'
import richardnixon from './presidents/richardnixon.jpg'

class App extends Component {
  constructor() {
    super();
    this.state = {
      president: [
        {
          "id": 1,
          "name": "Joe Bidden",
          "saying": ["Fighting corruption is not just good governance. It's self-defense. It's patriotism."],
          "presidency": "2021-",
          "img": Joe_Biden
        },
        {
          "id": 2,
          "name": "Donald Trump",
          "saying": ["I try to learn from the past,",
            "but I plan for the future by focusing exclusively on the present."],
          "presidency": "2017-2021",
          "img": donald_Trump
        },
        {
          "id": 3,
          "name": "Barack Obama",
          "saying": ["Change will not come if we wait for some other person or",
            "some other time. We are the ones we've been waiting for. We are the change that we seek."],
          "presidency": "2009-2017",
          "img": barack_obama
        },
        {
          "id": 4,
          "name": "George W. Bush",
          "saying": ["Freedom itself was attacked this morning by a faceless coward, and freedom will be defended."],
          "presidency": "2001-2009",
          "img": georgewbush
        },
        {
          "id": 5,
          "name": "Bill Clinton ",
          "saying": ["We all do better when we work together.",
            "Our differences do matter, but our common humanity matters more."],
          "presidency": "1993-2001",
          "img": bill_clinton
        },
        {
          "id": 6,
          "name": "George H. W. Bush",
          "saying": ["No problem of human making is too great to be overcome by",
            "human ingenuity, human energy, and the untiring hope of the human spirit."],
          "presidency": "1989-1993",
          "img": george_h_w_bush
        },
        {
          "id": 7,
          "name": "Ronald Reagan",
          "saying": ["Government's first duty is to protect the people, not run their lives."],
          "presidency": "1981-1989",
          "img": Reagan
        },
        
        {
          "id": 8,
          "name": "James Earl Carter",
          "saying": ["We should live our lives as though Christ was coming this afternoon."],
          "presidency": "1977-1981",
          "img": jimmy_carter
        },
        
        {
          "id": 9,
          "name": "Gerald Rudolph Ford",
          "saying": ["A government big enough to give you everything", 
          "you want is a government big enough to take from you everything you have."],
          "presidency": "1974-1977",
          "img": ford
        },
        
        {
          "id": 10,
          "name": "Richard Milhous Nixon",
          "saying": ["If you take no risks, you will suffer no defeats.", 
          "But if you take no risks, you win no victories."],
          "presidency": "1969-1974",
          "img": richardnixon
        },
        
        {
          "id": 11,
          "name": "Lyndon Johnson",
          "saying": ["Peace is a journey of a thousand miles and it must be taken one step at a time."],
          "presidency": "1963-1969",
          "img": johnson
        },
        {
          "id": 12,
          "name": "John Kennedy",
          "saying": ["Victory has a thousand fathers, but defeat is an orphan."],
          "presidency": "1961-1963",
          "img": kennedy
        },
        {
          "id": 13,
          "name": "Dwight Eisenhower",
          "saying": ["A people that values its privileges above its principles soon loses both."],
          "presidency": "1953-1961",
          "img": eisenhower
        },
        
        {
          "id": 14,
          "name": "Harry Truman",
          "saying": ["America was not built on fear. America was built on courage,",
           "on imagination and an unbeatable determination to do the job at hand."],
          "presidency": "1945-1953",
          "img": harrytruman
        },
        {
          "id": 15,
          "name": "Franklin Roosevelt",
          "saying": ["Nobody cares how much you know, until they know how much you care."],
          "presidency": "1933-1945",
          "img": froosevelt
        },

        {
          "id": 16,
          "name": "Herbert Hoover",
          "saying": ["Freedom is the open window through which pours the",
           "sunlight of the human spirit and human dignity."],
          "presidency": "1929-1933",
          "img": herbert_hoover
        }   
      ],
      searchField: ''
    }
  }
  onChangeHandler = e => this.setState({ searchField: e.target.value });
  
  render() {
    const { president, searchField } = this.state;
    const filteredSearchField = president.filter(items =>
      items.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="cardListContainer">
        <h1>Presidents Of U.S Rolodex</h1>
        <SearchBox
          placeholder="type presidents' name"
          onChangeHandler={this.onChangeHandler}
        />
        <Cardlist filteredPresident={filteredSearchField} />
      </div>
    );
  }
}
export default App;
