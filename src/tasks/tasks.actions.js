import { fetchTasksList } from './tasksGateway';

export const TASKS_DATA_RECIEVED = 'TASKS/TASKS_DATA_RECIEVED';

export const tasksDataRecieved = tasksList => {
  return {
    type: TASKS_DATA_RECIEVED,
    payload: {
      tasksList,
    },
  };
};

export const getTasksData = () => {
  const thunkAction = function (dispatch) {
    fetchTasksList()
      .then(tasksData => dispatch(tasksDataRecieved(tasksData)))
      .catch(err => console.log(err.message));
  };
  return thunkAction;
};
