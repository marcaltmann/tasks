import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import ProjectCard from './project_card.jsx';

function ProjectsPage() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    fetch('/api/projects')
      .then(response => response.json())
      .then(data => setProjects(data.projects));
  }, []);

  if (projects === null) {
    return (
      <div>
        <h3>Loading…</h3>
      </div>
    );
  }

  return (
    <>
      <h1>
        Projects
      </h1>

      <ul>
        {
          projects.map(proj => (
            <ProjectCard key={proj.id} title={proj.name} tasks={proj.tasks} />
          ))
        }
      </ul>

      <p>
        <Link to="/tasks">Tasks</Link>
      </p>
    </>
  );
}

export default ProjectsPage;
