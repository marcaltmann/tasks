import React, { useState, useEffect } from 'react';

function Tasks() {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    fetch('/api/tasks')
      .then(response => response.json())
      .then(data => setTasks(data.tasks));
  }, []);

  if (tasks === null) {
    return (
      <div>
        <h3>Loading…</h3>
      </div>
    );
  }

  return (
    <div>
      <h3>Tasks</h3>
      <ul>
        {
          tasks.map(task => (
            <li key={task.id}>
              {task.name}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Tasks;
