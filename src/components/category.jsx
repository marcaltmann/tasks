import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

function Category(props) {

  function categoryTasksSelector(state) {
    const category = state.categories.byId[props.id];
    const tasks = category.tasks.map(taskId => state.tasks.byId[taskId]);
    return tasks;
  }

  const category = useSelector((state) => state.categories.byId[props.id]);
  const tasks = useSelector(categoryTasksSelector);

  return (
    <li className={classNames('card', props.className)}>
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
