


// var should = require('should');
// var nock = require('nock');
// var loaderio = require('../src/loaderio');

// var API_URL = 'https://api.loader.io';
// var TEST_API_KEY = 'THIS_IS_A_TEST_API_KEY';

// var mockObjects = {};
// mockObjects['/v2/servers'] = {
//     "ip_addresses":["127.0.0.1","192.168.0.1"]
// };
// mockObjects['/v2/tests'] = [
//     {
//         "name": "test name",
//         "duration": 120,
//         "timeout": 10000,
//         "notes": "Some notes here",
//         "initial": 0,
//         "total": 10000,
//         "status": "complete",
//         "test_id": "0b5786699bfec63cac78c22672895eac",
//         "test_type": "Non-Cycling",
//         "callback": null,
//         "callback_email": null,
//         "scheduled_at": null,
//         "domain": "127.0.0.1",
//         "urls": [
//             {
//                 "url": "http://127.0.0.1/test/",
//                 "raw_post_body": null,
//                 "request_type": "GET",
//                 "payload_file_url": null,
//                 "headers": {},
//                 "request_params": {},
//                 "authentication": null
//             }
//         ]
//     }
// ];
// mockObjects['/v2/tests/0b5786699bfec63cac78c22672895eac'] = {
//     "name": "test name",
//     "duration": 120,
//     "timeout": 10000,
//     "notes": "Some notes here",
//     "initial": 0,
//     "total": 10000,
//     "status": "complete",
//     "test_id": "0b5786699bfec63cac78c22672895eac",
//     "test_type": "Non-Cycling",
//     "callback": null,
//     "callback_email": null,
//     "scheduled_at": null,
//     "domain": "127.0.0.1",
//     "urls": [
//         {
//             "url": "http://127.0.0.1/test/",
//             "raw_post_body": null,
//             "request_type": "GET",
//             "payload_file_url": null,
//             "headers": {},
//             "request_params": {},
//             "authentication": null
//         }
//     ]
// };

// var mockApi = nock(API_URL);
// mockApi.get('/v2/servers').reply(200, mockObjects['/v2/servers']);
// mockApi.get('/v2/tests').reply(200, mockObjects['/v2/tests']);

// describe('loaderio', function() {

//     it('should not have the property api key', function() {
//         loaderio.should.not.have.property('apiKey');
//     });

//     it('should set the api key', function() {
//         loaderio.setApiKey(TEST_API_KEY);
//         loaderio.should.have.property('apiKey', TEST_API_KEY);
//     });

//     it('should return the api key', function() {
//         loaderio.getApiKey().should.equal(TEST_API_KEY);
//     });

//     it('should retrieve a list of servers', function() {
//         loaderio.getServers(function(error, result) {
//             should.not.exist(error);
//             should.exist(result);
//             result.should.match(mockObjects['/v2/servers']);
//         });
//     });

//     it('should retrieve a list of tests', function() {
//         loaderio.getTests(function(error, result) {
//             should.not.exist(error);
//             should.exist(result);
//             result.should.match(mockObjects['/v2/tests']);
//         });
//     });

//     it('should retrieve the specific test', function() {
//         loaderio.getTestById('0b5786699bfec63cac78c22672895eac', function(error, result) {
//             should.not.exist(error);
//             should.exist(result);
//             result.should.match(mockObjects['/v2/tests/0b5786699bfec63cac78c22672895eac']);
//         });
//     });

//     it('should fail to retrieve the unknown test', function() {
//         loaderio.getTestById('unknown_test_id', function(error, result) {
//             should.not.exist(result);
//             should.exist(error);
//             result.should.match({});
//         });
//     });

// })