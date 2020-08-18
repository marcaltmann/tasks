import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const e = React.createElement;

class HelloWorld extends Component {
  render() {
    return e(
      'h1',
      null,
      'Hello world!'
    );
  }
}

const domContainer = document.querySelector('#app_container');
ReactDOM.render(e(HelloWorld), domContainer);
