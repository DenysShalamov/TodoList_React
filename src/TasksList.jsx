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

  render() {
    return (
      <main className="todo-list">
        <CreateTaskInput />
        <ul className="list">
          {this.state.tasks.map(task => (
            <Task key={task.id} {...task} />
          ))}
        </ul>
      </main>
    );
  }
}

export default TasksList;
