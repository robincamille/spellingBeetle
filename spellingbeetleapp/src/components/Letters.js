import React, { Component } from 'react';

class Letters extends Component {

  render() {
    return (
      <div className="component" id="letterscomponent" onLoad={() => {this.shuffleLetters()}}>
        <p className="componentname">Letters</p>
        <ul>{this.props.validLetters.map(function(item,i){return <li key={i}>{item}</li>})}</ul>
        <div id="actions">
			<p onClick={() => {this.props.shuffleTheLetters()}}>Shuffle</p>
			<p onClick={() => {this.props.newSet()}}>New set</p>
        </div>
      </div>
    );
  }
}

export default Letters;
