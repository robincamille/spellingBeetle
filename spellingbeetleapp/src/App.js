import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import UserScore from './components/UserScore';
import Letters from './components/Letters';
import Words from './components/Words';
import Answers from './components/Answers';

import words5short from './data/jumble-words_nltk_5_short.json';

let randNum = Math.floor(Math.random() * (words5short.wordSets.length - 1));

class App extends Component {

  constructor() {
    super();
    this.state = {
      validLetters: words5short.wordSets[randNum].validLetters,
      validPangrams: words5short.wordSets[randNum].validPangram,
      validAnswers: words5short.wordSets[randNum].validAnswers,
      validScore: 0,
      
      userGuess: "",
      userPangrams: [],
      userAnswers: [],
      userScore: 0,

      // AJAX call variables
      // error: null,
      // isLoaded: false,
      // items: []
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

  getValidScores(answers,pangrams) {
    // biggest possible score
    let score = 0;

    answers.forEach(function(word) {
      score = score + word.length;
    })
    pangrams.forEach(function(word) {
      score = score + 10 + word.length;
    })
    return score;
  }

  scoreAnswers() {
    //let score = this.state.userScore;

    let score = 0;

    this.state.userAnswers.forEach(function(word) {
      score = score + word.length;
      console.log('+ ' + word.length);
    })
    this.state.userPangrams.forEach(function(word) {
      score = score + 10 + word.length;
      console.log('+ 10 + ' + word.length);
    })
    this.setState({
        userScore: score
      })
  }

  evaluateWord(word) {
    // let word = this.state.userGuess;
    //let word = event.target.value;
    console.log(word + ' submitted');
    //console.log(this.state.validAnswers);

    let currentList = this.state.userAnswers;
    let currentPangram = this.state.userPangrams;

    if (this.state.userAnswers.includes(word)) {
      console.log("word already guessed")
      } else if (this.state.validPangrams.includes(word)) {
        console.log("pangram!");
        currentPangram.push(word);
        currentPangram.sort();
        this.setState({
          userPangrams: currentPangram,
        });
        this.scoreAnswers();
      } else if (this.state.validAnswers.includes(word)) {
        console.log("word is accepted");
        currentList.push(word);
        currentList.sort();
        this.setState({
          userAnswers: currentList,
        });
        this.scoreAnswers();
      } else {
        console.log("word is rejected");
        this.setState({
          userPangrams: currentPangram,
        });


      }
  }

  newSet() {
    let topNum = words5short.wordSets.length - 1;
    let newNum = Math.floor(Math.random() * (topNum + 1));

    this.setState({
      validLetters: words5short.wordSets[newNum].validLetters,
      validPangrams: words5short.wordSets[newNum].validPangram,
      validAnswers: words5short.wordSets[newNum].validAnswers,
      userAnswers: [],
      userPangrams: [],
      userScore: 0,
    })
  }

  render() {
    // console.log("React connected!");
    // console.log(this.state.validLetters);
    // console.log(this.state.validPangrams);
    // console.log(this.state.validAnswers);
    return (
      <div className="App">
        <Header/>
        <UserScore
          userScore={this.state.userScore}
          userWordCount={this.state.userAnswers.length + this.state.userPangrams.length}
          validAnswers={this.state.validAnswers}
          validPangrams={this.state.validPangrams}
          validWordCount={this.state.validAnswers.length + this.state.validPangrams.length}
          getValidScores={this.getValidScores.bind(this)}
        />
        <Letters
          shuffleTheLetters={this.shuffleLetters.bind(this)}
          validLetters={this.state.validLetters}
          newSet={this.newSet.bind(this)}
        />
        <Words
          validPangrams={this.state.validPangrams}
          validAnswers={this.state.validAnswers}
          userAnswers={this.state.userAnswers}
          userPangrams={this.state.userPangrams}
          updateScore={this.scoreAnswers.bind(this)}
          evaluateWord={this.evaluateWord.bind(this)}
        />
        {/*
        <Answers
          validPangrams={this.state.validPangrams}
          validAnswers={this.state.validAnswers}
         />
       */}
      </div>
    );
  }
}

export default App;
