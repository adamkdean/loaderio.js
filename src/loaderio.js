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

var API_URL = 'https://api.loader.io';

function LoaderIO() { }

LoaderIO.prototype.setApiKey = function(apiKey) {
    this.apiKey = apiKey;
}

LoaderIO.prototype.getApiKey = function() {
    return this.apiKey;
}

LoaderIO.prototype.getServers = function(callback) {
    request(API_URL + '/v2/servers', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            callback(null, JSON.parse(body));
        } else {
            callback(error, {});
        }
    });
}

LoaderIO.prototype.getTests = function(callback) {
    request(API_URL + '/v2/tests', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            callback(null, JSON.parse(body));
        } else {
            callback(error, {});
        }
    });
}





module.exports = new LoaderIO();