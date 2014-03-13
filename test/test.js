var loaderio = require('../src/loaderio');


loaderio.setApiKey('');

loaderio.getApps(function(error, response) {
    console.log(error, response);
});

