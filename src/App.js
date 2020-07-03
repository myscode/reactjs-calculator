import React, { Component } from 'react';
import {evaluate} from 'mathjs';
import './App.css';
import Button from './components/Button';
import ResultBox from './components/ResultBox'

class App extends Component {
  constructor(){
    super();

    this.state = {
        result: 0,
        expression: ''
    }
  }

  clickDown = (name) => {

    switch(name) {
      case "C":
        this.reset();
        break;
      case "%":
        this.addToExpression(name);
        this.calc();
        break;
      case "=":
        this.calc();
        break;
      default:
        this.addToExpression(name);
        break;
    }
  }

  addToExpression = (name) => {

    this.setState({ 
            result: 0,
            expression: this.state.expression + name
          });
  }

  calc = () => {

    console.log('calc the expression');
    
    if (this.state.expression === '') {
      console.log('expression is empty');
      return false;
    }

    this.setState({ 
            result: evaluate(this.state.expression),
            expression: ''
          });
  }

  reset = () => {

    console.log('reset the expression');
    
    this.setState({ 
            result: 0,
            expression: ''
          });
  }

  render() {
    return (
      <div className="container" id="container">
        <div className="result">
          <ResultBox value={this.state.expression || this.state.result} />
        </div>
        <div className="buttons">
          <Button parentClickDown={this.clickDown} name="C" className="button num-button action-btn" />
          <Button parentClickDown={this.clickDown} name="(" className="button num-button" />
          <Button parentClickDown={this.clickDown} name=")" className="button num-button" />
          <Button parentClickDown={this.clickDown} name="%" className="button num-button action-btn" />
          <Button parentClickDown={this.clickDown} name="7" className="button num-button" />
          <Button parentClickDown={this.clickDown} name="8" className="button num-button" />
          <Button parentClickDown={this.clickDown} name="9" className="button num-button" />
          <Button parentClickDown={this.clickDown} name="/" className="button num-button calc-action-btn" />
          <Button parentClickDown={this.clickDown} name="4" className="button num-button" />
          <Button parentClickDown={this.clickDown} name="5" className="button num-button" />
          <Button parentClickDown={this.clickDown} name="6" className="button num-button" />
          <Button parentClickDown={this.clickDown} name="*" className="button num-button calc-action-btn" />
          <Button parentClickDown={this.clickDown} name="1" className="button num-button" />
          <Button parentClickDown={this.clickDown} name="2" className="button num-button" />
          <Button parentClickDown={this.clickDown} name="3" className="button num-button" />
          <Button parentClickDown={this.clickDown} name="-" className="button num-button calc-action-btn" />
          <Button parentClickDown={this.clickDown} name="0" className="button num-button" />
          <Button parentClickDown={this.clickDown} name="." className="button num-button" />
          <Button parentClickDown={this.clickDown} name="=" className="button calc-action-btn" />
          <Button parentClickDown={this.clickDown} name="+" className="button num-button calc-action-btn" />
        </div>
      </div>
    );
  }
}

export default App;
