import React from 'react';
import { render } from 'react-dom';
import { Router, Redirect } from '@reach/router';
import Categories from './components/categories.jsx';
import ProjectsPage from './components/projects_page.jsx';

import 'spectre.css';
import './style.scss';

function Application() {
  return (
    <Router>
      <Categories path="/tasks" />
      <ProjectsPage path="/projects" />
      <Redirect from="/" to="/tasks" noThrow />
    </Router>
  );
}

const domContainer = document.querySelector('#app_container');
render(<Application/>, domContainer);
