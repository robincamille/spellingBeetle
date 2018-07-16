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

  shuffleLetters() {
    let theLetters = this.state.validLetters;
    for (let i = theLetters.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let x = theLetters[i];
        theLetters[i] = theLetters[j];
        theLetters[j] = x;
    };
    this.setState({
        validLetters: theLetters
      })
  }

  newSet() {
    let topNum = words5short.wordSets.length - 1;
    let newNum = Math.floor(Math.random() * (topNum + 1));

    this.setState({
      validLetters: words5short.wordSets[newNum].validLetters,
      pangrams: words5short.wordSets[newNum].pangram,
      answers: words5short.wordSets[newNum].answers      })
  }

  render() {
    console.log("React connected!");
    // console.log(this.state.validLetters);
    // console.log(this.state.pangrams);
    // console.log(this.state.answers);
    return (
      <div className="App">
        <Header/>
        <UserScore/>
        <Letters
          shuffleTheLetters={this.shuffleLetters.bind(this)}
          validLetters={this.state.validLetters}
          newSet={this.newSet.bind(this)}
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
