/*jshint strict:false */
/*globals describe, it */

var
    assert = require('chai').assert,
    httpplease = require('httpplease'),
    promises = require('../httpplease-promises'),
    testServerUrl = 'http://localhost:4001',
    Promise = require('es6-promise').Promise,
    http = httpplease.use(promises(Promise));


describe('httpplease-promises', function () {
    it('makes requests thenable', function (done) {
        http
            .get(testServerUrl + '/getjson')
            .then(function (res) {
                assert.equal(res.text, JSON.stringify({hello: 'world'}));
                done();
            });
    });
    it('still calls onload', function (done) {
        http.get({
            url: testServerUrl + '/getjson',
            onload: function (res) {
                assert.equal(res.text, JSON.stringify({hello: 'world'}));
                done();
            }
        });
    });
    it('makes requests catchable', function (done) {
        http
            .get(testServerUrl + '/404')
            .catch(function (err) { // jshint ignore:line
                assert.equal(err.status, 404);
                assert(err.isHttpError);
                done();
            });
    });
    it('still calls onerror', function (done) {
        http.get({
            url: testServerUrl + '/404',
            onerror: function (err) {
                assert.equal(err.status, 404);
                assert(err.isHttpError);
                done();
            }
        });
    });
});
