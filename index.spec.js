'use strict';

//====================================================================

var createArray = require('./');
var expect = require('chai').expect;

//====================================================================

describe('createArray()', function () {
  it('works with non function generator', function () {
    expect(createArray(10, 'foo')).to.deep.equal([
      'foo', 'foo', 'foo', 'foo', 'foo',
      'foo', 'foo', 'foo', 'foo', 'foo'
    ]);
  });

  it('works with function generator', function () {
    expect(createArray(10, function (i) {
      return 'item #' + i;
    })).to.deep.equal([
      'item #0', 'item #1', 'item #2', 'item #3', 'item #4',
      'item #5', 'item #6', 'item #7', 'item #8', 'item #9'
    ]);
  });
});
