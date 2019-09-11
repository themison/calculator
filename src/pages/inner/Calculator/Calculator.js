import React, { Component } from "react";
import Display from "../../../components/Display";
import Button from "../../../components/Button";

import "./styles.css";

import math from "mathjs";

export default class Calclulator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "",
      enteredValue: "",
      lastAct: "",
      lastSymbol: "",
      equalsEnable: true
    };
  }

  handleSymbol = e => {
    console.log(this);
    let target = e.target;

    if (this.state.lastSymbol === "=") {
      this.setState({
        answer: target.innerHTML,
        enteredValue: this.state.answer + target.innerHTML,
        lastSymbol: this.innerHTML,
        lastAct: "symbol"
      });
    } else if (this.state.lastAct==='symbol') {
      this.setState({
        answer: target.innerHTML,
        enteredValue: this.state.enteredValue.slice(0,-1)+target.innerHTML,
        lastSymbol: this.innerHTML,
        lastAct: "symbol"
      })

    } else {
      this.setState({
        answer: target.innerHTML,
        enteredValue: this.state.enteredValue + target.innerHTML,
        lastSymbol: this.innerHTML,
        lastAct: "symbol"
      });
    }
  };

  handleNumeral = e => {
    let target = e.target;
    console.log(this.state.answer.indexOf('.'));
    if(target.innerHTML==='0' && this.state.answer<=1 && this.state.answer==='0') {
      return;
    }
    else if(this.state.answer.indexOf('.')!==-1 && target.innerHTML==='.') {
      return
    }
  else if (this.state.lastSymbol === "=") {
      this.setState({
        answer: target.innerHTML,
        enteredValue: target.innerHTML,
        lastSymbol: this.innerHTML,
        lastAct: 'numeral',
      });
    } else {
      this.setState({
        answer: this.state.answer + target.innerHTML,
        enteredValue: this.state.enteredValue + target.innerHTML,
        lastSymbol: this.innerHTML,
        lastAct: 'numeral',
      });
    }
  };

  handleClear = e => {
    this.setState({
      answer: "",
      enteredValue: ""
    });
  };

  handeEquals = e => {
    this.setState({
      answer: math.eval(this.state.enteredValue),
      enteredValue:
        this.state.enteredValue + "=" + math.eval(this.state.enteredValue),
      lastSymbol: e.target.innerHTML,
      equalsEnable: false
    });
  };

  render() {
    return (
      <div id="calculator">
        <Display {...this.state} />
        <div id="buttons">
          <Button id="clear" onClick={this.handleClear}>
            AC
          </Button>
          <Button id="divide" class="symbol" onClick={this.handleSymbol}>
            /
          </Button>
          <Button id="multiply" class="symbol" onClick={this.handleSymbol}>
            *
          </Button>
          <Button id="subtract" class="symbol" onClick={this.handleSymbol}>
            -
          </Button>
          <Button id="add" class="symbol" onClick={this.handleSymbol}>
            +
          </Button>
          <Button id="seven" class="numeral" onClick={this.handleNumeral}>
            7
          </Button>
          <Button id="eight" class="numeral" onClick={this.handleNumeral}>
            8
          </Button>
          <Button id="nine" class="numeral" onClick={this.handleNumeral}>
            9
          </Button>
          <Button id="four" class="numeral" onClick={this.handleNumeral}>
            4
          </Button>
          <Button id="five" class="numeral" onClick={this.handleNumeral}>
            5
          </Button>
          <Button id="six" class="numeral" onClick={this.handleNumeral}>
            6
          </Button>
          <Button id="one" class="numeral" onClick={this.handleNumeral}>
            1
          </Button>
          <Button id="two" class="numeral" onClick={this.handleNumeral}>
            2
          </Button>
          <Button id="three" class="numeral" onClick={this.handleNumeral}>
            3
          </Button>
          <Button id="zero" class="numeral" onClick={this.handleNumeral}>
            0
          </Button>
          <Button id="decimal" class="numeral" onClick={this.handleNumeral}>
            .
          </Button>
          <Button
            id="equals"
            disabled={!this.state.equalsEnable}
            onClick={this.handeEquals}
          >
            =
          </Button>
        </div>
      </div>
    );
  }
}
