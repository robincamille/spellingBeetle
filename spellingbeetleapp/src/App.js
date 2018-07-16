import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import UserScore from './components/UserScore';
import Letters from './components/Letters';
import Words from './components/Words';

import words5short from './data/jumble-words_5_short.json';

class App extends Component {

  constructor() {
    super();
    this.state = {
      validLetters: words5short.wordSets[5].validLetters,
      pangrams: words5short.wordSets[5].pangram,
      answers: words5short.wordSets[5].answers
    }
  }

  render() {
    console.log("React connected!");
    console.log(this.state.validLetters);
    console.log(this.state.pangrams);
    console.log(this.state.answers);
    return (
      <div className="App">
        <Header/>
        <UserScore/>
        <Letters
          validLetters={this.state.validLetters}
        />
        <Words
          pangrams={this.state.pangrams}
          answers={this.state.answers}
        />
      </div>
    );
  }
}

export default App;
