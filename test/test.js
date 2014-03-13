var loaderio = require('../src/loaderio');


loaderio.setApiKey('');

loaderio.getAppById('', function(error, response) {
    console.log(error, response);
});

