import forceCanvasContext from './'

let canvas = document.createElement('canvas')

let context = forceCanvasContext(canvas)
context = forceCanvasContext(canvas.getContext('2d'))
context = forceCanvasContext('not a context or canvas') // Error
