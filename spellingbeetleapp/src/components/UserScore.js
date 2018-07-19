import React, { Component } from 'react';

class UserScore extends Component {
  render() {
    return (
      <div className="component" id="userscorecomponent">
        <p className="componentname">UserScore</p>
      	<p id="score"><strong>Score: {this.props.userScore}</strong> (high score: {Math.round(this.props.getValidScores(this.props.validAnswers,this.props.validPangrams)/4)
      	//biggest score is just impossibly high
      	} points)</p>
      	<p id="wordcount"><strong>Words: {this.props.userWordCount}</strong> (out of a possible {this.props.validWordCount} words)</p>
      </div>
    );
  }
}

export default UserScore;
