import React from 'react';
import ReactDOM from 'react-dom';
import Categories from './components/categories.jsx';

import 'spectre.css';
import './style.scss';

function Application() {
  return (
    <div className="application container">
      <Categories/>
    </div>
  );
}

const domContainer = document.querySelector('#app_container');
ReactDOM.render(<Application/>, domContainer);
