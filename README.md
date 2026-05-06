## ⚠️ Project retired / unmaintained

This project is no longer maintained.

It may contain dependencies with known critical security vulnerabilities. Do not use this project in production or as the basis for new work.

Recommended action: use an actively maintained alternative, or fork and audit the code and dependencies yourself.

---


# force-canvas-context

sanity check to get the context if input happens to be the canvas; errors if it can't return a context

[![Build Status](https://travis-ci.org/willhoag/force-canvas-context.svg)](https://travis-ci.org/willhoag/force-canvas-context)
[![npm version](https://badge.fury.io/js/force-canvas-context.svg)](http://badge.fury.io/js/force-canvas-context)

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install force-canvas-context --save
```

## Usage

```js
var forceCanvasContext = require('force-canvas-context');

let canvas = document.createElement('canvas')

let context = forceCanvasContext(canvas)
context = forceCanvasContext(canvas.getContext('2d'))
context = forceCanvasContext('not a context or canvas') // Error
```

## API

`forceCanvasContext(ctx:context):context`

...

## License

MIT
