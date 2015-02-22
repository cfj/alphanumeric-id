var test = require('tape');
var alphanumeric = require('./');

test('correct length', function(t) {
    var id;

    t.plan(3);

    id = alphanumeric(5);
    t.equal(id.length, 5);

    id = alphanumeric(10);
    t.equal(id.length, 10);

    id = alphanumeric(12);
    t.equal(id.length, 12);
});

test('throw error on strings', function(t) {
    t.plan(1);

    t.throws(function() {
        alphanumeric('cotton candy');
    }, TypeError, 'number expected');
});

test('throw error on zero or negative numbers', function(t) {
    t.plan(2);

    t.throws(function() {
        alphanumeric(0);
    }, RangeError, 'number greater than zero expected');

    t.throws(function() {
        alphanumeric(-3);
    }, RangeError, 'number greater than zero expected');
});