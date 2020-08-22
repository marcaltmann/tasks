import request from 'supertest';

import app from './index.mjs';

test('returns all data at once', () => {
  return request(app)
    .get('/api/all')
    .then((res) => {
      expect(res.status).toBe(200);
    });
});
