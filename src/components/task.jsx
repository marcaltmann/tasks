import React from 'react';
import classNames from 'classnames';

function Task({ name, className }) {
  return (
    <li className={classNames('card', className)}>
      <div className="card-body">
        { name }
      </div>
    </li>
  );
}

export default Task;
