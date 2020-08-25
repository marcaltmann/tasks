import slice from './categories_slice.js';

const { reducer, actions } = slice;
const { requestFetch, resolveFetch, rejectFetch } = actions;

test('requestFetch does nothing', () => {
  let result = reducer(null, requestFetch());
  let expected = null;

  expect(result).toBe(expected);
});

test('resolveFetch saves fetched results', () => {
  let result = reducer(null, resolveFetch({
    entities: {
      categories: {
        0: { id: '0' },
        1: { id: '1' },
      },
    },
    result: ['0', '1'],
  }));
  let expected = {
    byId: {
      0: { id: '0' },
      1: { id: '1' },
    },
    allIds: ['0', '1'],
  };

  expect(result).toEqual(expected);
});

test('rejectFetch registers error', () => {
  let result = reducer(null, rejectFetch('Error'));
  let expected = { error: 'Error' };

  expect(result).toEqual(expected);
});
