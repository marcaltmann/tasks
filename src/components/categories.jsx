import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from '@reach/router';

import Category from './category.jsx';

function Categories() {
  const categories = useSelector((state) => state.categories.byOrder);

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
