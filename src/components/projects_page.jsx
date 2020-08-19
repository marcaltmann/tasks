import React from 'react';
import { Link } from '@reach/router';

function ProjectsPage() {
  return (
    <>
      <h1>
        Projects
      </h1>

      <p>
        <Link to="/tasks">Tasks</Link>
      </p>
    </>
  );
}

export default ProjectsPage;
