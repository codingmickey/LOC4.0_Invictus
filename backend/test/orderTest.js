import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import chai from 'chai';
import { should } from 'chai';
import chaiHttp from 'chai-http';
import server from '../server.js';
import User from '../models/Users.js';
import {
  userOneId,
  userOne,
  token,
  artworkOne,
  orderOneId,
  orderOne,
  setupDb,
} from './fixtures/db.js';

beforeEach(setupDb);

describe('Order Api', () => {
  describe('Get orders by id', (done) => {
    it('It should all orders of one user', (done) => {
      chai
        .request(server)
        .get('/api/artstore/orders/showByID')
        .set({ Authorization: `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('success').eql(true);
          res.body.should.have
            .property('message')
            .eql('The order of given id is given below');
          done();
        });
    });
  });

  describe('Add an order', (done) => {
    let order = {
      _id: new mongoose.Types.ObjectId(),
      orderPlacer: userOneId,
      artworks: [{ artworkRequired: artworkOne._id }],
      totalPrice: 700,
      payMethod: 'cash',
    };
    it('It should add a new order', (done) => {
      chai
        .request(server)
        .post('/api/artstore/orders/add')
        .set({ Authorization: `Bearer ${token}` })
        .send(order)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('success').eql(true);
          res.body.should.have
            .property('message')
            .eql('new order added successfully');
          res.body.newOrder.should.have.property('orderPlacer');
          res.body.newOrder.should.have.property('artworks');
          res.body.newOrder.should.have.property('totalPrice');
          res.body.newOrder.should.have.property('payMethod');
          done();
        });
    });
  });

  describe('Update order', (done) => {
    it('It should update the details of the existing order', (done) => {
      chai
        .request(server)
        .put(`/api/artstore/orders/update/${orderOneId}`)
        .set({ Authorization: `Bearer ${token}` })
        .send({
          payMethod: 'card',
        })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('success').eql(true);
          res.body.should.have
            .property('message')
            .eql('Order updated sucessfully');
          res.body.updateData.should.have.property('payMethod').eql('card');
          done();
        });
    });
  });

  describe('Delete order', (done) => {
    it('It should delete the order by id', (done) => {
      chai
        .request(server)
        .delete(`/api/artstore/orders/delete/${orderOneId}`)
        .set({ Authorization: `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('success').eql(true);
          res.body.should.have
            .property('message')
            .eql('Order removed successfully');
          done();
        });
    });
  });
});
