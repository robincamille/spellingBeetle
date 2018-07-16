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
      validAnswers: words5short.wordSets[5].answers,
      userAnswers: ["rabbet", "rebate"],
      userScore: 0,
      userGuess: undefined
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

  scoreAnswers() {
    let score = this.state.userScore;
    this.state.userAnswers.forEach(function(word) {
      score = score + word.length;
      console.log(word.length);
    })
    this.setState({
        userScore: score
      })
  }

  // guessWord(word) {
  //    this.setState({
  //     userGuess: word
  //   })
  // }

  evaluateWord(word) {
    // let word = this.state.userGuess;
    let currentList = this.state.userAnswers;
    console.log(this.state.validAnswers);
    if (this.state.validAnswers.includes(word)) {
      console.log("word is accepted");
      currentList.push(word);
      this.setState({
        userAnswers: currentList
      })
    } else {
      console.log("word is rejected")
    }
  }

  newSet() {
    let topNum = words5short.wordSets.length - 1;
    let newNum = Math.floor(Math.random() * (topNum + 1));

    this.setState({
      validLetters: words5short.wordSets[newNum].validLetters,
      pangrams: words5short.wordSets[newNum].pangram,
      validAnswers: words5short.wordSets[newNum].answers      })
  }

  render() {
    console.log("React connected!");
    // console.log(this.state.validLetters);
    // console.log(this.state.pangrams);
    // console.log(this.state.answers);
    return (
      <div className="App">
        <Header/>
        <UserScore
          userScore={this.state.userScore}
          wordCount={this.state.userAnswers.length}
        />
        <Letters
          shuffleTheLetters={this.shuffleLetters.bind(this)}
          validLetters={this.state.validLetters}
          newSet={this.newSet.bind(this)}
        />
        <Words
          pangrams={this.state.pangrams}
          validAnswers={this.state.answers}
          userAnswers={this.state.userAnswers}
          updateScore={this.scoreAnswers.bind(this)}
          // guessWord={this.guessWord.bind(this)}
          evaluateWord={this.evaluateWord.bind(this)}
        />
      </div>
    );
  }
}

export default App;
