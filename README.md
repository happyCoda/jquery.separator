# jQuery.separator
> jQuery plugin for separating parts in string representation of large numbers

## Installation
Library can be installed via [Bower](http://bower.io/) package manager:

```shell
bower i jquery.separator
```

Or you can clone a git repo:

```shell
git clone https://github.com/happyCoda/jquery.separator.git
```

### Usage

`Separator` is a `jQuery` plugin, so it requires that library installed. Plugin had been developed and tested with jQuery of version `2.0.3`, but definitely will work fine with any version above or below.

```js
var bigNum = 10000;

$.separator(bignum) // => will return a string 10 000
```

## Release History
* 2016-02-07   v0.3.1   A bit of refactor.
* 2016-02-07   v0.3.0   New separation algorithm. Tests added. Docs added. Bower integration.
* 2013-08-05   v0.2.0   Separation algorithm rewritten.
* 2013-08-05   v0.1.0   First release. Demo.
