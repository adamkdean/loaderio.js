var loaderio = require('../src/loaderio');


loaderio.setApiKey('');

loaderio.getTests(function(error, response) {
    console.log(error, response);
});