'use strict';
module.exports = function (length) {
    if(typeof length !== 'number') {
        throw new TypeError('Expected a number');
    }

    if(length < 1) {
        throw new RangeError('Length must be greater than zero');
    }

    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
           id = '';

    for (var i = 0; i < length; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return id;
};