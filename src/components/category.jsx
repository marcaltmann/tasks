import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

function Category(props) {
  const category = useSelector(state => state.categories.byId[props.id]);

  return (
    <li className={classNames('card', props.className)}>
      <header className="card-header">
        <h4 className="card-title">
          {category.name}
        </h4>
      </header>
      <div className="card-body">
        <ul>
        </ul>
      </div>
    </li>
  );
}

export default Category;
