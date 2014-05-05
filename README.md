httpplease-promises
===================

A plugin that adds promise support to [httpplease].


Installation
------------

[node], [browserify] and [webpack] users:

`npm install httpplease-promises`

[Bower] users:

`bower install httpplease-promises`


Usage
-----

```javascript
var httpplease = require('httpplease'),
    promises = require('httpplease-promises'),
    http = httpplease.use(promises);

http
    .get('http://example.com')
    .then(function (res) {
        console.log(res.body); // or whatever.
    });
```

Alernatively, AMD users can use `define` and script tag users can use
`window.httppleasepromises`.


[httpplease]: https://github.com/matthewwithanm/httpplease.js
[node]: http://nodejs.org
[browserify]: http://browserify.org
[webpack]: http://webpack.github.io
[Bower]: http://bower.io
