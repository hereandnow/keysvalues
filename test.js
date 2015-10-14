'use strict';
var assert = require('assert');
var keysvalues = require('./');

it('should sort it', function () {
  var testData = {
    foo: 'bar',
    baz: 1,
    unicorn: 'rainbow'
  };
  var expected = {
    keys: ['baz', 'foo', 'unicorn'],
    values: [1, 'bar', 'rainbow']
  };
  assert.deepEqual(keysvalues(testData), expected);
});
