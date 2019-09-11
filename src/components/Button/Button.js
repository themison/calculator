import React, { Component } from 'react'

import './styles.css'


export default class Button extends Component {
  render() {
    return (
      <div id={this.props.id} className={'button '+this.props.class} disabled={this.props.disabled} onClick={(e)=>this.props.onClick(e)}>
        {this.props.children}
      </div>
    )
  }
}