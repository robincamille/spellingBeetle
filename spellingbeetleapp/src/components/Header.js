import React, { Component } from 'react';

class Header extends Component {

  displayRules() {
  	// show/hide rules
  	console.log('Rules button clicked')
  }
  render() {
    return (
      <div className="component" id="headercomponent">
        <p className="componentname">Header</p>
      	<h1>Spelling Beetle</h1>
      	<div id="rules">
      		<button onClick={() => {this.displayRules()}}>Rules</button>
      		<ul>
      		<li>Create words from the given letters</li>
      		<li>Letters can be used more than once</li>
      		<li>Words must be at least 4 letters long</li>
      		<li>Words are scored by letter count: a 4-letter word scores 4 points, an 8-letter word scores 8 points, etc.</li>
      		<li>Pangrams (words that use all the given letters) are worth an extra 10 points on top of their word score.</li>
      		</ul>
      	</div>
      </div>
    );
  }
}

export default Header;
