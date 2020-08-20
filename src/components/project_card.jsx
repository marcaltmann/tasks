import React from 'react';

const ProjectCard = ({ title, task }) => (
  <li className="card">
    <header className="card-header">
      <h4 className="card-title">
        {title}
      </h4>
    </header>
    <div className="card-body">
      {task}
    </div>
  </li>
);

export default ProjectCard;
