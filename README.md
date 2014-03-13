loaderio.js
===========

Node JS loader.io library. This wraps API calls to [loader.io](http://loader.io/). For more information on what to expect from the API, please read the [loader.io docs](http://docs.loader.io/api/intro.html).

    var loaderio = require('loaderio');

    // http://docs.loader.io/api/v2/get/servers.html
    loaderio.getServers(function(error, response) {});

    // http://docs.loader.io/api/v2/get/tests.html
    loaderio.getTests(function(error, response) {});

    // http://docs.loader.io/api/v2/get/tests/test_id.html
    loaderio.getTest(test_id, function(error, response) {});

    // http://docs.loader.io/api/v2/put/tests/:test_id/run.html
    loaderio.runTest(test_id, function(error, response) {});

    // http://docs.loader.io/api/v2/put/tests/:test_id/stop.html
    loaderio.stopTest(test_id, function(error, response) {});

    // http://docs.loader.io/api/v2/post/tests.html
    loaderio.createTest({
        "test_type":"cycling",
        "total": 6000,
        "duration":60,
        "urls": [
            {"url": "http://gonnacrushya.com"}
        ]
    }, function(error, response) {});

    // http://docs.loader.io/api/v2/get/apps.html
    loaderio.getApps(function(error, response) {});

    // http://docs.loader.io/api/v2/get/apps/app_id.html
    loaderio.getApp(app_id, function(error, response) {});

    // http://docs.loader.io/api/v2/post/apps.html
    loaderio.createApp({
        "app":"www.gonnacrushya.com"
    }, function(error, response) {});

    // http://docs.loader.io/api/v2/post/apps/:app_id/verify.html
    loaderio.verifyApp(app_id, function(error, response) {}, [optional] method);

    // http://docs.loader.io/api/v2/delete/apps/app_id.html
    loaderio.deleteApp(app_id, function(error, response) {});

    // http://docs.loader.io/api/v2/get/tests/:test_id/results.html
    loaderio.getAllResults(test_id, function(error, response) {});

    // http://docs.loader.io/api/v2/get/tests/:test_id/results/result_id.html
    loaderio.getResults(test_id, results_id, function(error, response) {});


The MIT License (MIT)

Copyright (c) 2014 Adam K Dean

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.