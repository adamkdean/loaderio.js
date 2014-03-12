var should = require('should');
var loaderio = require('../src/loaderio');

var TEST_API_KEY = 'THIS_IS_A_TEST_API_KEY';

describe('loaderio', function() {

    it('should not have the property api key', function() {
        loaderio.should.not.have.property('apiKey');
    });

    it('should set the api key', function() {
        loaderio.setApiKey(TEST_API_KEY);
        loaderio.should.have.property('apiKey', TEST_API_KEY);
    });

    it('should return the api key', function() {
        loaderio.getApiKey().should.equal(TEST_API_KEY);
    });


})