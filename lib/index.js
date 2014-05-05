'use strict';

var Promise = require('es6-promise').Promise;

module.exports = {
    processRequest: function (req) {
        var resolve, reject,
            oldOnload = req.onload,
            oldOnerror = req.onerror,
            promise = new Promise(function (a, b) {
                resolve = a;
                reject = b;
            });
        req.onload = function (res) {
            var result;
            if (oldOnload) {
                result = oldOnload.apply(this, arguments);
            }
            resolve(res);
            return result;
        };
        req.onerror = function (err) {
            var result;
            if (oldOnerror) {
                result = oldOnerror.apply(this, arguments);
            }
            reject(err);
            return result;
        };
        req.then = function () {
            return promise.then.apply(promise, arguments);
        };
        req['catch'] = function () {
            return promise['catch'].apply(promise, arguments);
        };
    }
};
