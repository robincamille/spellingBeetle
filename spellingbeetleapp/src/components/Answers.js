import React, { Component } from 'react';

class Answers extends Component {

  

  render() {
    return (
      <div className="component" id="answerscomponent" >
        <p className="componentname">Answers</p>
        
        <button onClick={() => this.props.answerToggler() } title="Ends game">Display answers</button>
        <div className={this.props.answerShow}>
        <h3>Pangrams</h3>
        <ul id="pangramslist">{this.props.validPangrams.map(function(item,i){return <li key={i}>{item}</li>})}</ul>
        <h3>All answers</h3>
        <ul id="answerslist">{this.props.validAnswers.map(function(item,i){return <li key={i}>{item}</li>})}</ul>
        </div>

      </div>
    );
  }
}

export default Answers;
