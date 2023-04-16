import { TASKS_DATA_RECIEVED } from './tasks.actions';

const initialState = {
  tasksList: [],
};

const tasksListReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASKS_DATA_RECIEVED:
      return {
        ...state,
        tasksList: action.payload.tasksList,
      };
    default:
      return state;
  }
};

export default tasksListReducer;
