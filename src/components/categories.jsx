import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from '@reach/router';

import Category from './category.jsx';
import { categoriesLoadedSelector, categoryIdsSelector } from '../categories';

function Categories() {
  const categoriesAreLoaded = useSelector(categoriesLoadedSelector);
  const categoryIds = useSelector(categoryIdsSelector);

  return (
    <>
      <h1>Tasks</h1>

      <ul>
        {
          categoryIds.map(id => (
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
