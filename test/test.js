var loaderio = require('../src/loaderio');


loaderio.setApiKey(' ');

loaderio.getServers(function(error, response) {
    console.log(error, response);
});