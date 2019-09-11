import React, { Component } from 'react'

import Calculator from '../inner/Calculator/Calculator'


export default class App extends Component {
  componentWillMount() {
    var script = document.createElement("script");

    script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    return (
      <Calculator/>
    )
  }
}