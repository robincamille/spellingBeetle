import React, { Component } from 'react';

class Answers extends Component {

  constructor() {
    super();
    this.state = { 
      showHide: "hidden"
    }
  }

  toggler() {
    //https://stackoverflow.com/questions/36403101/toggle-class-in-react/36404061
    let css = (this.state.showHide === "hidden") ? "show" : "hidden";
    this.setState({
      showHide: css
    });
  }

  render() {
    return (
      <div className="component" id="answerscomponent" >
        <p className="componentname">Answers</p>
        
        <button onClick={() => this.toggler() }>Display answers</button>
        <div className={this.state.showHide}>
        <h3>Pangrams</h3>
        <ul id="pangramslist">{this.props.validPangrams.map(function(item,i){return <li key={i}>{item}</li>})}</ul>
        <h3>All answers</h3>
        <ul id="answerslist">{this.props.validAnswers.map(function(item,i){return <li key={i}>{item}</li>})}</ul>
        </div>

      </div>
    );
  }
}

export default Answers;
