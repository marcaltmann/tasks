import React from 'react';

function ProjectCard({ title, tasks }) {
  return (
    <li className="card">
      <header className="card-header">
        <h4 className="card-title">
          {title}
        </h4>
      </header>
      <div className="card-body">
        <ul>
          {
            tasks.map(task => (
              <li key={task.id}>
                {task.name}
              </li>
            ))
          }
        </ul>
      </div>
    </li>
  );
}

export default ProjectCard;
