import slice from './categories_slice.js';

test('reducer', () => {
  const { reducer, actions } = slice;
  const { requestFetch, resolveFetch, rejectFetch } = actions;

  let result = reducer(null, rejectFetch('Error'));
  let expected = { error: 'Error' };

  expect(result).toEqual(expected);
});
