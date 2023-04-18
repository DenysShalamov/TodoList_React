import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Task from './Task';
import * as tasksActions from '../tasks.actions';
import { isFetchingSelector, sortedTaskSelector } from '../tasks.selectors';
import CreateTaskInput from './CreateTaskInput';
import Spinner from './Spinner';

const TasksList = props => {
  const {
    tasks,
    createTask,
    deleteTask,
    updateTask,
    getTasksList,
    isFetching,
  } = props;

  useEffect(() => {
    getTasksList();
  }, []);

  return (
    <main className="todo-list">
      <CreateTaskInput onCreate={createTask} />
      <ul className="list">
        {isFetching && <Spinner />}
        {tasks.map(task => (
          <Task
            key={task.id}
            {...task}
            onDelete={deleteTask}
            onChange={updateTask}
          />
        ))}
      </ul>
    </main>
  );
};

const mapState = state => {
  return {
    tasks: sortedTaskSelector(state),
    isFetching: isFetchingSelector(state),
  };
};

const mapDispatch = {
  getTasksList: tasksActions.getTasksList,
  updateTask: tasksActions.updateTasksList,
  deleteTask: tasksActions.deleteTasksList,
  createTask: tasksActions.createTasksList,
};

TasksList.propTypes = {
  getTasksList: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape()),
  isFetching: PropTypes.bool,
};

TasksList.defaultProps = {
  isFetching: false,
};

export default connect(mapState, mapDispatch)(TasksList);
