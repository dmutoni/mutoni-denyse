import * as request from 'supertest';
import UserMock from './mocks/user.mock';
import { APP_URL } from './utils/constant';

jest.useFakeTimers();
jest.setTimeout(30000);

describe('Users controller', () => {
  let token;

  describe('Account registration', () => {
    it('validate missing email in the body before creating a new account', async () => {
      UserMock.email = '';
      return request(APP_URL)
        .post('/api/v1/users')
        .send(UserMock)
        .expect(422)
        .expect(({ body }) => {
          expect(body.errors.email).toEqual(
            'email must be an email, email should not be empty'
          );
        });
    });
  });
});
