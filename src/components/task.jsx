import React from 'react';
import classNames from 'classnames';

function Task({ name, className }) {
  return (
    <li className={classNames(className)}>
      { name }
    </li>
  );
}

export default Task;
