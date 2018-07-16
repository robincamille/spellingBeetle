import React, { Component } from 'react';

import Input from './Input';

class Words extends Component {
  render() {
    return (
      <div className="component" id="wordscomponent">
        <Input/>
        <p className="componentname">Words</p>
      	<ul>
      		<li>Word1</li>
      		<li>Word2</li>
      	</ul>
      </div>
    );
  }
}

export default Words;
