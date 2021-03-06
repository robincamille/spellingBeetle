import React, { Component } from 'react';

// I belong in Words.js

class Input extends Component {

  constructor() {
  	super();
  	this.state = {
  		guess: '',
  	};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({
    	guess: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.evaluateWord(this.state.guess);
    this.setState({
    	guess: ''
    });
  }

  render() {
    return (
      <div className="component" id="inputcomponent">
        <p className="componentname">Input</p>

      	<form onSubmit={this.handleSubmit} className={this.props.grayForm}>
        <label>
          Guess:
        </label>
          <input 
          	type="text" 
          	value={this.state.guess}  
          	onChange={this.handleChange}
			/> &nbsp;
        <input type="submit" value="Submit" id="submitbutton" />
      </form>


      </div>
    );
  }
}

export default Input;
