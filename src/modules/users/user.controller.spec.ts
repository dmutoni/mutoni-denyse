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
    // it('should register a client', async () => {
    //   return request(APP_URL)
    //     .post('/api/v1/clients/register')
    //     .send(UserMock)
    //     .expect(201)
    //     .expect(({ body }) => {
    //       expect(body).toBeDefined();
    //     });
    // });
  });

  //   describe('Authentication', () => {
  //     it('fails to log in the client with invalid credentials /api/v1/clients/login (POST)', () => {
  //       return request(APP_URL)
  //         .post('/api/v1/clients/login')
  //         .send(
  //           {
  //             "email":'pazzo@gmail.com',
  //             "password":"password"
  //           }
  //         )
  //         .expect(200)
  //         .expect(({ body }) => {
  //           token = body.data.accessToken;
  //           expect(body.message).toBeDefined();
  //           expect(body.statusCode).toBeDefined();
  //           expect(body.data.accessToken).toBeDefined();
  //         });
  //     });
  //     it('login the client /api/v1/clients/login (POST)', () => {
  //       return request(APP_URL)
  //         .post('/api/v1/clients/login')
  //         .send({
  //           email:'pazzo@gmail.com',
  //           password:'password'
  //         })
  //         .expect(200)
  //         .expect(({ body }) => {
  //           token = body.data.accessToken;
  //           expect(body.message).toBeDefined();
  //           expect(body.statusCode).toBeDefined();
  //           expect(body.data.accessToken).toBeDefined();
  //         });
  //     });

  //     it('throws Unauthorized error when client is not logged in /api/v1/clients/profile/me (GET)', () => {
  //       return request(APP_URL).get('/api/v1/clients/profile/me').expect(401);
  //     });
  //   });

  //   describe('Account profile', () => {

  //       it('fetches client profile /api/v1/clients/profile/me (GET)', () => {
  //       return request(APP_URL)
  //         .get('/api/v1/clients/profile/me')
  //         .set('Authorization', `Bearer ${token}`)
  //         .expect(200)

  //     // });
  //   })

  //     it('updates the account-profile', () =>{
  //       return request(APP_URL)
  //       .put('/api/v1/clients/profile')
  //       .set('Authorization', `Bearer ${token}`)
  //       .send(
  //         {
  //         "full_names": "max Hart",
  //         "phone_number": "8999518976",
  //         "address": "huye, Rwanda",
  //         "profile_picture": "https://placehold.it/50",
  //         "gender": "Female"
  //         }
  //       ).expect(200)
  //     })

  //     it('updates the account-passwod', () =>{
  //       return request(APP_URL)
  //       .put('/api/v1/clients/password/')
  //       .set('Authorization', `Bearer ${token}`)
  //       .send(
  //         {
  //           "current_password":"password",
  //           "new_password":"password"
  //       }
  //       ).expect(200)
  //     })

  //   });
});
