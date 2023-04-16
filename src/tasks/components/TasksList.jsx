import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Task from './Task';
import * as tasksActions from '../tasks.actions';
import { taskListSelector } from '../tasks.selectors';
import CreateTaskInput from './CreateTaskInput';
import { createTask, updateTask, deleteTask } from '../tasksGateway';

const TasksList = ({ fetchTasksList, tasks }) => {
  useEffect(() => {
    fetchTasksList();
  }, []);

  const onCreate = text => {
    createTask({ text, done: false }).then(() => fetchTasksList());
  };

  const onToggleStatusTask = id => {
    const { done, text } = tasks.find(task => task.id === id);
    updateTask(id, { text, done: !done }).then(() => fetchTasksList());
  };

  const onDeleteTask = id => {
    deleteTask(id).then(() => fetchTasksList());
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

TasksList.propTypes = {
  fetchTasksList: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape()),
};

const mapState = state => {
  return {
    tasks: taskListSelector(state),
  };
};

const mapDispatch = dispatch => ({
  fetchTasksList: () => dispatch(tasksActions.getTasksData()),
});

export default connect(mapState, mapDispatch)(TasksList);
