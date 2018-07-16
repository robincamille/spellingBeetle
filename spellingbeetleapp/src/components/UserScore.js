import React, { Component } from 'react';

class UserScore extends Component {
  render() {
    return (
      <div className="component" id="userscorecomponent">
        <p className="componentname">UserScore</p>
      	<p id="score">Score: XX</p>
      	<p id="wordcount">Words: XX</p>
      </div>
    );
  }
}

export default UserScore;
