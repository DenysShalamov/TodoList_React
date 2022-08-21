import React from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';
import {
  createTask,
  fetchTasksList,
  updateTask,
  deleteTask,
} from './tasksGateway';

class TasksList extends React.Component {
  state = {
    tasks: [],
  };

  componentDidMount = () => {
    this.fetchTasks();
  };

  fetchTasks = () => {
    fetchTasksList().then(tasksList => {
      this.setState({
        tasks: tasksList,
      });
    });
  };

  onCreate = text => {
    createTask({ text, done: false }).then(() => this.fetchTasks());
  };

  onToggleStatusTask = id => {
    const { done, text } = this.state.tasks.find(task => task.id === id);

    updateTask(id, { text, done: !done }).then(() => this.fetchTasks());
  };

  onDeleteTask = id => {
    deleteTask(id).then(() => this.fetchTasks());
  };

  render() {
    return (
      <main className="todo-list">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {[...this.state.tasks]
            .sort((a, b) => a.done - b.done)
            .map(task => (
              <Task
                key={task.id}
                {...task}
                onChange={this.onToggleStatusTask}
                onDelete={this.onDeleteTask}
              />
            ))}
        </ul>
      </main>
    );
  }
}

export default TasksList;
