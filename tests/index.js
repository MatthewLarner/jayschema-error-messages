var test = require('tape'),
    normalise = require('../'),
    testErrors = require('./testErrors');

test('normalise Exists', function (t) {
    t.plan(2);
    t.ok(normalise, 'normalise Exists');
    t.equal(typeof normalise, 'function',  'normalise is a function');
});

test('normalise returns correct messages', function (t) {
    t.plan(19);

    var errors = normalise(testErrors),
        errorKeys = Object.keys(errors);

    t.ok(errors, 'errors returned');
    t.equal(errorKeys.length, 16, 'correct error keys');

    t.deepEqual(errors.test1, 'Required', 'Correct required message');
    t.deepEqual(errors.foo, 'Required', 'Correct required message');
    t.notOk(errors.bar, 'bar should not error as required');
    t.deepEqual(errors.minimum, 'Must be greater than 4', 'Correct minimum message');
    t.deepEqual(errors.maximum, 'Must be less than 8', 'Correct maximum message');
    t.deepEqual(errors.array, 'Should be an array', 'Correct type message');
    t.deepEqual(errors.object, 'Should be an object', 'Correct type message');
    t.deepEqual(errors.string, 'Should be a string', 'Correct type message');
    t.deepEqual(errors.minLength, 'Must be longer than 7 characters', 'Correct minLength message');
    t.deepEqual(errors.maxLength, 'Must be shorter than 5 characters', 'Correct maxLength message');
    t.deepEqual(errors.datetime, 'Should be a date', 'Correct date format message');
    t.deepEqual(errors.pattern, 'Invalid format', 'Correct regex format message');
    t.deepEqual(errors.email, 'Should be a valid email address', 'Correct email format message');
    t.deepEqual(errors.ipv4, 'Should be a dotted-quad IPv4 address', 'Correct ipv4 format message');
    t.deepEqual(errors.ipv6, 'Should be a valid IPv6 address', 'Correct ipv6 format message');
    t.deepEqual(errors.uri, 'Should be a valid uri', 'Correct uri format message');
    t.deepEqual(errors.clientId, 'Additional property "clientId" not allowed', 'Correct format message');
});