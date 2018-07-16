import React, { Component } from 'react';

class Letters extends Component {
  render() {
    return (
      <div className="component" id="letterscomponent">
        <p>Letters</p>
        <ul>{this.props.validLetters.map(function(item,i){return <li key={i}>{item}</li>})}</ul>
        <div id="actions">
			<p>Shuffle</p>
			<p>New set</p>
        </div>
      </div>
    );
  }
}

export default Letters;
