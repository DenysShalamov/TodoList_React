const baseUrl = 'https://62d6fb0b51e6e8f06f16d24a.mockapi.io/tasks';

const request = async function (
  url,
  { method = 'GET', body = {}, ...rest } = {},
) {
  try {
    const options = {
      method,
      body: JSON.stringify(body),
      ...rest,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    };

    const response =
      method === 'GET'
        ? await fetch(`${baseUrl}${url}`)
        : await fetch(`${baseUrl}${url}`, options);

    if (!response.ok) {
      throw new Error('Server Error');
    }

    return await response.json();
  } catch (err) {
    alert('Internal Server Error');
  }
};

const getTasks = () => request('');

const createTask = taskData => request('', { method: 'POST', body: taskData });

const deleteTask = taskId => request(`/${taskId}`, { method: 'DELETE' });

const updateTask = (taskId, taskData) =>
  request(`/${taskId}`, { method: 'PUT', body: taskData });

export default {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
};
