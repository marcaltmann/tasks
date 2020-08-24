import React from 'react';
import { render } from 'react-dom';
import { Router, Redirect } from '@reach/router';
import { Provider } from 'react-redux';

import initializeStore from './initialize_store.js';
import store from './store.js';
import Categories from './components/categories.jsx';
import ProjectsPage from './components/projects_page.jsx';

import 'spectre.css';
import './style.scss';

function Application() {
  return (
    <Provider store={store}>
      <Router>
        <Categories path="/tasks" />
        <ProjectsPage path="/projects" />
        <Redirect from="/" to="/tasks" noThrow />
      </Router>
    </Provider>
  );
}

initializeStore(store);

const domContainer = document.querySelector('#app_container');
render(<Application/>, domContainer);
