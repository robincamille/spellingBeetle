import React, { Component } from 'react';

class UserScore extends Component {
  render() {
    return (
      <div className="component" id="userscorecomponent">
        <p className="componentname">UserScore</p>
      	<p id="score">Score: {this.props.userScore}</p>
      	<p id="wordcount">Words: {this.props.wordCount}</p>
      </div>
    );
  }
}

export default UserScore;
