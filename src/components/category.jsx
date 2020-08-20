import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

function Category({ id, className }) {
  function categorySelector(state) {
    return state.categories.entities.categories[id];
  }

  function categoryTasksSelector(state) {
    let category = state.categories.entities.categories[id];
    let tasks = category.tasks.map(
      taskId => state.categories.entities.tasks[taskId]
    );
    return tasks;
  }

  const category = useSelector(categorySelector);
  const tasks = useSelector(categoryTasksSelector);

  return (
    <li className={classNames('card', className)}>
      <header className="card-header">
        <h4 className="card-title">
          {category.name}
        </h4>
      </header>
      <div className="card-body">
        <ul>
          {
            tasks.map(task => (
              <li key={task.id}>{task.name}</li>
            ))
          }
        </ul>
      </div>
    </li>
  );
}

export default Category;
