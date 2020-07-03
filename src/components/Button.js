import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props){
    super(props);

    this.state = {
      isPressed: false
    }
  }
  
  clickDown = () => {
    console.log(this.props.name, 'is pressed');

    this.setState({ isPressed: true });
    setTimeout(() => {
      this.setState({ isPressed: false });
    }, 150);

    this.props.parentClickDown(this.props.name);
  }

  render() { 
    return (
        <div className={this.props.className + (this.state.isPressed ? ' pressed' : '')} 
              onClick={this.clickDown}>
              {this.props.name}
        </div>
    );
  }
}

export default Button;