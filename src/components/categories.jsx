import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from '@reach/router';

import Category from './category.jsx';

function Categories() {
  const categoriesAreLoaded = useSelector(state => state.categories !== null);
  const categoryIds = useSelector(state => {
    if (!categoriesAreLoaded) {
      return [];
    }
    return state.categories.allIds;
  });

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
