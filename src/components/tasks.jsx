import React, { useState, useEffect } from 'react';
import Task from './task.jsx';

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
      <ul className="Tasklist">
        {
          tasks.map(task => (
            <Task key={task.id} name={task.name} className="Tasklist-item"/>
          ))
        }
      </ul>
    </div>
  );
}

export default Tasks;
