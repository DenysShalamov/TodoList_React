import apiTasks from '../api/tasksGateway';
import { tasksSelector } from './tasks.selectors';

export const TASKS_LIST_RECIEVED = 'TASKS_LIST_RECIEVED';
export const SHOW_SPINNER = 'SHOW_SPINNER';

export const showSpinner = () => {
  return {
    type: SHOW_SPINNER,
  };
};

export const tasksListRecieved = taskList => {
  return {
    type: TASKS_LIST_RECIEVED,
    payload: {
      taskList,
    },
  };
};

export const getTasksList = () => {
  return dispatch => {
    dispatch(showSpinner());
    apiTasks.getTasks().then(taskData => dispatch(tasksListRecieved(taskData)));
  };
};

export const updateTasksList = taskId => {
  return (dispatch, getState) => {
    dispatch(showSpinner());
    const state = getState();
    const taskList = tasksSelector(state);
    const task = taskList.find(task => task.id === taskId);
    const updatedTask = { ...task, done: !task.done };

    apiTasks
      .updateTask(taskId, updatedTask)
      .then(() => dispatch(getTasksList()));
  };
};

export const deleteTasksList = taskId => {
  return dispatch => {
    dispatch(showSpinner());
    apiTasks.deleteTask(taskId).then(() => dispatch(getTasksList()));
  };
};

export const createTasksList = text => {
  return dispatch => {
    if (text === '') {
      return null;
    }
    dispatch(showSpinner());
    const newTask = {
      text,
      done: false,
    };
    apiTasks.createTask(newTask).then(() => dispatch(getTasksList()));
  };
};
