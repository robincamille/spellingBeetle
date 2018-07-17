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
        <h3>Your pangrams</h3>
        <ul>{this.props.userPangrams.map(function(item,i){return <li key={i}>{item} <small>{item.length} + 10</small></li>})}</ul>
		<h3>Your answers</h3>
      	<ul>{this.props.userAnswers.map(function(item,i){return <li key={i}>{item}  <small>{item.length}</small></li>})}</ul>
      	
		</div>
    );
  }
}

export default Words;
