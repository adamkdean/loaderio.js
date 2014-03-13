var _ = require('underscore');
var loaderio = require('../src/loaderio');

var testObject = {
    "name": "api create test",
    "duration": 15,
    "timeout": 10000,
    "notes": "Automatically generated test",
    "initial": 0,
    "total": 250,
    "test_type": "Non-Cycling",
    "domain": "s1.amberfish.co.uk",
    "urls": [
        {
            "url": "http://s1.amberfish.co.uk/count1.php"
        }
    ]
};

loaderio.setApiKey('');

loaderio.createTest(testObject, function(error, response) {
    console.log(error, response);
});

// loaderio.stopTest('c7e6cfa1f3bddce1964cb76af27b029d', function(error, response) {
//     console.log(error, response);
// });

// loaderio.getServers(function(error, response) {
//     console.log(error, response);
// });