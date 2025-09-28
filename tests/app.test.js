import supertest from 'supertest';
import app from '../src/app.js';
import logger from '../src/config/logger.js';
import { jest } from '@jest/globals';


describe('App', () => {
  it('should return 404 for unknown routes', async () => {
    const response = await supertest(app).get('/unknown');
    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: 'Route not found' });
  });

  it('should return 500 for server errors', async () => {
    jest.spyOn(logger, 'error').mockImplementation(() => {});
    const response = await supertest(app).get('/error');
    expect(response.status).toBe(500);
    expect(response.body).toEqual({ message: 'Internal Server Error' });
  });
});
