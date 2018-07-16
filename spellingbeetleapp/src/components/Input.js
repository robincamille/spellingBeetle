import React, { Component } from 'react';

// I belong in Words.js

class Input extends Component {

  render() {
    return (
      <div className="component" id="inputcomponent">
        <p className="componentname">Input</p>
      	<input></input>

      {/* following should happen when user inputs a word */}
      	<button onClick={() => {this.props.evaluateWord("brrr")}}>Evaluate "brrr"</button>
      
		

      </div>
    );
  }
}

export default Input;
