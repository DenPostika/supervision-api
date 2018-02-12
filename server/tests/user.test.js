// import mongoose from 'mongoose';
// import request from 'supertest-as-promised';
// import httpStatus from 'http-status';
// import chai, { expect } from 'chai';
// import app from '../../index';
//
// chai.config.includeStack = true;
//
// /* token for auth. Expiration time - 1000 days. No TOKEN */
// const token = '';
//
// /**
//  * root level hooks
//  */
// after((done) => {
//   // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092
//   mongoose.models = {};
//   mongoose.modelSchemas = {};
//   mongoose.connection.close();
//   done();
// });
//
// describe('## User APIs', () => {
//   let user = {
//     username: 'KK123',
//     mobileNumber: '1234567890',
//     email: 'kk123@testmail.com',
//     password: '3333',
//     cardId: '121213'
//   };
//
//   describe('# POST /api/users', () => {
//     it('should create a new user', (done) => {
//       request(app)
//         .post('/api/users')
//         .set('Authorization', token)
//         .send(user)
//         .expect(httpStatus.OK)
//         .then((res) => {
//           expect(res.body.username).to.equal(user.username);
//           expect(res.body.mobileNumber).to.equal(user.mobileNumber);
//           expect(res.body.email).to.equal(user.email);
//           expect(res.body.password).to.equal(user.password);
//           expect(res.body.cardId).to.equal(user.cardId);
//           user = res.body;
//           done();
//         })
//         .catch(done);
//     });
//   });
//
//   describe('# GET /api/users/:userId', () => {
//     it('should get user details', (done) => {
//       request(app)
//         .get(`/api/users/${user._id}`)
//         .set('Authorization', token)
//         .expect(httpStatus.OK)
//         .then((res) => {
//           expect(res.body.username).to.equal(user.username);
//           expect(res.body.mobileNumber).to.equal(user.mobileNumber);
//           done();
//         })
//         .catch(done);
//     });
//
//     it('should report error with message - Not found, when user does not exists', (done) => {
//       request(app)
//         .get('/api/users/56c787ccc67fc16ccc1a5e92')
//         .set('Authorization', token)
//         .expect(httpStatus.NOT_FOUND)
//         .then((res) => {
//           expect(res.body.message).to.equal('Not Found');
//           done();
//         })
//         .catch(done);
//     });
//   });
//
//   describe('# PUT /api/users/:userId', () => {
//     it('should update user details', (done) => {
//       user.username = 'KK';
//       request(app)
//         .put(`/api/users/${user._id}`)
//         .set('Authorization', token)
//         .send(user)
//         .expect(httpStatus.OK)
//         .then((res) => {
//           expect(res.body.username).to.equal('KK');
//           expect(res.body.mobileNumber).to.equal(user.mobileNumber);
//           done();
//         })
//         .catch(done);
//     });
//   });
//
//   describe('# GET /api/users/', () => {
//     it('should get all users', (done) => {
//       request(app)
//         .get('/api/users')
//         .set('Authorization', token)
//         .expect(httpStatus.OK)
//         .then((res) => {
//           expect(res.body).to.be.an('array');
//           done();
//         })
//         .catch(done);
//     });
//
//     it('should get all users (with limit and skip)', (done) => {
//       request(app)
//         .get('/api/users')
//         .set('Authorization', token)
//         .query({ limit: 10, skip: 1 })
//         .expect(httpStatus.OK)
//         .then((res) => {
//           expect(res.body).to.be.an('array');
//           done();
//         })
//         .catch(done);
//     });
//   });
//
//   describe('# DELETE /api/users/', () => {
//     it('should delete user', (done) => {
//       request(app)
//         .delete(`/api/users/${user._id}`)
//         .set('Authorization', token)
//         .expect(httpStatus.OK)
//         .then((res) => {
//           expect(res.body.username).to.equal('KK');
//           expect(res.body.mobileNumber).to.equal(user.mobileNumber);
//           done();
//         })
//         .catch(done);
//     });
//   });
// });
