import React, { Component } from 'react';

import Input from './Input';

class Words extends Component {
  render() {
    return (
      <div className="component" id="wordscomponent">
        <Input/>
        <p>Words</p>
      </div>
    );
  }
}

export default Words;
