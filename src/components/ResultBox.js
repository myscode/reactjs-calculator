import React, { Component } from 'react';

class ResultBox extends Component {
  render() { 
    return (
        <p id="result-box">{this.props.value}</p>
    );
  }
}

export default ResultBox;