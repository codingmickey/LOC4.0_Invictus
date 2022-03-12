import chai from 'chai';
import { should } from 'chai';
import chaiHttp from 'chai-http';
import server from '../server.js';
import {
  userOne,
  userOneId,
  token,
  artworkOne,
  setupDb,
} from './fixtures/db.js';

describe('Artwork Api', () => {
  describe('Get all artworks', (done) => {
    it('It should get all the artworks', (done) => {
      chai
        .request(server)
        .get('/api/artstore/artworks/listAll')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('success').eql(true);
          res.body.should.have
            .property('message')
            .eql('heres the list of all the artworks');
          done();
        });
    });
  });

  describe('Get artwork by id', (done) => {
    it('It should one artwork by id', (done) => {
      chai
        .request(server)
        .get('/api/artstore/artworks/showByID')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('success').eql(true);
          res.body.should.have
            .property('message')
            .eql('The artwork of given id is given below');
          done();
        });
    });
  });

  describe('Add an artwork', (done) => {
    let artwork = {
      artImage: 'image2',
      price: '700',
      description: 'this is test artwork 2',
      size: [100, 100],
    };
    it('It should add a new artwork', (done) => {
      chai
        .request(server)
        .post('/api/artstore/artworks/add')
        .set({ Authorization: `Bearer ${token}` })
        .send(artwork)
        .end((err, res) => {
          console.log(err);
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('success').eql(true);
          res.body.should.have
            .property('message')
            .eql('new artwork added successfully');
          res.body.newArtwork.should.have.property('artImage');
          res.body.newArtwork.should.have.property('price');
          res.body.newArtwork.should.have.property('description');
          res.body.newArtwork.should.have.property('size');
          done();
        });
    });
  });

  describe('Update artwork', (done) => {
    it('It should update the details of the existing artwork', (done) => {
      chai
        .request(server)
        .put('/api/artstore/artworks/update')
        .set({ Authorization: `Bearer ${token}` })
        .send({
          artworkID: artworkOne._id,
          name: 'updated artwork1',
        })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('success').eql(true);
          res.body.should.have
            .property('message')
            .eql('Artwork updated sucessfully');
          res.body.updateData.should.have
            .property('name')
            .eql('updated artwork1');
          done();
        });
    });
  });

  describe('Delete artwork', (done) => {
    it('It should delete the artwork by id', (done) => {
      chai
        .request(server)
        .delete('/api/artstore/artworks/delete')
        .set({ Authorization: `Bearer ${token}` })
        .send({
          artworkID: artworkOne._id,
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('success').eql(true);
          res.body.should.have
            .property('message')
            .eql('Artwork removed successfully');
          done();
        });
    });
  });
});
