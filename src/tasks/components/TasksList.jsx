import React, { useState, useEffect } from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';
import {
  createTask,
  fetchTasksList,
  updateTask,
  deleteTask,
} from '../tasksGateway';

const TasksList = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    fetchTasksList().then(tasksList => {
      setTasks(tasksList);
    });
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const onCreate = text => {
    createTask({ text, done: false }).then(() => fetchTasks());
  };

  const onToggleStatusTask = id => {
    const { done, text } = tasks.find(task => task.id === id);

    updateTask(id, { text, done: !done }).then(() => fetchTasks());
  };

  const onDeleteTask = id => {
    deleteTask(id).then(() => fetchTasks());
  };

  return (
    <main className="todo-list">
      <CreateTaskInput onCreate={onCreate} />
      <ul className="list">
        {[...tasks]
          .sort((a, b) => a.done - b.done)
          .map(task => (
            <Task
              key={task.id}
              {...task}
              onChange={onToggleStatusTask}
              onDelete={onDeleteTask}
            />
          ))}
      </ul>
    </main>
  );
};

export default TasksList;
