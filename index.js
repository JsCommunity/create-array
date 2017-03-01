'use strict'

// ===================================================================

function identity (value) {
  return value
}

function wrapValue (value) {
  return function wrappedValue () {
    return value
  }
}

// -------------------------------------------------------------------

module.exports = function createArray (n, generator) {
  var i, ar
  ar = new Array(n)

  if (generator === undefined) {
    generator = identity
  } if (typeof generator !== 'function') {
    generator = wrapValue(generator)
  }

  for (i = 0; i < n; ++i) {
    ar[i] = generator(i)
  }

  return ar
}
