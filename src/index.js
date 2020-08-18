import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function HelloWorld() {
  return <h1>Hello world!</h1>;
}

const domContainer = document.querySelector('#app_container');
ReactDOM.render(<HelloWorld/>, domContainer);
