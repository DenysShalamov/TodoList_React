import React from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';

class TasksList extends React.Component {
  state = {
    tasks: [
      { text: 'Lear HTML / CSS', done: true, id: 1 },
      { text: 'Learn JavaScript', done: true, id: 2 },
      { text: 'Learn Dev Tools', done: true, id: 3 },
      { text: 'Learn React', done: false, id: 4 },
      { text: 'Learn Redux', done: false, id: 5 },
    ],
  };

  onCreate = text => {
    const { tasks } = this.state;
    const updatedTasks = [...tasks, { text, done: false, id: Math.random() }];
    this.setState({
      tasks: updatedTasks,
    });
  };

  onToggleStatusTask = id => {
    const updatedTasks = this.state.tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task,
    );

    this.setState({
      tasks: updatedTasks,
    });
  };

  onDeleteTask = id => {
    const updatedTasks = this.state.tasks.filter(task => task.id !== id);

    this.setState({
      tasks: updatedTasks,
    });
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
