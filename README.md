httpplease-promises
===================

A plugin that adds promise support to [httpplease].


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


[httpplease]: https://github.com/matthewwithanm/httpplease.js
