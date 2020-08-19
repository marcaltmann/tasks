import React, { useState, useEffect } from 'react';
import Category from './category.jsx';

function Categories() {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    fetch('/api/categories')
      .then(response => response.json())
      .then(data => setCategories(data.categories));
  }, []);

  if (categories === null) {
    return (
      <div>
        <h3>Loading…</h3>
      </div>
    );
  }

  return (
    <>
      <h1>Tasks</h1>
      <ul>
        {
          categories.map(cat => (
            <Category key={cat.id} title={cat.name} tasks={cat.tasks} />
          ))
        }
      </ul>
    </>
  );
}

export default Categories;
