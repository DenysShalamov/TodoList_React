import { createSelector } from 'reselect';

export const tasksSelector = state => state.tasks.tasksList;

export const isFetchingSelector = state => state.tasks.isFetching;

export const sortedTaskSelector = createSelector([tasksSelector], tasksList => {
  return tasksList.slice(0).sort((a, b) => a.done - b.done);
});
