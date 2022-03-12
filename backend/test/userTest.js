import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import chai from 'chai';
import { should } from 'chai';
import chaiHttp from 'chai-http';
import server from '../server.js';
import User from '../models/Users.js';
import { userOneId, userOne, token, setupDb } from './fixtures/db.js';

should();

chai.use(chaiHttp);

beforeEach(setupDb);

describe('User Api', () => {
  describe('Sign up User', (done) => {
    let user = {
      name: 'user2',
      email: 'user2@gmail.com',
      address: 'addressss',
      password: 'password1234',
      isAdmin: true,
    };
    it('It should register a new user', (done) => {
      chai
        .request(server)
        .post('/api/artstore/users/register')
        .send(user)
        .end((err, res) => {
          console.log(err);
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('token');
          res.body.should.have.property('success').eql(true);
          res.body.should.have
            .property('message')
            .eql('new User added successfully');
          res.body.userAdd.should.have.property('email');
          res.body.userAdd.should.have.property('name');
          res.body.userAdd.should.have.property('address');
          res.body.userAdd.should.have.property('password');
          done();
        });
    });
  });

  describe('Login User', (done) => {
    let user = {
      email: userOne.email,
      password: userOne.password,
    };
    it('It should login existing user', (done) => {
      chai
        .request(server)
        .post('/api/artstore/users/login')
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('token');
          res.body.user.should.have.property('email');
          res.body.user.should.have.property('name');
          res.body.user.should.have.property('address');
          res.body.user.should.have.property('password');
          done();
        });
    });
  });

  describe('Logout current user', (done) => {
    it('It should logout current user', (done) => {
      chai
        .request(server)
        .post('/api/artstore/users/logout')
        .set({ Authorization: `Bearer ${token}` })
        .end((err, res) => {
          console.log(err);
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('success').eql(true);
          res.body.should.have
            .property('message')
            .eql('Logged out successfully');
          done();
        });
    });
  });

  describe('Get user profile', (done) => {
    it('It should get user profile', (done) => {
      chai
        .request(server)
        .get('/api/artstore/users/showMe')
        .set({ Authorization: `Bearer ${token}` })
        .end((err, res) => {
          console.log(err);
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('success').eql(true);
          res.body.should.have.property('message').eql('heres your profile');
          res.body.profile.should.have.property('email');
          res.body.profile.should.have.property('name');
          res.body.profile.should.have.property('address');
          res.body.profile.should.have.property('password');
          done();
        });
    });
  });

  describe('Update User', (done) => {
    let user = {
      name: 'updated user1',
    };
    it('It should update the details of the existing user', (done) => {
      chai
        .request(server)
        .put('/api/artstore/users/update')
        .set({ Authorization: `Bearer ${token}` })
        .send(user)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('success').eql(true);
          res.body.should.have
            .property('message')
            .eql('User updated sucessfully');
          res.body.updateData.should.have.property('name').eql('updated user1');
          done();
        });
    });
  });

  describe('Delete User', (done) => {
    it('It should delete the logged in user', (done) => {
      chai
        .request(server)
        .delete('/api/artstore/users/delete')
        .set({ Authorization: `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('success').eql(true);
          res.body.should.have
            .property('message')
            .eql('Successfully deleted your account');
          done();
        });
    });
  });
});
