import React from 'react';
import ReactDOM from 'react-dom';
import Tasks from './components/tasks.jsx';

import 'spectre.css';
import './style.scss';

function Application() {
  return (
    <div className="application container">
      <Tasks/>
    </div>
  );
}

const domContainer = document.querySelector('#app_container');
ReactDOM.render(<Application/>, domContainer);
