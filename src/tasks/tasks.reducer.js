import { TASKS_LIST_RECIEVED, SHOW_SPINNER } from './tasks.actions';

const initialState = {
  tasksList: [],
  isFetching: false,
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SPINNER: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case TASKS_LIST_RECIEVED: {
      return {
        ...state,
        tasksList: action.payload.taskList,
        isFetching: false,
      };
    }
    default:
      return state;
  }
};

export default tasksReducer;
