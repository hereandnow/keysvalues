# keysvalues [![Build Status](https://travis-ci.org/hereandnow/keysvalues.svg?branch=master)](https://travis-ci.org/hereandnow/keysvalues)

> My funkadelic module


## Install

```
$ npm install --save keysvalues
```


## Usage

```js
var keysvalues = require('keysvalues');

var data = {
  foo: 'bar',
  baz: 1,
  unicorn: 'rainbow'
};
var result = keysvalues(data);
//=> { keys: ['baz', 'foo', 'unicorn'], values: [1, 'bar', 'rainbow'] };
```


## API

### keysvalues(input)

#### input

Type: `object`

Input-Data

## License

MIT © [hereandnow](http://bastianbehrens.de)
