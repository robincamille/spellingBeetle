import React, { Component } from 'react';

import Input from './Input';

class Words extends Component {
  render() {
    return (
      <div className="component" id="wordscomponent">
        <Input 
		 	evaluateWord={this.props.evaluateWord.bind(this)}
        />



        <p className="componentname">Words</p>
      	<ul>{this.props.userAnswers.map(function(item,i){return <li key={i}>{item}</li>})}</ul>
      	
      	{/* following should be called upon input */}
      	<button onClick={() => {this.props.updateScore()}}>Update score</button>
      </div>
    );
  }
}

export default Words;
