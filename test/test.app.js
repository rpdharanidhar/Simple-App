var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');

var expect = chai.expect;
var assert = chai.assert;

chai.use(chaiHttp);
// Testing endpoint / 
describe('Testing response from path: / ', function() {
  describe('response code:', function() {
    it('responds with status 200', function(done) {
      chai.request(app)
      .get('/')
      .end(function(err, res) {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        done();
      });
    });
  });
  // Testing whether the data returned is in JSON format
  describe('response body:', function() {
    it('responds with json Object', function(done) {
      chai.request(app)
      .get('/')
      .end(function(err, res) {
        expect(res.type, 'application/json')
        expect(err).to.be.null;
        done();
      });
    });
  });
  // Testing each JSON object field to ensure they are defined
  describe('response object value(s):', function() {
    it('the json response does not have empty value(s)', function(done) {
      chai.request(app)
      .get('/')
      .end(function(err, res) {
        expect(res.type, 'application/json')
        expect(res.text.message).not.to.be.null;
        expect(err).to.be.null;
        done();
      });
    });
  });
});
// Testing endpoint /healthcheck
describe('Testing response from path: /healthcheck', function() {
  describe('response code:', function() {
    it('responds with status 200', function(done) {
      chai.request(app)
      .get('/healthcheck')
      .end(function(err, res) {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        done();
      });
    });
  });
  // Testing whether the data returned is in JSON format
  describe('response body:', function() {
    it('responds with json Object', function(done) {
      chai.request(app)
      .get('/healthcheck')
      .end(function(err, res) {
        expect(res.type, 'application/json')
        expect(err).to.be.null;
        done();
      });
    });
  });
  // Testing each JSON object field to ensure they are defined
  describe('response object value(s):', function() {
    it('the json response does not have empty value(s)', function(done) {
      chai.request(app)
      .get('/healthcheck')
      .end(function(err, res) {
        expect(res.type, 'application/json')
        let responseJson = JSON.parse(res.text)
        // Check if the value is not null
        assert.isNotNull(responseJson.myapplication.version)
        assert.isNotNull(responseJson.myapplication.description)
        assert.isNotNull(responseJson.myapplication.lastcommitsha)
        expect(err).to.be.null;
        done();
      });
    });
  });
});