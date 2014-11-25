# create-array

[![Build Status](https://img.shields.io/travis/julien-f/js-create-array/master.svg)](http://travis-ci.org/julien-f/js-create-array)

> Easier array creation

## Features

- Compatible Node & browsers
- Pre-allocate array for better performance.

## Installation

### Node

Installation of the [npm package](https://npmjs.org/package/create-array):

```
> npm install --save create-array
```

Then require the package:

```javascript
var createArray = require('create-array');
```

### Browser

Clone the git repository and compile the browser version of the
library:

```
> git clone https://github.com/julien-f/js-create-array.git
> npm install
> npm run browserify
```

Then import the script `create-array.js` which has been compiled in
the `dist/` directory:

```html
<script src="dist/create-array.js"></script>
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

- report any [issue](https://github.com/julien-f/js-create-array/issues)
  you've encountered;
- fork and create a pull request.

## License

ISC © [Julien Fontanet](http://julien.isonoe.net)
