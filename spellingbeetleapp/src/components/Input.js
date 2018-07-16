import React, { Component } from 'react';

class Input extends Component {

  constructor() {
  	super();
  	this.state = {
  	}
  }

  render() {
    return (
      <div className="component" id="inputcomponent">
        <p className="componentname">Input</p>
      	<input></input>
      </div>
    );
  }
}

export default Input;
