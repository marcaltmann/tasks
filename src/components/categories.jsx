import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from '@reach/router';

import Category from './category.jsx';

function categoriesSelector(state) {
  if (state.categories === null) {
    return [];
  }

  return state.categories.result;
}

function Categories() {
  const categories = useSelector(categoriesSelector);

  return (
    <>
      <h1>Tasks</h1>

      <ul>
        {
          categories.map(id => (
            <Category key={id} id={id} />
          ))
        }
      </ul>

      <p>
        <Link to="/projects">Projects</Link>
      </p>
    </>
  );
}

export default Categories;
