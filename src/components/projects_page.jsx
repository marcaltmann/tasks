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

  function handleTitleChange(projectId, title) {
    let project = projects.find(proj => proj.id === projectId);
    let index = projects.indexOf(project);
    let newProject = {
      ...project,
      name: title,
    };

    let newProjects = projects.slice(0, index)
      .concat(newProject)
      .concat(projects.slice(index + 1));

    setProjects(newProjects);
  }

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
            <ProjectCard key={proj.id}
              id={proj.id}
              title={proj.name}
              task={proj.nextTask.name}
              handleTitleChange={handleTitleChange} />
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
