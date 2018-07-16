import React, { Component } from 'react';

class Letters extends Component {

  render() {
    return (
      <div className="component" id="letterscomponent" >
        <p className="componentname">Letters</p>
        <ul>{this.props.validLetters.map(function(item,i){return <li key={i}>{item}</li>})}</ul>
        <div id="actions">
			<button id="shuffle" onClick={() => {this.props.shuffleTheLetters()}}>Shuffle</button>
			<button id="newset" onClick={() => {this.props.newSet()}}>New set</button>
        </div>
      </div>
    );
  }
}

export default Letters;
