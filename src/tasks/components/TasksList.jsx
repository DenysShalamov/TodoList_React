import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Task from './Task';
import * as tasksActions from '../tasks.actions';
import { isFetchingSelector, sortedTaskSelector } from '../tasks.selectors';
import CreateTaskInput from './CreateTaskInput';
import Spinner from './Spinner';

class TasksList extends React.Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.props.getTasksList();
  }

  render() {
    return (
      <main className="todo-list">
        <CreateTaskInput onCreate={this.props.createTask} />
        <ul className="list">
          {this.props.isFetching && <Spinner />}
          {this.props.tasks.map(task => (
            <Task
              key={task.id}
              {...task}
              onDelete={this.props.deleteTask}
              onChange={this.props.updateTask}
            />
          ))}
        </ul>
      </main>
    );
  }
}

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
