/*
    loaderio.js - Node JS loader.io library

    The MIT License (MIT)

    Copyright (c) 2014 Adam K Dean

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
*/

var request = require('request');

function LoaderIO() {
    this.apiUrl = 'https://api.loader.io';
}

LoaderIO.prototype.setApiKey = function(apiKey) {
    this.apiKey = apiKey;
}

LoaderIO.prototype.getApiKey = function() {
    return this.apiKey;
}

LoaderIO.prototype.performApiRequest = function(uri, callback, method) {
    request(
        {
            method: method || 'GET',
            url: this.apiUrl + uri,
            headers: { 'loaderio-auth': this.apiKey }
        },
        function(error, response, body) {
            if (!error && response.statusCode == 200) {
                callback(null, JSON.parse(body));
            } else {
                callback(error, null);
            }
        }
    );
}

LoaderIO.prototype.getServers = function(callback) {
    this.performApiRequest('/v2/servers', callback);
}

LoaderIO.prototype.getTests = function(callback) {
    this.performApiRequest('/v2/tests', callback);
}

LoaderIO.prototype.getTestById = function(test_id, callback) {
    this.performApiRequest('/v2/tests/' + test_id, callback);
}

LoaderIO.prototype.runTestById = function(test_id, callback) {
    this.performApiRequest('/v2/tests/' + test_id + '/run', callback, 'PUT');
}

LoaderIO.prototype.stopTestById = function(test_id, callback) {
    this.performApiRequest('/v2/tests/' + test_id + '/stop', callback, 'PUT');
}

LoaderIO.prototype.getApps = function(callback) {
    this.performApiRequest('/v2/apps', callback);
}

LoaderIO.prototype.getAppById = function(app_id, callback) {
    this.performApiRequest('/v2/apps/' + app_id, callback);
}

module.exports = new LoaderIO();