# create-array [![Build Status](https://img.shields.io/travis/JsCommunity/create-array/master.svg)](http://travis-ci.org/JsCommunity/create-array)

> Create an array from a given size and a generator

## Features

- Compatible Node & browsers
- Pre-allocate array for better performance.

## Installation

### Node & [Browserify](http://browserify.org/)/[Webpack](https://webpack.js.org/)

Installation of the [npm package](https://npmjs.org/package/create-array):

```
> npm install --save create-array
```

Then require the package:

```javascript
var createArray = require('create-array');
```

### Browser

You can directly use the build provided at [unpkg.com](https://unpkg.com):

```html
<script src="https://unpkg.com/create-array@1/dist/create-array.js"></script>
```

## Usage

`var array = createArray(length, generator)`:

```javascript
// From a value.
console.log(createArray(3, 'foo'));
// → ['foo', 'foo', 'foo']

// With a function.
console.log(createArray(3, function (i) {
  return 'item #' + i;
}));
// → ['item #0', 'item #1', 'item #2']
```

## Contributions

Contributions are *very* welcomed, either on the documentation or on
the code.

You may:

- report any [issue](https://github.com/JsCommunity/create-array/issues)
  you've encountered;
- fork and create a pull request.

## License

ISC © [Julien Fontanet](http://julien.isonoe.net)
