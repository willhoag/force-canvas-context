import tape from 'tape'
import createCanvas from 'create-canvas'
import forceCanvasContext from '../src/'
import isContext from 'is-canvas-context'

let canvas = null

function test (description, fn) {
  tape(description, function (t) {
    t.done = () => {
      t.end()
      canvas = null
    }
    canvas = createCanvas()
    fn(t)
  })
}

test('should return a canvas', function (t) {
  t.ok(isContext(forceCanvasContext(canvas)), 'it does')
  t.ok(isContext(forceCanvasContext(canvas.getContext('2d'))), 'it does')
  t.done()
})

test('should error if doesn\'t receive a context or canvas', function (t) {
  let fail = true
  try {
    forceCanvasContext('not a canvas')
  } catch (e) {
    fail = false
    t.pass('error was produced when giving a string')
  }
  if (fail) {
    t.fail('it should have thrown an error')
  }
  t.done()
})
