import React, { useState } from 'react';

const MODE_READ = 0,
      MODE_WRITE = 1;

const ProjectCard = ({ id, title, task, handleTitleChange }) => {
  let [mode, setMode] = useState(MODE_READ);

  return (
    <li className="card">
      <header className="card-header">
        {
          mode === MODE_READ ?
            (
              <h4 className="card-title" onClick={() => setMode(MODE_WRITE)}>
                {title}
              </h4>
            ) :
            (
              <input value={title}
                onBlur={() => setMode(MODE_READ)}
                onChange={e => handleTitleChange(id, e.target.value) }
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    setMode(MODE_READ);
                  }
                }} />
            )
        }
      </header>
      <div className="card-body">
        {task}
      </div>
    </li>
  );
};

export default ProjectCard;
