import React from 'react';
import classNames from 'classnames';

function Category({ title, tasks, className }) {
  return (
    <li className={classNames('card', className)}>
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

export default Category;
