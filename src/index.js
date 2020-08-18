import React from 'react';
import ReactDOM from 'react-dom';
import Tasks from './components/tasks.jsx';

function Application() {
  return (
    <div className="application">
      <Tasks/>
    </div>
  );
}

const domContainer = document.querySelector('#app_container');
ReactDOM.render(<Application/>, domContainer);
