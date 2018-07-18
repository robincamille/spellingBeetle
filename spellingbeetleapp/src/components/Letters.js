import React, { Component } from 'react';

class Letters extends Component {

  render() {
    return (
      <div className="component" id="letterscomponent" >
        <p className="componentname">Letters</p>
        <div id="letterscontainer">{this.props.validLetters.map(function(item,i){return <div key={i} className="letter" id={"letter"+i}>{item}</div>})}</div>
        <p><small><em>Letters can be used more than once<br/>Singular nouns &amp; present tense verbs only</em></small></p>
        <div id="actions">
			<button id="shuffle" onClick={() => {this.props.shuffleTheLetters()}}>Shuffle</button>
			<br/>
			<button id="newset" onClick={() => {this.props.newSet()}}>New set</button>
        </div>
      </div>
    );
  }
}

export default Letters;
