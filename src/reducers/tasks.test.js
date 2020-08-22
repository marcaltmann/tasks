import tasksReducer from './tasks.js';

test('returns initial state', () => {
  let result = tasksReducer(undefined, { type: '@@INIT' });
  let expected = {
    byId: {},
  };
  expect(result).toEqual(expected);
});

test('saves tasks by id with categories fetch succeeding', () => {
  let previousState = {
    byId: {},
  };
  let action = {
    type: 'categories/fetchSucceeded',
    payload: {
      result: [],
      entities: {
        categories: {},
        tasks: {
          '0': 'task',
          '1': 'another task',
        },
      },
    },
  };
  let result = tasksReducer(previousState, action);
  let expected = {
    byId: {
      '0': 'task',
      '1': 'another task',
    },
  };
  expect(result).toEqual(expected);
});

test('clears tasks with categories fetch failing (why?)', () => {
  let previousState = {
    byId: { 0: 'task' },
  };
  let action = {
    type: 'categories/fetchFailed',
    message: 'Network error',
  };
  let result = tasksReducer(previousState, action);
  let expected = { byId: {} };
  expect(result).toEqual(expected);
});
