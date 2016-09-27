'use strict'

// ===================================================================

var isFunction = (function (toString) {
  var tag = toString.call(toString)
  return function isFunction (val) {
    return toString.call(val) === tag
  }
})(Object.prototype.toString)

function wrapValue (value) {
  return function wrappedValue () {
    return value
  }
}

// -------------------------------------------------------------------

module.exports = function createArray (n, generator) {
  var i, ar
  ar = new Array(n)

  if (!isFunction(generator)) {
    generator = wrapValue(generator)
  }

  for (i = 0; i < n; ++i) {
    ar[i] = generator(i)
  }

  return ar
}
