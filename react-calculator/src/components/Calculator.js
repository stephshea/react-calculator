import React, { Component } from 'react';

const DisplayWindow = (props)  =>
  (<input type='text' value={props.expression} disabled={true} />)
  
class Calculator extends Component {
  constructor() {
    super(); 
    this.state={expression: '0'}
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onDeletePress = this.onDeletePress.bind(this);
    this.onEqualPress = this.onEqualPress.bind(this);
  }
}

  class Button extends Component {
    constructor() {
      super();
      
      this.onClick = this.onClick.bind(this);
    }
  
    onClick() {
      this.props.onKeyPress(this.props.text);
    }

    render() {
      return (<button onClick={this.onClick}>{this.props.text}</button>);
      }       
    }  

  onKeyPress(text) {
      this.setState((prev) => ({
        expression: prev.expression + text
      }));
    } 

  onDeletePress() {
      this.setState(
        (prev) => ({
        expression: prev.expression.length <= 1 ? '0' : prev.expression.slice(0, -1)
      })
     );
    }
  
  onEqualPress() {
    this.setState(
      (prev) => ({
        expression: eval(prev.expression).toString()
        
      })
    );
  }
  
  render() {
    let numberKeys =[];
    for(let i = 0; i < 10; i++) {
      numberKeys.push(<Button text={i} onKeyPress={this.onKeyPress} />);
    }
    return (
      <div>
        <DisplayWindow expression={this.state.expression} />
        { numberKeys }
        
        <Button text="+" onKeyPress={this.onKeyPress} />
        <Button text="-" onKeyPress={this.onKeyPress} />
        <Button text="*" onKeyPress={this.onKeyPress} />
        <Button text="/" onKeyPress={this.onKeyPress} />
        <Button onClick={this.onDeletePress}>del</Button>
        <Button onClick={this.onEqualPress}> = </Button>
      </div>
    );
  }  


export default Calculator;
