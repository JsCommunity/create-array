/* eslint-env jest */

'use strict'

// ====================================================================

var createArray = require('./')

// ====================================================================

describe('createArray()', function () {
  it('default generator use the index', function () {
    expect(createArray(5)).toEqual([
      0, 1, 2, 3, 4
    ])
  })

  it('works with non function generator', function () {
    expect(createArray(5, 'foo')).toEqual([
      'foo', 'foo', 'foo', 'foo', 'foo'
    ])
  })

  it('works with function generator', function () {
    expect(createArray(5, function (i) {
      return 'item #' + i
    })).toEqual([
      'item #0', 'item #1', 'item #2', 'item #3', 'item #4'
    ])
  })
})
