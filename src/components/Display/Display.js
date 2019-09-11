import React, { Component } from 'react'

import './styles.css'


export default class Display extends Component {
  render() {
    console.log(this.props);
    return (
      <div id='monitor'>
        <div id='enteredValue'>
        
          {this.props.enteredValue ? this.props.enteredValue : 0}
        </div>
        <div id='display'>
          {this.props.answer ? this.props.answer : 0}
        </div>
        </div> 
    )
  }
}